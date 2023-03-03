const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const  bodyParser = require('body-parser')

const authRoute = require('./routes/auth');
const postRoute = require ('./routes/posts');
dotenv.config()


mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('connected to db !')
)

app.use(bodyParser.json())
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization , auth-token');
    next();
  });


  app.use("/images", express.static('images'));
  

app.use('/api/user', authRoute);
app.use('/api/posts' , postRoute);

app.listen(3000, () => console.log('server up and running'));
