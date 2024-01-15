import User from "./modelsData/userSchema.js";

const createUser = async (userData) => {
    try {
        console.log('MODEL USER. createUser. userData - ', userData);
        const user = new User(userData);
        const result = await user.save();
        return result
    } catch (err) {
        throw err;
    }
};

const findUserbyId = async (userId) => {
    try {
        
        return true;
    } catch (err) {
        throw err;
    }
};

const findUserbyUserName = async (userName) => {
    try {
        const user = await User.findOne({userName:userName}).exec();
        if (!user) {
            return false
        } 
        return user;
    } catch (err) {
        throw err;
    }
};

const getAllUser = async () => {
    try {
        
        return true;
    } catch (err) {
        throw err;
    }
}

const updatePasswordUser = async (userId, hashPassword) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, { userPassword: hashPassword }, { new: true });

        if (!updatedUser) {
            throw new Error('User not found');
        }

        const result = {
            userId: updatedUser._id,
            userName: updatedUser.userName,
        };

        return result;
    } catch (err) {
        throw err;
    }
};

const updateInfoUser = async (userData) => {
    try {
        //userData = {userId, userName}
        return true;
    } catch (err) {
        throw err;
    }
};

const deleteUser = async (userId) => {
    try {

    } catch (err) {
        throw err
    }
};

const userModel = {
    createUser,
    updatePasswordUser,
    updateInfoUser,
    deleteUser,
    findUserbyId,
    getAllUser,
    findUserbyUserName,
};

export default userModel;
