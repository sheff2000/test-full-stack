import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  nameProject: String,
  descriptionProject: String,
  pubProject: Boolean,
  imageProject: String,
  accessLevelProject: String,
  dateCreate: { type: Date, default: Date.now },
  datePub: Date,
  ownerIdUser: mongoose.Schema.Types.ObjectId
});

const Project = mongoose.model('Project', projectSchema);
export default Project;
