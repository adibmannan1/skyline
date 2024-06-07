import express from 'express';
const app = express();
const port = 3000;
import authRoute from './routes/auth.route.js';
import postRoute from './routes/post.route.js';
import userRoute from './routes/user.route.js';
import messagesRoute from './routes/message.route.js';
import cookieParser from "cookie-parser"
import cors from 'cors'

app.use(cookieParser())
app.use(express.json())
app.use(cors({origin: process.env.CLIENT_URL, credentials: true}))

app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/users', userRoute);
app.use('/api/messages', messagesRoute);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
