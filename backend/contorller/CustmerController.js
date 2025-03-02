const SalonModel =require("../model/Salone")
const custmerModel =require("../model/Customer")


const BookingPage=async(req,res)=>{
    console.log(req.body);
    res.status(200).send('okk');
}

module.exports={
    BookingPage
}