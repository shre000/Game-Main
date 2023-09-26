// utils.js
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');

const transporter = nodemailer.createTransport({
    host: "gmail",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'shriancodes@gmail.com',
      pass: 'lqoq aagl alck cttx'
    }
  });

  // Function to generate a unique reset token
  function generateResetToken() {
    // Implement your logic here (e.g., using uuid)
    console.log(uuidv4)
    return uuidv4();
  }


function sendResetEmail(email, resetToken) {
  console.log(email);

  const mailOptions = {
    from: 'shriancodes@gmail.com',
    to: 'sumanshreya@gmail.com',
    subject: 'Password Reset Request',
    text: `You can reset your password by clicking on this link: http://localhost:3000/resetpassword?token=${resetToken}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email: ', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = { generateResetToken, sendResetEmail };
