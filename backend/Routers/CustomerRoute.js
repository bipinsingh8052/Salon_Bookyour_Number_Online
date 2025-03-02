const express=require("express");
const route =express.Router();
const ContollerCustmer =require("../contorller/CustmerController");


route.post("/booking",ContollerCustmer.BookingPage);


module.exports=route;