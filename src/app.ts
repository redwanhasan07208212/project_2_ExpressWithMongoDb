import cors from 'cors';
import express, { Application, Request, Response, Router } from 'express';
import { studentRoute } from './app/modules/student/student.route';
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1/students', studentRoute);
export default app;
