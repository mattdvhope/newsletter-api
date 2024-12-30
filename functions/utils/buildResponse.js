const allowedOrigins = ['https://www.sourceofallwealth.com', 'https://sourceofallwealth.com'];

const buildResponse = (statusCode, body, origin) => {
    // Validate the origin or set to null if invalid
    const allowOrigin = allowedOrigins.includes(origin) ? origin : null;

    const headers = {
        'Access-Control-Allow-Origin': allowOrigin,
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Credentials': true,
    };

    // Log warning if origin is invalid
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
