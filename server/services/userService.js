// логика работы с юзерами - создание/обновление
import userModel from "../models/modelUser.js";
import password from "../utilit/password.js";
import tokenUtil from "../utilit/token.js";

const loginUser = async (userData) => {
    try {
        // find by name
        const user = await userModel.findUserbyUserName(userData.userName);
        if (!user) {
            // не нашли юзера - отправляем 401 код
            const error = new Error(`Користувача з імʼям ${userName} не знайдено`);
            error.status = 401;
            throw(error);
        }
        // compare password
        const isPasswordOk = await password.comparePassword(userData.userPassword, user.passwordUser);
        if (!isPasswordOk) {
            const error = new Error(`Invalid password`);
            error.status = 401;
            throw(error);
        }
        const token = tokenUtil.generate({userId: user._id, userName: user.nameUser});

        // get count project and tasks for this user

        // data to return
        const userInfo = {
            userId: user._id, 
            userName: user.nameUser,
            countProjects: 0,
            countTasks: 0,
        }
        return {userInfo, token}
    } catch(err) {
        throw err;
    }
}

const createUser = async (userData) => {
    try {
        console.log('USER SERVISE. userData - ', userData);
        return await userModel.createUser(userData);
    } catch(err) {
        throw err;
    }
};

const updatePasswordUser = async (passData) => {

};

const getUserById = async (userId) => {

};

export {    loginUser,
            createUser, 
            getUserById,
            updatePasswordUser,
};
