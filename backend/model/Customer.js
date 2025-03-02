const mongoose =require("mongoose");
const Schema = new mongoose.Schema({
    name:String,
    email:String,
    date:String,
    time:String,
    number:Number
})
module.exports=mongoose.model("custmer" ,Schema)