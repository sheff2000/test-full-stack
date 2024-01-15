// валидация данных для юзера
import { validDataConfig } from "../inc/configParam.js";

const validUserName =  (userName) => {
    if (!userName || userName.length === 0) {
        return false;
    }
    return validDataConfig.userName.characterSet.test(userName)
};

const validUserPassword =  (userPassword) => {
    if (!userPassword || userPassword.length < validDataConfig.userPassword.minLen ) {
        return false;
    }
    return true;
};

const validUserDataToUserCreate = async (userData) => {
        // проверка наличия всех нужных полей и соответствие типов

        return {err:false, msg: ''}
};

const validator = {
    validUserName,
    validUserPassword,
    validUserDataToUserCreate,
};

export default validator;