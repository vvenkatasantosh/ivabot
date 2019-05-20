// 		var nodemailer = require('nodemailer');
// var smtpTransport = require('nodemailer-smtp-transport');

// var mailAccountUser = 'sarachatbot.in@capgemini.com'
// var mailAccountPassword = 'July@2018'

// var fromEmailAddress = 'sarachatbot.in@capgemini.com'
// var toEmailAddress = 'vummididev.venkatasantosh@capgemini.com'

// var transport = nodemailer.createTransport(smtpTransport({
//     server: "gmr10.capgemini.com", // hostname
//     auth: {
//         user: mailAccountUser,
//         pass: mailAccountPassword
//     }
// }))

// var mail = {
//     from: fromEmailAddress,
//     to: toEmailAddress,
//     subject: "Welcome To Discount Tire from NODE JS",
//     text: "Hi! I am seding this mail through node js code.",
//     html: "<b>Hi Ganga! I am seding this mail through node js code.</b><p>"
// }

// transport.sendMail(mail, function(error, response){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Message sent: " + response.message);
//     }

//     transport.close();
// });
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var mailAccountUser = 'chatbotzind@gmail.com';
var mailAccountPassword = 'Chatbot@123';

var fromEmailAddress = 'chatbotzind@gmail.com';
var toEmailAddress = 'vummididev.venkatasantosh@capgemini.com';

var transport = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    user: mailAccountUser,
    pass: mailAccountPassword
  }
}));

var mail = {
  from: fromEmailAddress,
  to: toEmailAddress,
  subject: "Welcome To Discount Tire",
  text: "Hi! your appointment is confirmed.",
  html: `<!doctype html>
            <html>
            <head>
            <meta charset="utf-8">
            <title>Confirmation Email from Google Home</title>
            </head>

            <body>
            <p><img src="https://cdn.discounttire.com/sys-master/images/h93/h31/8805357125662/DTD_logo.png" width="200" ></img></p>
            <p>Hi   ,</p>
            <p>You are confirmed for the following appointment:</p>
            <p>Thank you for choosing Discount TIre.</p> 
            </body>
            </html>`
          };
transport.sendMail(mail, function(error, response){
  if (error) new Error(error);
  else
  {
    console.log("Message sent: " + response.message);
    
  }});
transport.close();