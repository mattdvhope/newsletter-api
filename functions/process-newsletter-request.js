// functions/process-newsletter-request.js

import buildResponse from './utils/buildResponse';
import sendEmailWithMailgun from './helpers/sendEmailWithMailgun';

exports.handler = async (event) => {
    const origin = event.headers.origin;

    if (event.httpMethod === 'OPTIONS') {
        return buildResponse(200, null, origin);
    }

    if (event.httpMethod !== 'POST') {
        return buildResponse(405, { message: 'Method Not Allowed' }, origin);
    }

    try {
        const { name, email } = JSON.parse(event.body);

console.log("name: ", name);
console.log("email: ", email);

        if (!name || !email) {
            return buildResponse(400, { message: 'Missing required fields: name or email.' }, origin);
        }

        console.log('Newsletter registration request received:', { name, email });
        await sendEmailWithMailgun(name, email);

        return buildResponse(200, {
            message: 'Newsletter registration processed successfully.',
        }, origin);
    } catch (error) {
        console.error('Error:', error);
        return buildResponse(500, { message: 'Internal Server Error' }, origin);
    }
};
