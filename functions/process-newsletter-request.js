import buildResponse from './utils/buildResponse';
import sendEmailWithMailgun from './helpers/sendEmailWithMailgun';

exports.handler = async (event) => {
    // Handle preflight (OPTIONS) requests
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': 'https://www.sourceofallwealth.com',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Credentials': 'true',
            },
            body: '',
        };
    }

    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return buildResponse(405, { message: 'Method Not Allowed' });
    }

    try {
        // Parse the request body
        const { name, email } = JSON.parse(event.body);

        // Validate required fields
        if (!name || !email) {
            return buildResponse(400, { message: 'Missing required fields: name or email.' });
        }

        // Log the received data
        console.log('Newsletter registration request received:', { name, email });

        // Send a welcome email
        await sendEmailWithMailgun(email);

        // Return a success response
        return buildResponse(200, {
            message: 'Newsletter registration processed successfully, and email sent.',
        });
    } catch (error) {
        console.error('Error processing newsletter registration:', error);

        // Return an error response
        return buildResponse(500, { message: 'Internal Server Error' });
    }
};
