let express = require('express');
let router = express.Router();

let bodyParser = require('body-parser');


const ContactFormSendingService = require( '../../app/lib/contact-form-sending-service' );
const contactFormSendingService = new ContactFormSendingService();

module.exports = function(app) {
   app.use('/api/v0', router );
};

router.get('/sendMessage', function(req, res, next) {

  console.log("API router get");

  let text = 'Demande de renseignements from '+req.headers["nom"]+" "+ req.headers["email"]+" dev: " + req.headers["dev"] + " cours: " + req.headers["cours"];

  let mailOptions = {
    from: req.headers["email"], // sender address
    to: 'lilith.neantine@gmail.com',
    subject: 'Demande de renseignements', // Subject line
    text: text
  };

  contactFormSendingService.sendMail(mailOptions);
  res.status(200).send("API sendMessage OK");

  // if (contactFormSendingService.sendMail(mailOptions) === 0)
  // {
  //   res.status(200).send("API sendMessage OK");
  // }
  // else
  // {
  //   res.status(503).send("API sendMessage ERROR");
  // }


});

