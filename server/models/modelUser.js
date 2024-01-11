import User from "./modelsData/userSchema.js";

const createUser = async (userData) => {
    try {
        const user = new User(userData);
        await user.save();
        return {userId:'userid'}
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

const getAllUser = async () => {
    try {
        
        return true;
    } catch (err) {
        throw err;
    }
}

const updatePasswordUser = async (userId, hashPassword) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, { passwordUser: hashPassword }, { new: true });

        if (!updatedUser) {
            throw new Error('User not found');
        }

        const result = {
            userId: updatedUser._id,
            nameUser: updatedUser.nameUser,
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

export {
    createUser,
    updatePasswordUser,
    updateInfoUser,
    deleteUser,
    findUserbyId,
    getAllUser,
}