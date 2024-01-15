// номер задачи и номер юзера подключенного к проекту
import mongoose from "mongoose";

const taskUsersSchema = new mongoose.Schema({
    taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    owner: Boolean,
    edit: Boolean
});

taskUsersSchema.index({ taskId: 1, userId: 1 }, { unique: true }); // пара taskId + idUser уникальны

const TaskUser = mongoose.model('TaskUser', taskUsersSchema);
export default TaskUser;