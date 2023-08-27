const express = require('express');
require('dotenv').config();

require('./config/dbConnect');

const app = express();

//middlewares
//routes
//error handler middlewares
//listen to server
const PORT = process.env.PORT | 9000;
console.log(dotenv.config());
app.listen(PORT, console.log(`Server is up and running in ${PORT}`));