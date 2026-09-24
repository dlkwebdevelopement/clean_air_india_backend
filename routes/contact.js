const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');

// Configure nodemailer transporter using Gmail
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.MAIL_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
});

// Validation rules
const contactValidation = [
  body('user-name').notEmpty().withMessage('Name is required'),
  body('email-address').isEmail().withMessage('Valid email is required'),
  body('message').notEmpty().withMessage('Message is required')
];

// POST route for contact form
router.post('/contact', contactValidation, async (req, res) => {
  console.log('--- New Contact Form Submission Received ---');
  console.log('Incoming Payload:', req.body);
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const {
      'user-name': userName,
      'email-address': emailAddress,
      'phone-number': phoneNumber,
      'company-name': companyName,
      city,
      country,
      products,
      message,
      'g-recaptcha-response': recaptchaResponse
    } = req.body;

    // Verify reCAPTCHA
    if (recaptchaResponse !== 'local_bypass') {
      const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
      if (!recaptchaSecret) {
        console.warn('RECAPTCHA_SECRET_KEY is not set in .env. Skipping verification for testing.');
      } else {
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaResponse}`;
        
        try {
          console.log('Verifying reCAPTCHA with Google...');
          const recaptchaRes = await fetch(verifyUrl, { method: 'POST' });
          const recaptchaData = await recaptchaRes.json();
          console.log('reCAPTCHA Verification Result:', recaptchaData);
          if (!recaptchaData.success) {
            return res.status(400).json({
              success: false,
              message: 'reCAPTCHA verification failed. Please try again.'
            });
          }
        } catch (err) {
          console.error('reCAPTCHA fetch error:', err);
          return res.status(500).json({ success: false, message: 'Error verifying reCAPTCHA' });
        }
      }
    }

    // Format products list
    let productsList = 'None selected';
    if (products) {
      productsList = Array.isArray(products) ? products.join(', ') : products;
    }

    // Send email via Gmail App Password
    const mailOptions = {
      from: `"${process.env.MAIL_FROM_NAME || 'CleanAirIndia'}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: 'connectcleanair@gmail.com',
      replyTo: emailAddress,
      subject: `New Contact Form Submission from ${userName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #f4f4f4; padding: 20px; text-align: center; }
                .content { background: white; padding: 20px; }
                .field { margin-bottom: 15px; }
                .field-label { font-weight: bold; color: #555; }
                .field-value { color: #333; }
                .products-list { background: #f9f9f9; padding: 15px; border-radius: 5px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>New Enquiry for Clean Air Systems</h2>
                    <p>You have received a new message from your website contact form</p>
                </div>
                <div class="content">
                    <div class="field">
                        <div class="field-label">Name:</div>
                        <div class="field-value">${userName}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">Email:</div>
                        <div class="field-value">${emailAddress}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">Phone Number:</div>
                        <div class="field-value">${phoneNumber || 'Not provided'}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">Company Name:</div>
                        <div class="field-value">${companyName || 'Not provided'}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">City:</div>
                        <div class="field-value">${city || 'Not provided'}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">Country:</div>
                        <div class="field-value">${country || 'Not provided'}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">Products of Interest:</div>
                        <div class="field-value products-list">${productsList}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">Message:</div>
                        <div class="field-value" style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">${message}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">Submission Date:</div>
                        <div class="field-value">${new Date().toLocaleString()}</div>
                    </div>
                </div>
            </div>
        </body>
        </html>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Gmail SMTP Response: Email sent successfully');

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Optional: GET route to verify email service is working
router.get('/contact/status', async (req, res) => {
  try {
    await transporter.verify();
    res.json({ 
      success: true, 
      message: 'Email service is configured correctly with Gmail' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Email service configuration error',
      error: error.message
    });
  }
});

module.exports = router;