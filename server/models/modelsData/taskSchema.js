import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    nameTask: String,
    descriptionTask: String,
    ownerTaskIdUser: mongoose.Schema.Types.ObjectId,
    projectId: mongoose.Schema.Types.ObjectId,
    dateCreate: { type: Date, default: Date.now },
    datePub: Date,
    statusTask: String
});

const Task = mongoose.model('Task', taskSchema);
export default Task;
