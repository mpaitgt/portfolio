const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const publicPath = (path.join(__dirname, '..'));
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(publicPath));

app.post('/submit', (req, res) => {
  const {name, email, message} = req.body;

  let { GMAIL_USER, GMAIL_PASS } = process.env;

  var transport = nodemailer.createTransport({
    service: "gmail",
    port: 2525,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  });

  const contactForm = {
    from: req.body.email, // Sender address
    to: 'mattpignatore@gmail.com', // List of recipients
    subject: `New message from ${req.body.name}`, // Subject line
    text: req.body.message,
    html: `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {font-family: arial; font-size: 20px;}
          p {margin: 20px 0px; font-size: 16px;}
          p.headline {font-weight: 500; font-size: 24px;}
        </style>
      </head>
      <body>
        <p class="headline">
          New message from ${req.body.name}
        </p>
        <p class="headline">
          Email: ${req.body.email}
        </p>
        <p>
          <strong>Message:</strong> ${req.body.message}
        </p>
      </body>
    </html>`
  };

  transport.sendMail(contactForm, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.send(info);
    }
  });

  res.redirect('/');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`)
});