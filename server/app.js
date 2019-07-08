const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

mongoose.connect('mongodb://test:gungagunga1@ds349247.mlab.com:49247/heroku_dv5d3v7b', { useNewUrlParser: true });
mongoose.Promise = Promise;

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.status(200).send();
});

app.use('/api/users', require('./routes/users'));
app.use('/api/blogs', require('./routes/blogs'));

module.exports = app;