const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

let PORT = process.env.PORT || 5000;

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'youremail@gmail.com',
//       pass: 'yourpassword'
//     }
//   });
  
//   var mailOptions = {
//     from: '',
//     to: 'mattpignatore@gmail.com',
//     text: ''
//   };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });

// Serve static content for the app from the "public" directory in the application directory.j
app.use(express.static('./assets/'));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log(`Server listening on: http:/localhost:${PORT}`);
})