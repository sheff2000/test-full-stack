import TaskUser from "./modelsData/taskUsersSchema.js";

const countTasksByUser = async (userId) => {
    try {
        const count = await TaskUser.countDocuments({ userId });
        return count;
    } catch (err) {
        throw err;
    }
};

const taskUsersModel = {
    countTasksByUser,
}

export default taskUsersModel;