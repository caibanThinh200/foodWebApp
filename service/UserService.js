'use strict'
const querryBuilder = require('../config/database')
const uuid = require("uuid");
const bcryptjs = require('bcrypt');
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "TOIDANGLAMWEB";
class UserService{
   
    static async createUserService(req,res,next) {
        try{
        let data = req.body;
        let insertData = {
            UserId:uuid.v4(),
            Fullname:data.fullname,
            Birth: data.birth,
            Email:data.email,
            Gender: data.gender,
            Created_at:new Date(),
            Password: bcryptjs.hashSync(data.password,10)
        }
       await  querryBuilder("user").insert(insertData);
       return true
    }catch(e){
        console.log(e);
        }

    }
    static async loginService (req,res,next){
        try{
            let params = req.body;
            console.log(req.body);
            let email = params.email;
            let password = params.password;
            let user = await querryBuilder("user").where("Email",email).first();
          
            if(!email || !bcryptjs.compareSync(password,user.Password)){
                return false
            }
            else {
                let token = jwt.sign({id:user.UserId,fullname:user.Fullname},JWT_SECRET_KEY,{expiresIn:60*60*8});
                return token;
            }
        }catch(e){
            console.log(e);
        }
    }
   
}
module.exports = UserService;