// functions/process-newsletter-request.js

import buildResponse from './utils/buildResponse';

exports.handler = async (event) => {
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

        // Log the received data (you can replace this with further processing)
        console.log('Newsletter registration request received:', { name, email });

        // Placeholder: Add any further logic here, like saving to a database or sending a confirmation email

        // Return a success response
        return buildResponse(200, { message: 'Newsletter registration processed successfully.' });
    } catch (error) {
        console.error('Error processing newsletter registration:', error);

        // Return an error response
        return buildResponse(500, { message: 'Internal Server Error' });
    }
};