const mongoose =require("mongoose");
const schema =new mongoose.Schema({
  
    shopname:String,
    number:Number,
    email:String,
    imageurl:String,
    address:String,
    password:String,
    CustmerID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"custmer"
    }

})

module.exports =mongoose.model("shopOwner", schema);