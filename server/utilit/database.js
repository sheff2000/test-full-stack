import { configDB } from "../inc/configParam.js";
import mongoose from 'mongoose';

export const connectReadWrite = () => {
    const uri = `mongodb+srv://${configDB.user}:${configDB.password}@${configDB.host}`;
    return mongoose.connect(uri, { dbName: configDB.database });
  };
  
  export const connectReadOnly = () => {
    const uri = `mongodb+srv://${configDB.userRead}:${configDB.passwordRead}@${configDB.host}`;
    return mongoose.connect(uri, { dbName: configDB.database });
  };