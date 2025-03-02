const SalonModel =require("../model/Salone")
const custmerModel =require("../model/Customer")
const bcrypt =require("bcrypt");
const SignupPage=async(req,res)=>{
    // console.log(req.body);
    const {
        email,
        number,
        image,
        address,
        nameshop,
        password
      }=req.body;

      try {
        let findData =await SalonModel.findOne({email:email});
       if(findData){
          return res.status(404).send({msg:"Allready have your account"})
       }
        let salt =await bcrypt.genSalt(10);
        let hasPassword=await bcrypt.hash(password,salt);
        let data =await SalonModel.create({
            shopname:nameshop,
            number:number,
            email:email,
            imageurl:image,
            address:address,
            password:hasPassword,

        })
        res.status(201).send({msg:"Succesfuly singup"});
      } catch (error) {
        res.status(500).send({msg:"server error"})
      }
   
}



let LoginPage =async(req,res)=>{
    // console.log(req.body);
    const { email, password }=req.body
    try {
        let data =await SalonModel.findOne({email:email});
        if(!data){
            return res.status(404).send({msg:"invaild Email"});
        }
        const passwordMatching = await bcrypt.compare(password,data.password);
        if(!passwordMatching){
             return res.status(404).send({msg:'Invalid password'});
        }

        res.status(200).send(data._id);
    } catch (error) {
        res.status(500).send({msg:"Server error"})
    }

    
}


const DisplayPage=async(req,res)=>{
    try {
        let data= await SalonModel.find();
        // console.log(data)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("not found");
    }
}




const dashboard =async(req,res)=>{
    // console.log(req.body);
    const { id }=req.body;
    try {
        let data =await custmerModel.find({salonId:id})
        console.log(data);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({msg:"Server Error"})
    }
   
}
module.exports={
    SignupPage,
    LoginPage,
    DisplayPage,
    dashboard
}