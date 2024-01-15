import ProjectUser from "./modelsData/projectUsersSchema.js";


const countProjectsByUser = async (userId) => {
    try {
        const count = await ProjectUser.countDocuments({ userId: userId });
        return count;
    } catch (err) {
        throw err;
    }
};

const projectUsersModel = {
    countProjectsByUser,
}

export default projectUsersModel;