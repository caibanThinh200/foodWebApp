'use strict'
const querryBuilder = require('../config/database');
const uuid = require("uuid");

const query = require('../config/database');
class CartService{
    static async AddingCartService(req,res,next){
      try{
        let params = req.body;
        console.log(params);
        let dataInsert = {
            cartId: uuid.v4(),
            productName:params.productName,
            productImage:params.productImage,
            price:params.productPrice
        }
        await querryBuilder("Cart").insert(dataInsert);
        return true;
      }catch(e){
        console.log(e);
      }
       
    }
    static async GetListProductService(req,res,next){
      try{
        let data = await querryBuilder("Cart");
          return data;
      }catch(e){
        console.log(e);
      }
    }
    static async GetPaidService(req,res,next){
        try{
            let data = await querryBuilder("Cart").del;
            console.log(data);
            return data;
        }catch(e){
            console.log(e);
        }
    }
    static async searchProductService(req,res,next){
      try{
      let params = req.params.search;
      console.log(params);
      let data = await querryBuilder('Cart').where("cartId",params).first();
      console.log(data);
      return data;
      }catch(e){
        console.log(e);
        return e;
      }
  }
}

    
module.exports = CartService;
       
      