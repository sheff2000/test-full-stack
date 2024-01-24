import mongoose from "mongoose";
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
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        const error = new Error(`Incorrect format userID !`);
        error.status = 400;
        throw(error);
    }
    try {
        console.log('MODEL USER. finduserById. userId = ', userId);
        const user = await User.findById(userId); 
        if (!user) {
            const error = new Error(`User not found`);
            error.status = 404;
            throw(error);
        }
        return user;
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
