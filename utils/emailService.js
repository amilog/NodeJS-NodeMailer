const nodemailer = require("nodemailer");
// :)
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: 'login',
        user: process.env.mail,
        pass: process.env.key,
    },
});

function confirmCodeEmail(userEMail, confirmCode) {
    var mailContent = `
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
        }
        
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-image: url(https://www.labmedya.com/uploads/haberler/labmedya_gunes-neden-parliyor-.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          border-radius: 5px;
        }
        
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .icon {
          display: inline-block;
          width: 40px;
          height: 40px;
          margin-right: 10px;
          vertical-align: middle;
        }
        
        .code-container {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .code {
          display: inline-block;
          padding: 10px 20px;
          font-weight: bold;
          background-color: #333333;
          color: #ffffff;
          border-radius: 5px;
        }
        
        .message {
          font-size: 16px;
          line-height: 1.5;
          color: #000000;
          font-weight: bold;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2 style="color: #000000; font-weight: bold;">Haqqın Yolu</h2>
        </div>
        <div class="code-container">
          <p class="message">Təsdiq kodunuz:</p>
          <p class="code">${confirmCode}</p>
        </div>
        <p class="message">Haqqın yoluna xoş gəldiniz!</p>
      </div>
    </body>
    </html>
  `;

    transporter.sendMail({
        from: 'haqqinnyolu@gmail.com',
        to: userEMail,
        subject: "Confirm Code",
        html: mailContent
    });
}

module.exports = {
    confirmCodeEmail
};
