const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password' // Generated from Google Account Security
  }
});

const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient-email@gmail.com',
  subject: 'Node.js Checkpoint Task 3',
  text: 'Hello! This email was sent using Node.js and Nodemailer.'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error occurred:", error);
  } else {
    console.log('Email sent successfully: ' + info.response);
  }
});
