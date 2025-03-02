import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaLocationDot } from "react-icons/fa6";
import { LuMessageCircleMore } from "react-icons/lu";
import '../css/about.css'
import axios from 'axios';
import Confil from '../Confil';
import toast, { Toaster } from 'react-hot-toast';
export default function About() {
    const [show, setShow] = useState(false);
    const [booking,setbooking]=useState({});
    const [id,setid]=useState("");
    const[name,setname]=useState("")
    let [carts,setcarts]=useState([])



    const HandleBooking=(e)=>{
        let{name,value}=e.target;
        setbooking(values=>({...values,[name]:value}))
    }

  const handleShow = (id,name) =>{
    // console.log(id,name); 
    setid(id)
    setname(name)
    setShow(true)
};
const handleClose = () =>{
    setShow(false)
} ;



const handlesubmitbtn=async(e)=>{
    e.preventDefault();
    let  api=`${Confil}/custmor/booking`
    try {
        let respone =await axios.post(api,{Salonid:id,...booking});
        console.log(respone)
        toast.success(respone.data.msg)
    } catch (error) {
        console.log(error)
        toast.error(error.respone.data.msg)
    }
    setShow(false)
}


const loading=async()=>{
    let api=`${Confil}/salon/data`
    try {
        let response = await axios.get(api);
        console.log(response);
        setcarts(response.data);
    } catch (error) {
        console.log(error);
        
    }
}

useEffect(()=>{
loading()
},[])
  return (
    <>

    <h1 className='booking_header'>You can Book it </h1>
    <div className='cartsall'>
        {
            carts.map((e,index)=>{return(
                <div className="cart" key={index}>
            <div className="images">
                <img src={e.imageurl} alt="" />
            </div>
            <div className="paragraph">
                <h5>{e.shopname}</h5>
                <p><span><FaLocationDot className='locations' /></span>{e.address} </p>
                <p><span> <LuMessageCircleMore className='comments'/></span> shows comments</p>
            </div>
            <button onClick={()=>{handleShow(e._id,e.shopname)}}>Booking</button>
        </div>
            )})
        }





{/* 
        <div className="cart">
            <div className="images">
                <img src="https://cdn.shopify.com/app-store/listing_images/3fa96125587945d13a22f562772805f9/promotional_image/CKqn3beetfoCEAE=.png?height=720&width=1280" alt="" />
            </div>
            <div className="paragraph">
                <h5>Hair Solan center</h5>
                <p><span><FaLocationDot className='locations' /></span>naini Allahabad </p>
                <p><span> <LuMessageCircleMore className='comments'/></span> shows comments</p>
            </div>
            <button onClick={handleShow}>Booking</button>
        </div> */}
      
    </div>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Booking  from  {name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form  className='bookingpage' >

                <div className="firstname">
                    <label >Enter the Name <span>*</span></label>
                    <input type="text" placeholder='e.g name' name='name' onChange={HandleBooking} />
                </div>
                <div className="email">
                    <label htmlFor=""> Enter the Email <span>*</span></label>
                    <input type="email"  placeholder='e.g email@gmail.com' name='email' onChange={HandleBooking} />
                </div>
                <div className="date">
                    <label htmlFor=""> Enter the date and Time <span>*</span></label>
                    <input type="date" name='date' onChange={HandleBooking} />
                    <input type="time" name='time' onChange={HandleBooking} />
                </div>
                <div className="number">
                    <label htmlFor="">Enter the Number <span>*</span></label>
                    <input type="number" placeholder='e.g 1234567890' onChange={HandleBooking} name='number'  />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer style={{display:'flex', justifyContent:'center', alignContent:'center'}} className='bookingBtn'>
          <Button  onClick={handlesubmitbtn}>
            Booking !
          </Button>
        </Modal.Footer>
      </Modal>
      <Toaster/>
    </>
  )
}
