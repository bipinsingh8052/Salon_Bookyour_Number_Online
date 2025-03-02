const SalonModel =require("../model/Salone")
const custmerModel =require("../model/Customer")


const BookingPage=async(req,res)=>{
    // console.log(req.body);
    const {
        Salonid,
        name,
        email,
        date,
        time,
        number
      }=req.body;

      try {
        // let find =await SalonModel.find({})


        let data = await custmerModel.create({
            name:name,
            email:email,
            date:date,
            time:time,
            number:number,
            salonId:Salonid

        })

        let  SalonAddData =await SalonModel.findByIdAndUpdate(Salonid,{$push:{CustmerID:data._id}})

        res.status(200).send({msg:"booking is successfully completed"})
      } catch (error) {
        res.status(400).send({msg:"server Error"});
      }
   
}


const SearchPage=async(req,res)=>{
    // console.log(req.body);
    const { search}=req.body;
    try {
        let data =await SalonModel.find({shopname:search})
        // console.log(data)
        res.send(data);
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }
    
}


// const dashboard =async(req,res)=>{
//     // console.log(req.body);
//     const { id }=req.body;
//     try {
//         let data =await SalonModel.find(id).populate("CustmerID")
//         console.log(data);
//         res.send("okk")
//     } catch (error) {
//         res.status(500).send({msg:"Server Error"})
//     }
   
// }

module.exports={
    BookingPage,
    SearchPage,
    // dashboard
}