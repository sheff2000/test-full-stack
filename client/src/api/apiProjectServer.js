const BASE_SERVER_URL = 'http://localhost:3002';

async function errorApi(errorData) {
    /* ОБРАБОТЧИК ОШИБОК ПРИ ЗАПРОСЕ НА СЕРВЕР
    * если ошибка от сервера, то там есть код ошибки и текст - code / message
    * если ошибка произошла тут - то это скорее всего проблемы со связи с сервером
    *
    */
    let message = 'Виникла невідома помилка';
    if (errorData.err) {
        if (errorData.errStatus === 'api') {
            message = 'Не змогли підʼєднатись до сервера. Оновіть сторінку та спробуйте ще.';
        }
        if (errorData.errStatus === 'server') {
            switch (errorData.status) {
            case 404:
                message = `Ресур не знайдено. ${errorData.res.message}`;
                break;
            case 500:
                message = 'Сервер зломався :( ';
                break;
            default:
                message = `${errorData.res.message}`;
            }
        }
    }
    return { err: true, message };
}

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
        console.log('API - url ', url, ' | method - ', method, ' | data - ', data);
        const fetchPromise = await fetch(`${BASE_SERVER_URL}${url}`, {
            method,
            headers,
            body: JSON.stringify(data),
        });

        const response = await Promise.race([
            fetchPromise,
            timeoutPromise(5000, 'Сервер довго не відповідає.'),
        ]);

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
        const res = await errorApi({ err: true, errStatus: 'api', res: error.message });
        return res;
    }
}

const apiProjectServer = {
    sendReq,
};

export default apiProjectServer;
