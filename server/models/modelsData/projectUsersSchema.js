// номер проекта и номер юзера подключенного к проекту
import mongoose from "mongoose";

const projectUsersSchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    owner: Boolean,
    edit: Boolean
});

projectUsersSchema.index({ projectId: 1, userId: 1 }, { unique: true }); // пара idProject + idUser уникальны

const ProjectUser = mongoose.model('ProjectUser', projectUsersSchema);
export default ProjectUser;