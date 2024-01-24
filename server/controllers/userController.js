import validator from "../validation/userValidation.js";
import userService from "../services/userService.js";

const login = async (req, res, next) => {
    try {
        console.log('in login controller');
        // определить все входные аргументы
        const userData = { userName: req.body.login, userPassword: req.body.password };
        // валидация - наличие всех нужных данных, проверка данных на корректность
        if (!validator.validUserName(userData.userName) || !validator.validUserPassword(userData.userPassword)) {
            const error = new Error(`Не корректний формат логіну та/або паролю`);
            error.status = 401;
            return next(error);
        }

        const result = await userService.loginUser(userData);
        // возвращаем все что насобирали в сервисе
        return res.json(result);
    } catch(err) {
        console.error(err);
        const error = new Error(err.message || "Internal server error");
        error.status = error.status || 500;
        return next(error);
    }
};


const register = async (req, res, next) => {
    try {
        // определить все входные аргументы
        const userData = { userName: req.body.login, userPassword: req.body.password };
        //console.log('FRON SEND USER DATA - ', userData);
        // валидация - наличие всех нужных данных, проверка данных на корректность
        if (!validator.validUserName(userData.userName) || !validator.validUserPassword(userData.userPassword)) {
            const error = new Error(`Не корректний формат логіну та/або паролю`);
            error.debug = `Error validation validUserName and validUserPassword userData - ${userData}`;
            error.status = 400;
            return next(error);
        }
        // проверка прав доступа на текущий роутер - тут не надо

        // передаем все на сервис 
        const result = await userService.createUser(userData);

        return res.status(201).json(result);
    } catch(err) {
        console.error(err);
        const error = new Error(err.message || "Internal server error");
        error.debug = err.debug || `Error in user controller / register. stack - ${err}`;
        error.status = error.status || 500;
        return next(error);
    }
};

const getInfoByToken = async (req, res, next) => {
    try {
        // определить все входные аргументы
        const user = req.user;
        console.log('in getInfoByToken controller - ', user);
        const result = await userService.getUserInfoById(user.userId);
        return res.status(200).json(result);
    } catch(err) {
        console.error(err);
        const error = new Error(err.message || "Internal server error");
        error.status = error.status || 500;
        return next(error);
    }
};

const userController = {
    login,
    register,
    getInfoByToken,
}

export default userController;