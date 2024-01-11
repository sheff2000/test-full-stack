// номер проекта и номер юзера подключенного к проекту
import mongoose from "mongoose";

const projectUsersSchema = new mongoose.Schema({
    idProject: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    idUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    owner: Boolean,
    edit: Boolean
});

projectUsersSchema.index({ idProject: 1, idUser: 1 }, { unique: true }); // пара idProject + idUser уникальны

const ProjectUser = mongoose.model('ProjectUser', projectUsersSchema);
export default ProjectUser;