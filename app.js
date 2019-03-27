//app.js ------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const auth = require('./middleware/auth');
const dataAccount = require('./routes/account');
const app = express();
const logger = require('morgan');
//const env = require('dotenv').config()
const cors = require('cors');


// ---Mongoose Connection---------------------
const mongoose = require('mongoose');
const mongoDB = process.env.HASYDB;
mongoose.connect(mongoDB,{useNewUrlParser:true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connection : MongoDB'));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb', extended: true, parameterLimit:50000}));
app.use('/api/v1/account', dataAccount);
app.use(logger('dev'));
app.use('/static', express.static('public'));
app.use(cors());

var port = process.env.PORT || 1236;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

