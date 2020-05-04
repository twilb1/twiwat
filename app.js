const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express(); 

// Middleware for body-parser
app.use(bodyParser.json());
app.use(cors());

// Import Routes a Middleware
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute); 

// Connect to Mongo database
mongoose.connect(
        process.env.DB_CONNECTION,
//        'mongodb+srv://Len:1234@twicluster1-sui8h.mongodb.net/test?retryWrites=true&w=majority', 
        {"useNewUrlParser": true,
         "useUnifiedTopology": true }, 
        () => console.log('Connected to Mongo database...'))

// Start listening to the server
app.listen(3000); 