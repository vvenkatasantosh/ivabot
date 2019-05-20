const express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var port = Number(process.env.PORT || 3000);
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

app.post('/email', function(req, res) {
  // console.log(req.body.ebody.slice(0,50));
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'POST');
  sendmail(req.body);
  res.send(JSON.stringify({
    'status': 'sent'
  }));
});

app.post('/', function(req, res) {
  // console.log(req.body.ebody.slice(0,50));
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'POST');
  sendmail(req.body);
  res.send(JSON.stringify({
    'status': 'sent'
  }));
});

app.get('/email', function(req, res) {
  console.log(req);
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Max-Age: 86400');
  sendmail(req.body);
  res.send({
    'status': 'sent'
  });
});


app.listen(port, function() {
  console.log('Email Sender App listening on port ' + port + ' !!');
});

function sendmail(emaildata) {
  var transporter = nodemailer.createTransport({
    host: "gmr10.capgemini.com", // hostname
    //host:"hotmail",
    secureConnection: false, // TLS requires secureConnection to be false
    port: 25, // port for secure SMTP
    // tls: {
    //    ciphers:'SSLv3'
    // },
    auth: {
      user: 'sarachatbot.in@capgemini.com',
      pass: 'Computer#234'
    }
  });
  var ebody = emaildata.ebody.split(',').join(' ');
  var mailOptions = {
    from: 'sarachatbot.in@capgemini.com', // sender address (who sends)
    to: emaildata.etoId, // list of receivers (who receives)
    subject: 'Message from S.A.R.A. Your Virtual Sales Advisor!', // Subject line
    // text: 'Hello vasthav', // plaintext body
    html: ebody // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      return false;
    }
    console.log('Message sent: ' + info.response);
    return true;
  });
  console.log('sent');
  return true;
}