const express = require('express');
const route = express.Router();
const HomepageController = require("../controller/HomepageController");
route.get("/",HomepageController.GetProductController);
route.get("/search",HomepageController.SearchProductController);
route.post("/",HomepageController.AddProductController);
module.exports = route;