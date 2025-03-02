const express=require("express");
const route =express.Router();
const ContollerCustmer =require("../contorller/CustmerController");
route.post("/search",ContollerCustmer.SearchPage)

route.post("/booking",ContollerCustmer.BookingPage);
// route.post("/dashboard",ContollerCustmer.dashboard)

module.exports=route;