import express from 'express';
import mongoose from 'mongoose';
import { serverConfig } from './inc/configParam.js';

const app = express();
const port = serverConfig.port || 3002 ;

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
