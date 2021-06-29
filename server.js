//nodemon server
const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const path = require('path');

// create variable to set to port number using 9000...looking for environment variables called PORT if not avalible run on 9000
const PORT = process.env.PORT || 4444;
var cors = require('cors');

//use routes
app.use(morgan('dev'));

// ---------------------- Set a Static folder ---------------------------------------------------------
// Body Prser Middleware -> Parses the data, Allows us to use raw JSON
// Makes it easier to use raw data on json
app.use(express.json());


app.use(cors());

//use build folder of react app
app.use(express.static(path.join(__dirname, 'build')));

//serve any unknown paths
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//use the sendToMe route file
app.use('/sendtome', require('./routes/sendToMe'));

// App is listening on a port and creating console variable that lets us know when server is runner
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
