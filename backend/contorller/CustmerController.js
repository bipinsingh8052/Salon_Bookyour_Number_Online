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



module.exports={
    BookingPage,
    SearchPage,

}