/**
 * Created by Lilith on 06/02/2017.
 */

let nodemailer = require('nodemailer');


class ContactFormSendingService {

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'lilith.neantine@gmail.com',
        pass: 'Neantine:2017?'
      }
    })

    //TODD
    // type: 'OAuth2',
    //   user: 'user@example.com',
    //   accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x'


    this.transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log('Server is ready to take our messages');
      }
    });

  }

  sendMail(mailOptions) {

    console.log('service sendMail');

    this.transporter.sendMail(mailOptions, (error, info) => {

      if (error) {
         console.log("ERROR in nodemailer", error);
        // return 1;
      }
      else {
         console.log("INFO nodemailer", info.messageId, " ", info.response);
        // //Send confirmation mail ?
        // //this.transporter.sendMail();
        // return 0;
      }
    })

    //this.transporter.close();
  }

};


module.exports = ContactFormSendingService;

