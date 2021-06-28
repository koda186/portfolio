const express = require('express');
const sendToMeRouter = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();


console.log("from sendToMe");

const transport = {
  //configuration for making a site send an email.
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.THE_EMAIL,
    pass: process.env.THE_PASSWORD
  }
};

const transporter = nodemailer.createTransport(transport);
  transporter.verify((error, success) => {
    if(error) {
      //if error
      console.error(error)
    } else {
      //else success
      console.log('Server is ready to take messages')
    }
  });

  sendToMeRouter.post('/', (req,res, next) => {
    //making mailable object
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message}`

    console.log(name);

    var mail = {
      from: name,
      to: process.env.THE_EMAIL,  // receiving email address
      subject: 'New Message from your Website!',
      text: content
    /*
      const mail = {
      from: process.env.THE_EMAIL,
      to: process.env.THE_EMAIL,
      subject: req.body.subject,
      text: `
      from:
      ${req.body.name}

      contact: ${req.body.email}

      message:

      ${req.body.message}`
      */
    }

    transporter.sendMail(mail, (err,data) => {
          if(err) {
            res.json({
              status: 'fail'
            })
          } else {
            res.json({
              status: 'success'
            })
            transporter.sendMail({
              from: "<your email address>",
              to: email,
              subject: "Submission was successful!",
              text: `Hi there ${name}! Thanks for reaching out. I wanted to let you know I received your message and will be in touch within 48 hours. Have a great day.\n\nForm Details:\nName: ${name}\n Email: ${email}\n Message: ${message}`
            }), function(error, info){
              if(error) {
                console.log(error);
              } else{
                console.log('Message sent: ' + info.response);
              }
            };
        }
      });
    });


module.exports = sendToMeRouter
