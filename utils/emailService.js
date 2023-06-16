const nodemailer = require("nodemailer");

//Öncelikle mail konfigürasyonumu yazıyorum
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: 'login',
        user: "haqqinnyolu@gmail.com",
        pass: "dkdsnabieekwljda",
    },
});

function confirmCodeEmail(userEMail, confirmCode) {
    transporter.sendMail({
        from: 'haqqinnyolu@gmail.com',
        to: userEMail,
        subject: "Confirm Code",
        text: "için confirm code: " + confirmCode,
        html:
            `<!DOCTYPE html>
<html>
<head>
  <title>E-posta Formu</title>
</head>
<body>

<h2>E-posta Gönder</h2>

<form action="mailto:alici@ornek.com" method="post" enctype="text/plain">
  Adınız:<br>
  <input type="text" name="ad" value=""><br><br>
  E-posta Adresiniz:<br>
  <input type="email" name="eposta" value=""><br><br>
  Mesajınız:<br>
  <textarea name="mesaj" rows="5" cols="30"></textarea><br><br>
  <input type="submit" value="Gönder">
  <input type="reset" value="Temizle">
</form>

</body>
</html>`



    });
}


module.exports = {
    confirmCodeEmail
}