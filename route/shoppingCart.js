const express = require("express");
const CartController = require("../controller/CartController");
const route = express.Router();

route.post("/",CartController.addingCartController);
route.get("/",CartController.GetListProductController);
route.get("/search/:search",CartController.SearchProductController);
route.get("/list",CartController.GetPaidController);
module.exports = route;