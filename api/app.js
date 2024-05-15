import express from 'express';
const app = express();
const port = 3000;
import authRoute from './routes/auth.route.js';
import postRoute from './routes/post.route.js';
import userRoute from './routes/user.route.js';
app.use(express.json())

app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/user', userRoute);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
