// логика работы с юзерами - создание/обновление
import userModel from "../models/modelUser.js";
import projectUsersModel from "../models/modelProjectUsers.js";
import taskUsersModel from "../models/modelTaskUsers.js";
import password from "../utilit/password.js";
import tokenUtil from "../utilit/token.js";
import toReturn from "./toReturn.js";

const loginUser = async (userData) => {

    const userInfo = toReturn.createUserInfo();
    try {
        // find by name
        console.log('find user with naem - ', userData);
        const user = await userModel.findUserbyUserName(userData.userName);
        if (!user) {
            // не нашли юзера - отправляем 401 код
            const error = new Error(`Користувача з імʼям ${userData.userName} не знайдено`);
            error.debug = `Error in findUserbyUserName(userData.userName). userName - ${userData.userName}. Not find USER`;
            error.status = 401;
            throw(error);
        }
        // compare password
        console.log('compare password - ', userData, ' ||  user - ', user);
        const isPasswordOk = await password.comparePassword(userData.userPassword, user.userPassword);
        if (!isPasswordOk) {
            const error = new Error(`Невірній пароль!`);
            error.debug = `Error in userService / login User. Password not compare`;
            error.status = 401;
            throw(error);
        }
        const token = tokenUtil.generate({userId: user._id, userName: user.userName});
        console.log('token - ', token);
        // data to return
        userInfo.countProjects = await projectUsersModel.countProjectsByUser(user._id);
        userInfo.countTasks = await taskUsersModel.countTasksByUser(user._id);
        userInfo.dateCreate = user.dateCreate;
        userInfo.userID = user._id;
        userInfo.userName = user.userName;
        
        return {userInfo, token}
    } catch(err) {
        console.log('------- ERRORORROR CATCHHH  --- ');
        const error = new Error(err.message || `Internal server error`);
        error.debug = `Error catch in userService / login User. stack err - ${err}`;
        error.status = err.status || 500;
        throw (error);
    }
}

const createUser = async (userData) => {
    try {
        //console.log('USER SERVISE. userData - ', userData);
        const isExistUser = await userModel.findUserbyUserName(userData.userName);
        if (isExistUser) {
            const error = new Error(`Користувача з імʼям ${userData.userName} вже існує`);
            error.status = 422;
            throw(error);
        }

        userData.userPassword = await password.generatePasswordHash(userData.userPassword);
        return await userModel.createUser(userData);x
    } catch(err) {
        const error = new Error(err.message || `Internal server error`);
        error.debug = `Error catch in userService / Create User. msg err - ${err}`;
        error.status = err.status || 500;
        throw(error);
    }
};

const updatePasswordUser = async (passData) => {
    try {
        console.log('updatePasswordUser - ', passData);
        
    } catch(err) {
        const error = new Error(err.message || `Internal server error`);
        error.debug = `Error catch in userService / updatePasswordUser. msg err - ${err}`;
        error.status = err.status || 500;
        throw(error);
    }
};

const getUserInfoById = async (userId) => {
    // оп айди юзера ищем инфу
    // стандартные - имя, дата регистрации
    // количество проектов где он участник и где он владелец
    // количества тасков где он участник и где он владелец
    const result = toReturn.createUserInfo();
    
    try {
        //console.log('getUserInfobyId service. userid - ', userId);
        const user = await userModel.findUserbyId(userId);
        console.log('Return userinfo - ', user);

        const userCountProject = await projectUsersModel.countProjectsByUser(userId);
        const userCountTasks = await taskUsersModel.countTasksByUser(userId);

        result.userName = user.userName;
        result.userID = user._id;
        result.dateCreate = user.dateCreate;
        result.countProjects = userCountProject;
        result.countTasks = userCountTasks;
        
        return result;
    } catch(err) {
        const error = new Error(err.message || `Internal server error`);
        error.debug = `Error catch in userService / getUserInfoById. msg err - ${err}`;
        error.status = err.status || 500;
        throw(error);
    }
};

const userService = {
    loginUser,
    createUser, 
    getUserInfoById,
    updatePasswordUser,
};

export default userService;