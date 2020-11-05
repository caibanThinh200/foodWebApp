'use strict'
const UserService = require('../service/UserService')
class UserController {
    
    static async createUserController(req,res,next){
        try{
            console.log(req.body);
            let data = await UserService.createUserService(req);
            console.log(data)
            if(data){
                res.render("../View/SignIn",{message:"Bạn đã đăng ký thành công"});
            }
            else{
                res.render("../View/SignUp",{message:"Bạn đã đăng ký thất bại"});
            }
        }catch(e){
            res.status(200).json({
                status:"FAILED",
                error:e,
                message:"create user failed"
            })
        }
    }
    static async loginController(req,res,next){
        try{
            console.log(111);
            let result = await UserService.loginService(req);
            if(!result){
                res.render("../View/SignIn",{message:"Đăng nhập  email hoặc mật khẩu không đúng"});
            }
            else{
                console.log("Your token is: " + result);
                res.cookie("jwt",result,{expires: new Date(Date.now + 24*60*60) , httpOnly:true})
                res.redirect("/homepage");
            }
        }catch(e){
            res.status(200).json({
                status:"FAILED",
                error:e,
                data:null
            });
        }
    }
}
module.exports = UserController;