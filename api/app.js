import express from 'express';
const app = express();
const port = 3000;
import authRouter from './routes/auth.route';

app.get('/api', authRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
