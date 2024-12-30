import buildResponse from './utils/buildResponse';
import sendEmailWithMailgun from './helpers/sendEmailWithMailgun';

const allowedOrigins = ['https://www.sourceofallwealth.com', 'https://sourceofallwealth.com'];

exports.handler = async (event) => {
    const origin = event.headers.origin;

    // Validate the origin
    if (!allowedOrigins.includes(origin)) {
        console.warn(`Blocked request from invalid origin: ${origin}`);
        return buildResponse(403, { message: 'Forbidden: Invalid Origin' }, null);
    }

    // Handle preflight OPTIONS requests
    if (event.httpMethod === 'OPTIONS') {
        return buildResponse(200, null, origin);
    }

    // Allow only POST requests
    if (event.httpMethod !== 'POST') {
        return buildResponse(405, { message: 'Method Not Allowed' }, origin);
    }

    try {
        const { name, email } = JSON.parse(event.body);

        // Validate required fields
        if (!name || !email) {
            return buildResponse(400, { message: 'Missing required fields: name or email.' }, origin);
        }

        console.log('Newsletter registration request received:', { name, email });

        // Send the welcome email
        await sendEmailWithMailgun(email);

        // Return a success response
        return buildResponse(200, {
            message: 'Newsletter registration processed successfully.',
        }, origin);
    } catch (error) {
        console.error('Error:', error);

        // Return an error response
        return buildResponse(500, { message: 'Internal Server Error' }, origin);
    }
};
