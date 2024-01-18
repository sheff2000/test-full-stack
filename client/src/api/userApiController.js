import apiProjectServer from './apiProjectServer';

/* формирование апи запросов на сервер проекта. ТИП - юзер
*  @param {object} data - набор данных для отправки
*
*
*/
const login = async (data) => {
    const method = 'POST';
    const path = '/user/login';
    const sendData = { ...data };
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        const resultSend = await apiProjectServer.sendReq(path, method, headers, sendData);
        return resultSend;
    } catch (err) {
        console.log('Error in login User - ', err);
        return false;
    }
};

const register = async (data) => {
    const method = 'POST';
    const path = '/user/register';
    const sendData = { ...data };
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        const resultSend = await apiProjectServer.sendReq(path, method, headers, sendData);
        return resultSend;
    } catch (err) {
        console.log('Error in register User - ', err);
        return false;
    }
};

const userApiController = {
    login,
    register,
};

export default userApiController;
