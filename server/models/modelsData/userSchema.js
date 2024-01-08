import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nameUser: String,
    roleUser: String,
    passwordUser: String,
    dateCreate: { type: Date, default: Date.now },
    dateUpdate: Date,
});

const User = mongoose.model('User', userSchema);
export default User;
