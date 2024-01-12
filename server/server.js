import express from 'express';
import {connectReadWrite} from './utilit/database.js';
import { serverConfig } from './inc/configParam.js';
import userRoutes from './routes/userRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import {errorOperation} from './utilit/errorOperation.js';


const app = express();
const port = serverConfig.port || 3002 ;

app.use(express.json());

app.use('/user', userRoutes);
app.use('/project', projectRoutes);
app.use('/task', taskRoutes);

app.use(errorOperation);

connectReadWrite().then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
}).catch(err => {
    console.error('Database connection failed', err);
});