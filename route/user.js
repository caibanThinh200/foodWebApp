const express = require('express');
const route = express.Router();
const UserController = require('../controller/UserController');
route.get('/SignUp',(req,res,next)=>{
    res.render("../View/SignUp",{message:""});
});
route.get('/SignIn',(req,res,next)=>{
    res.render("../View/SignIn",{message:""});
})
route.post('/SignUp',UserController.createUserController);
route.post('/SignIn',UserController.loginController);
module.exports = route;