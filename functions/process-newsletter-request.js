import buildResponse from './utils/buildResponse';
import sendEmailWithMailgun from './helpers/sendEmailWithMailgun';

const allowedOrigin = 'https://www.sourceofallwealth.com';

exports.handler = async (event) => {
    const origin = event.headers.origin;

    console.log('HTTP Method:', event.httpMethod);
    console.log('Origin:', origin);

    // Handle preflight OPTIONS requests
    if (event.httpMethod === 'OPTIONS') {
        console.log('Handling preflight OPTIONS request');
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': allowedOrigin,
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Credentials': 'true',
            },
            body: '',
        };
    }

    // Validate the origin
    if (origin !== allowedOrigin) {
        console.warn(`Blocked request from invalid origin: ${origin}`);
        return {
            statusCode: 403,
            headers: {
                'Access-Control-Allow-Origin': allowedOrigin,
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Credentials': 'true',
            },
            body: JSON.stringify({ message: 'Forbidden: Invalid Origin' }),
        };
    }

    // Allow only POST requests
    if (event.httpMethod !== 'POST') {
        return buildResponse(405, { message: 'Method Not Allowed' }, allowedOrigin);
    }

    try {
        const { name, email } = JSON.parse(event.body);

        // Validate required fields
        if (!name || !email) {
            return buildResponse(400, { message: 'Missing required fields: name or email.' }, allowedOrigin);
        }

        console.log('Newsletter registration request received:', { name, email });

        // Send the welcome email
        await sendEmailWithMailgun(email);

        // Return a success response
        return buildResponse(200, {
            message: 'Newsletter registration processed successfully.',
        }, allowedOrigin);
    } catch (error) {
        console.error('Error processing request:', error);

        // Return an error response
        return buildResponse(500, { message: 'Internal Server Error' }, allowedOrigin);
    }
};
