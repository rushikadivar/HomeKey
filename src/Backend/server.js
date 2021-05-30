const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Homekey-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const app = express()
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())

const userSigninRouter = require('./routes/Signin');
const userSignupRouter = require('./routes/Signup');

app.use('/signin', userSigninRouter);
app.use('/signup', userSignupRouter);

app.listen(1010, () => {
    console.log('Server up at 1010')
});