const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

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