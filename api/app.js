import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { PrismaClient } from '@prisma/client';
import authRoute from './routes/auth.route.js';
import postRoute from './routes/post.route.js';
import userRoute from './routes/user.route.js';
import messagesRoute from './routes/message.route.js';

const app = express();
const prisma = new PrismaClient();
const port = 3000;

app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: 'https://skyline-estates.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use('/api/auth', authRoute(prisma));
app.use('/api/posts', postRoute(prisma));
app.use('/api/users', userRoute(prisma));
app.use('/api/messages', messagesRoute(prisma));

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

export default app; // Ensure this is exported for Vercel
