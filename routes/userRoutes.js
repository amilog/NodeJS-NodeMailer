const express = require('express');
const { userController } = require('../controllers/UserController');

const userRoutes = express.Router();

userRoutes.post('/send' , userController.sendMsg)



module.exports = {
    userRoutes
}