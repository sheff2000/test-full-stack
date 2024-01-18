const BASE_SERVER_URL = 'http://localhost:3002';

async function sendReq(url, method, headers, data) {
    try {
        console.log('API - url ', url, ' | method - ', method, ' | data - ', data);
        const response = await fetch(`${BASE_SERVER_URL}${url}`, {
            method,
            headers,
            body: JSON.stringify(data),
        });
        if (response.ok) {
            return response.json();
        }
        const errorData = await response.json();
        throw new Error(errorData.message || `виникла помилка error - ${errorData}`);
    } catch (error) {
        console.error('Помилка в запросі', error);
        throw error;
    }
}

const apiProjectServer = {
    sendReq,
};

export default apiProjectServer;
