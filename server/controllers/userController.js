import validator from "../validation/userValidation.js";
import {loginUser, createUser} from "../services/userService.js";

const login = async (req, res, next) => {
    try {
        console.log('in login controller');
        // определить все входные аргументы
        const userData = { userName: req.body.login, userPassword: req.body.password };
        // валидация - наличие всех нужных данных, проверка данных на корректность
        if (!validator.validUserName(userData.userName) && !validator.validUserPassword(userData.userPassword)) {
            const error = new Error(`Не корректний формат логіну та/або паролю`);
            error.status = 401;
            return next(error);
        }
        // проверка прав доступа на текущий роутер - тут не надо

        // передаем все на сервис 
        // обробатываем ошибки / делаем передачу данных
        const result = await loginUser(userData);
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
        if (!validator.validUserName(userData.userName) && !validator.validUserPassword(userData.userPassword)) {
            const error = new Error(`Не корректний формат логіну та/або паролю`);
            error.debug = `Error validation validUserName and validUserPassword userData - ${userData}`;
            error.status = 401;
            return next(error);
        }
        // проверка прав доступа на текущий роутер - тут не надо

        // передаем все на сервис 
        const result = await createUser(userData);

        return res.json(result);
    } catch(err) {
        console.error(err);
        const error = new Error(err.message || "Internal server error");
        error.debug = err.debug || `Error in user controller / register. stack - ${err}`;
        error.status = error.status || 500;
        return next(error);
    }
};

const userController = {
    login,
    register,
}

export default userController;