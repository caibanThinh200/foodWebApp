'use strict'
const querryBuilder = require("../config/database");
const uuid = require("uuid");
const { json } = require("body-parser");
class HomepageService{
   
    static async GetProductService(req,res,next){
        try{
            let result = await querryBuilder("product");
            return result
        }catch(e){
            console.log(e);
        }
    }
    static async AddProductService(req,res,next){
        try{
        let param = req.body;
        console.log(param);
        let insertData = {
            productId:uuid.v4(),
            image:param.image,
            productName : param.name,
            price:param.price
        };
        await querryBuilder("product").insert(insertData);
        return "product added";
        }catch(e){
            console.log(e);
        }
    }
    static async SearchProductService(req,res,next){
        try{
            let data1 = req.query.search;
            let data2 = JSON.stringify(data1);
            let data = JSON.parse(data2);
            
            let result = await querryBuilder("product").where("productName",'like',data+'%');
            console.log(result)
            return result;
        }
        catch(e){
            console.log(e);
        }
    }
}
module.exports = HomepageService;