const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');

// Routers that handle requests
app.use('/posts', postsRoute);
app.use("/user", usersRoute);

// Routes
app.get('/', (req, res) => {
    res.send('We are home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts');
});

// Connection to MongoDB
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => console.log('Connected to MongoDB')
);


app.listen(3000);