const allowedOrigin = 'https://www.sourceofallwealth.com';

const buildResponse = (statusCode, body, origin, allowedOrigin) => {
    // Validate the origin or set to null if invalid
    const allowOrigin = origin === allowedOrigin ? origin : null;

    const headers = {
        'Access-Control-Allow-Origin': allowOrigin,
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Credentials': true,
    };

    if (!allowOrigin) {
        console.warn(`Invalid origin: ${origin}`);
    }

    return {
        statusCode,
        headers,
        body: body ? JSON.stringify(body) : '',
    };
};

export default buildResponse;
