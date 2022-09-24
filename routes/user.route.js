
var express = require('express');
var api=express.Router();


var userController=require('../controllers/user.contoller');
var Auth=require('../middlewares/autehnticad');


api.post('/user', userController.register);
api.post('/login', userController.login);
api.get('/prueba', Auth.ensureAuth,userController.prueba);
api.put('/update-user/:id', Auth.ensureAuth, userController.updateUser);

module.exports=api;