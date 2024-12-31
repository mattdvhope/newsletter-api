// functions/process-unsubscribe.js

import buildResponse from './utils/buildResponse';
import sendEmailAboutUnsubscriber from './helpers/sendEmailAboutUnsubscriber';

exports.handler = async (event) => {
    const origin = event.headers.origin;

    if (event.httpMethod === 'OPTIONS') {
        return buildResponse(200, null, origin);
    }

    if (event.httpMethod !== 'POST') {
        return buildResponse(405, { message: 'Method Not Allowed' }, origin);
    }

    try {
        const { email } = JSON.parse(event.body);

        if (!email) {
            return buildResponse(400, { message: 'Missing required field: email.' }, origin);
        }

        console.log(`Unsubscribe request received for email: ${email}`);

        // Send notification to admin
        await sendEmailAboutUnsubscriber(email);

        return buildResponse(200, {
            message: 'Unsubscribe request processed successfully.',
        }, origin);
    } catch (error) {
        console.error('Error processing unsubscribe request:', error);
        return buildResponse(500, { message: 'Internal Server Error' }, origin);
    }
};