const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine","ejs");
const CartRoute = require('./route/shoppingCart');
const UserRoute = require('./route/user');
const HomepageRoute = require('./route/homepage');
app.get("/",(req,res,next)=>{
    res.status(200).json({
        status:"SUCCESS",
        message:"Welcome to nodeJS",
        error:null
    })
});
app.get("/alo",(req,res,next)=>{
    res.render("View/Homepage");
})
app.use("/homepage",HomepageRoute);
app.use('/Cart',CartRoute);
app.use('/register',UserRoute);
app.get("*",(req,res,next) =>{
    res.status(404).json({
        status:"FAILED",
        message:"API not found"
    });
});
module.exports = app;