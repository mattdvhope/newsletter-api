const buildResponse = (statusCode, body, origin, allowedOrigin) => {
    const headers = {
        'Access-Control-Allow-Origin': origin === allowedOrigin ? allowedOrigin : null,
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Credentials': 'true',
    };

    if (!headers['Access-Control-Allow-Origin']) {
        console.warn(`Invalid origin: ${origin}`);
    }

    return {
        statusCode,
        headers,
        body: body ? JSON.stringify(body) : '',
    };
};

export default buildResponse;
