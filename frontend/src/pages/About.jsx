import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaLocationDot } from "react-icons/fa6";
import { LuMessageCircleMore } from "react-icons/lu";
import '../css/about.css'
export default function About() {
    const [show, setShow] = useState(false);
    const [booking,setbooking]=useState({});



    const HandleBooking=(e)=>{
        let{name,value}=e.target;
        setbooking(values=>({...values,[name]:value}))
    }

  const handleShow = () =>{ 
    setShow(true)
};
const handleClose = () =>{
    setShow(false)
} ;


const handlesubmitbtn=()=>{

}
const submit=(e)=>{
    e.preventDefault();
    console.log(booking)
    setShow(false)
}
  return (
    <>

    <h1 className='booking_header'>You can Book it </h1>
    <div className='cartsall'>
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
        </div>






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
        </div>
      
    </div>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Booking  from  salon for this </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form  className='bookingpage' onSubmit={submit}>

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
    </>
  )
}
