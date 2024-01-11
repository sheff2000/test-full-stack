import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nameUser: {
        type: String,
        required: [true, 'User Name is required.'],
        unique: true,
      },
    passwordUser:  {
        type: String,
        required: [true, 'Password is required.']
      },
    dateCreate: { type: Date, default: Date.now },
    dateUpdate: Date,
});

const User = mongoose.model('User', userSchema);
export default User;
