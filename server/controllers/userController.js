import tokenUtil from "../utilit/token.js";
import userModel from "../models/modelUser.js";
import password from "../utilit/password.js";

const login = async (req, res) => {
    const { userName, userPassword } = req.body;
    try {
        // по идее тут надо вызвать функции валидации данных ?!?!?!

        // find by name
        const user = await userModel.findUserbyUserName(userName);
        if (!user) {
            // не нашли юзера - отправляем 401 код
            // а это профессиональный подход? 
            
            const error = new Error(`Користувача з імʼям ${userName} не знайдено`);
            error.status = 401;
            return next(error);
        }
        // compare password
        const isPasswordOk = await password.comparePassword(userPassword, user.passwordUser);
        if (!isPasswordOk) {
            const error = new Error(`Invalid password`);
            error.status = 401;
            return next(error);
        }
        // data to return
        const userInfo = {
            userId: user._id, 
            userName: user.nameUser,
            countProjects: 0,
            countTasks: 0,
        }

        const token = tokenUtil.generate({userId: user._id, userName: user.nameUser});
        return res.json({ token, userInfo });
    } catch(err) {
        console.error(err);
        const error = new Error("Internal server error");
        error.status = 500;
        return next(error);
    }
};


const register = async (req, res) => {
    result = {token, userData}
    return res.json(result);
};

const userController = {
    login,
    register,
}

export default userController;