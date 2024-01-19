async function errorApi(errorData) {
    /* ОБРАБОТЧИК ОШИБОК ПРИ ЗАПРОСЕ НА СЕРВЕР
    * если ошибка от сервера, то там есть код ошибки и текст - code / message
    * если ошибка произошла тут - то это скорее всего проблемы со связи с сервером
    * errorData = { err:true, errStatus: api || server,
    * res: { debug: '', message: '', stack: ''}}
    */
    let message = 'Виникла невідома помилка';
    // console.log(errorData);
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
                message = errorData.res.message || 'Сервер зломався :( ';
                break;
            default:
                message = `${errorData.res.message}`;
            }
        }
    }
    return { err: true, message, status: errorData.status };
}

export default errorApi;
