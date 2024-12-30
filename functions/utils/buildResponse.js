const allowedOrigins = [
    'https://www.sourceofallwealth.com',
    'https://sourceofallwealth.com',
];

const buildResponse = (statusCode, body, event) => {
    const origin = event.headers.origin;
    const allowOrigin = allowedOrigins.includes(origin) ? origin : 'https://www.sourceofallwealth.com';

    return {
        statusCode,
        headers: {
            'Access-Control-Allow-Origin': allowOrigin,
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(body),
    };
};

export default buildResponse;
