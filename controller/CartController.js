'use strict'
const CartService = require("../service/CartService");
class CartConstroller{
    static async addingCartController(req,res,next){
        try{
        let result = await CartService.AddingCartService(req);
        console.log(result)
        if(result){
          
        }
            else{
                res.status(200).json({
                    status:"FAILED",
                    message: "thêm vào giỏ hàng thất bại"
                })
            }
        }catch(e){
            res.status(200).json({
                status:"FAILED",
                message: "thêm vào giỏ hàng thất bại, có lỗi xảy ra",
                error:e
            })
        }
    }
    static async GetListProductController(req,res,next){
        try{
            let data1 = await CartService.GetListProductService(req);
            let data2 = JSON.stringify(data1);
           
            let data = JSON.parse(data2);
            
            res.render("../View/ShoppingCart",{data:data});
        }catch(e){
            console.log(e);
        }
    }
    static async GetPaidController(req,res,next){
        try{
            let data = await CartService.GetPaidService(req);
            console.log(data);
            if(data){
                res.json({
                    status:"SUCCESS",
                    data:{
                        result:data
                    }
                })
            }
        }catch(e){
            console.log(111);
            res.json({
                status:"FAILED",
                message:"failed to show list of product",
                data:null,
                error:e
            })
        }
    }
    static async SearchProductController(req,res,next){
        try{
            let data = await CartService.searchProductService(req);
            if(data){
                res.json({
                    status:"SUCCESS",
                    data:{
                        result:data
                    }
                })
            }
        }catch(e){
            res.json({
                status:"FAILED",
                data:null,
                error:e
            })
        }
    }
}
module.exports = CartConstroller;
           