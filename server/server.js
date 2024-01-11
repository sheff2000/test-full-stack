import express from 'express';
import mongoose from 'mongoose';
import {connectReadWrite} from './utilit/database.js';
import { serverConfig } from './inc/configParam.js';

const app = express();
const port = serverConfig.port || 3002 ;

connectReadWrite().then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
}).catch(err => {
    console.error('Database connection failed', err);
});



app.get('/', (req, res) => {
  res.send('Hello World!');
});
