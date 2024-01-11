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

export {
    createUser,
}