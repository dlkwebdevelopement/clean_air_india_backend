const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.elasticemail.com',
  port: parseInt(process.env.SMTP_PORT || '2525'),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

console.log("Testing SMTP connection to Elastic Email...");
transporter.verify(function(error, success) {
  if (error) {
    console.error("Connection failed:");
    console.error(error);
  } else {
    console.log("SUCCESS! Server is ready to take our messages.");
  }
});
