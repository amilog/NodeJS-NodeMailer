const { User } = require("../models/User");
const { confirmCodeEmail } = require("../utils/emailService");


const userController = {

    
sendMsg:  (req, res) =>  {
const {email , code } = req.body
confirmCodeEmail(email , code )
res.json({'msg' : 'send'})

}

}


module.exports = {
    userController
}


//kullanıcı şifremi unuttum diyip email girdikten sonra 1 dk içerisinde code girmek zorunda!

//3 den fazla kodu yanlış giremez!