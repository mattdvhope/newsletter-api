const buildResponse = (statusCode, body, origin) => {
    const headers = {
        'Access-Control-Allow-Origin': origin || 'https://www.sourceofallwealth.com',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Credentials': 'true',
    };

    return {
        statusCode,
        headers,
        body: body ? JSON.stringify(body) : '',
    };
};

export default buildResponse;
