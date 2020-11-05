'use strict'
const { json } = require("body-parser");
const HomepageService = require("../service/HomepageService");
class HomepageController{
    static async SearchProductController(req,res,next){
        try{
            let data = await HomepageService.SearchProductService(req);
            //console.log(data);
            res.render("../View/homepage",{data:data});
        }
        catch(e){
            console.log(e)
        }
    }
    static async AddProductController(req,res,next){
        try{
       let data = await HomepageService.AddProductService(req);
       res.json({
           status:"SUCCESS",
           result:data
            })
        }catch(e){
            console.log(e);
        }
    }
    static async GetProductController(req,res,next){
        try{
            console.log(req.query);
            let result = await HomepageService.GetProductService(req);
            let a = JSON.stringify(result);
            let data = JSON.parse(a);
            
            res.render("../View/homepage",{data:data});
            //res.render("../View/homepage");
        }catch(e){
            res.json({
                status:"failed"
            })
        }
    }
}
module.exports = HomepageController;