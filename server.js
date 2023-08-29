const express = require('express');
require('dotenv').config();
const categoryRouter = require('./routes/categories/categoryRoutes');
const commentRouter = require('./routes/comments/commentRoutes');
const postRouter = require('./routes/posts/postRoutes');
const userRouter = require('./routes/users/userRoutes');
require('./config/dbConnect');

const app = express();

//middlewares
//routes

//categories route
app.use('/api/v1/categories', categoryRouter);
//comments route
app.use("/api/v1/comments", commentRouter);
//posts route
app.use("/api/v1/posts", postRouter);
//users route
app.use("/api/v1/users/", userRouter);

//error handler middlewares
//listen to server
const PORT = process.env.PORT | 9000;

app.listen(PORT, console.log(`Server is up and running in ${PORT}`));