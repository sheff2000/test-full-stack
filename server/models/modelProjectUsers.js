import ProjectUser from "./modelsData/projectUsersSchema.js";


const countProjectsByUser = async (userId) => {
    try {
        const count = await ProjectUser.countDocuments({ userId });
        return count;
    } catch (err) {
        console.error('Error in countUserProjects:', err);
        throw err;
    }
};

const projectUsersModel = {
    countProjectsByUser,
}

export default projectUsersModel;