const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.MAIL_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
});

console.log("Testing SMTP connection to new Gmail...");
transporter.verify(function(error, success) {
  if (error) {
    console.error("Connection failed:");
    console.error(error);
  } else {
    console.log("SUCCESS! Gmail is ready to take our messages.");
  }
});
