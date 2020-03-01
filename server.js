const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

// Load Routes
const Quiz = require('./routes/quiz');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const DB = "mongodb://127.0.0.1:27017/quiz";
mongoose.connect(DB, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false  })
  .then(() => console.log('DB connected'))
  .catch(err => console.log("Error Starts: " + err + "Error Ends"));  

// All Routes
app.use('/api/quiz', Quiz);


const port = process.env.port || 5000;

app.listen(port, (req,res) =>console.log('Running'));

