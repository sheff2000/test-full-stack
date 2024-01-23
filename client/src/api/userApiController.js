import apiProjectServer from './apiProjectServer';

/* формирование апи запросов на сервер проекта. ТИП - юзер
*  @param {object} data - набор данных для отправки
*
*
*/
const login = async (data) => {
    const method = 'POST';
    const path = '/user/login';
    const sendData = {
        login: data.loginAuth,
        password: data.passwordAuth,
    };
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        const resultSend = await apiProjectServer.sendReq(path, method, headers, sendData);
        return resultSend;
    } catch (err) {
        console.log('Error in login User - ', err);
        return { err: true, message: `Якась помилка в контроллері LOGIN - ${err}` };
    }
};

const register = async (data) => {
    const method = 'POST';
    const path = '/user/register';
    const sendData = {
        login: data.loginRegister,
        password: data.passwordRegister,
    };
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        const resultSend = await apiProjectServer.sendReq(path, method, headers, sendData);
        console.log('RESULT IN LOGIN - ', resultSend);
        return resultSend;
    } catch (err) {
        console.log('Error in register User - ', err);
        return { err: true, message: `Якась помилка в контроллері - ${err}` };
    }
};

const getUserInfoByToken = async (token) => {
    const method = 'GET';
    const path = '/user/info';
    const sendData = {};
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Добавление токена в заголовки
    };

    try {
        const resultSend = await apiProjectServer.sendReq(path, method, headers, sendData);
        return resultSend;
    } catch (err) {
        console.log('Error in get User Info by token - ', err);
        return { err: true, message: `Якась помилка в контроллері getuserinfo - ${err}` };
    }
};
const userApiController = {
    login,
    register,
    getUserInfoByToken,
};

export default userApiController;
