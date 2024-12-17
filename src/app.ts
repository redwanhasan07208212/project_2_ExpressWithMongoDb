import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globarlError';

import notFound from './app/middlewares/notFound';
import router from './app/routes/route';

const app: Application = express();

app.use(express.json());
app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
const test = async (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};
app.use('/api/v1', router);

app.use(globalErrorHandler);
app.use(notFound);

export default app;
