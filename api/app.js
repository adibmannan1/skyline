import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth.route.js';
import postRoute from './routes/post.route.js';
import userRoute from './routes/user.route.js';
import messagesRoute from './routes/message.route.js';

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: 'https://skyline-estates.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/users', userRoute);
app.use('/api/messages', messagesRoute);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
