import config from '@/config/config';
import errorApi from './errorApi';

const BASE_SERVER_URL = config.serverApiBaseURL;

// тайм-аут для слишком доолгих запросов
function timeoutPromise(ms, error) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(error));
        }, ms);
    });
}

async function sendReq(url, method, headers, data) {
    try {
        console.log('API - url ', url, ' | method - ', method, ' | data - ', data, ' | headers - ', headers);
        let fetchPromise;
        if (method === 'GET') {
            fetchPromise = await fetch(`${BASE_SERVER_URL}${url}`, {
                method,
                headers,
            });
        } else {
            fetchPromise = await fetch(`${BASE_SERVER_URL}${url}`, {
                method,
                headers,
                body: JSON.stringify(data),
            });
        }

        const response = await Promise.race([
            fetchPromise,
            timeoutPromise(5000, 'Сервер довго не відповідає.'),
        ]);
        // console.log(response)
        if (response.ok) {
            const res = await response.json();
            return { err: false, res };
        }
        const errorData = await response.json();
        const res = await errorApi({
            err: true,
            errStatus: 'server',
            status: response.status,
            res: errorData,
        });
        return res;
    } catch (error) {
        console.log('FIRST ERROR - ', error);
        const res = await errorApi({
            err: true,
            errStatus: 'api',
            status: '500',
            res: {
                message: error.message,
            },
        });
        return res;
    }
}

const apiProjectServer = {
    sendReq,
};

export default apiProjectServer;
