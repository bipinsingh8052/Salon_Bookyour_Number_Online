const express=require("express");
const route =express.Router();
const SalonContoller =require("../contorller/SalonOwerController");
route.post("/signup",SalonContoller.SignupPage);

route.post("/login",SalonContoller.LoginPage)
module.exports=route;