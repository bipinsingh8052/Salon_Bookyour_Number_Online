const mongoose =require("mongoose");
const schema =new mongoose.Schema({
  
    shopname:String,
    number:Number,
    email:String,
    imageurl:String,
    address:String,
    password:String

})

module.exports =mongoose.model("shopOwner", schema);