import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'User Name is required.'],
        unique: true,
      },
    userPassword:  {
        type: String,
        required: [true, 'Password is required.']
      },
    dateCreate: { type: Date, default: Date.now },
    dateUpdate: Date,
});

const User = mongoose.model('User', userSchema);
export default User;
