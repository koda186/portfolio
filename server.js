//nodemon server
const express = require('express');
var app = express();
require('dotenv').config();
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const path = require('path');
var cors = require('cors');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
//app.options('*', cors());

// create variable to set to port number using 9000...looking for environment variables called PORT if not avalible run on 9000
const PORT = process.env.PORT || 4444;

//use routes
app.use(morgan('dev'));

// ---------------------- Set a Static folder ---------------------------------------------------------
// Body Prser Middleware -> Parses the data, Allows us to use raw JSON
// Makes it easier to use raw data on json
app.use(express.json());

//use build folder of react app
app.use(express.static(path.join(__dirname, 'build')));

//use the sendToMe route file
app.use('/sendtome', require('./routes/sendToMe'));

//serve any unknown paths
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// App is listening on a port and creating console variable that lets us know when server is runner
app.listen(PORT, () => {
  console.log(`🚀 Server ready at PORT:${PORT}`);
});
