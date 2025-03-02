const express=require("express");
const app =express();
const bodyParser=require("body-parser");
const cors=require("cors");
const mongoose =require("mongoose");
require("dotenv").config();
const RouteSalon =require("./Routers/SaloneOwnerRouter")
const RouteCustmer=require("./Routers/CustomerRoute")

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


mongoose.connect(process.env.DB_Conncection).then(()=>{
    console.log("mongoose Atlast is Conncented");
}).catch(()=>{
    console.log("Mongoose atalast is not Connected");
})

app.use("/custmor",RouteCustmer)
app.use("/salon",RouteSalon)

let port=process.env.PORT||9021;
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})