
import '../css/caulsor.css'
import { GiHairStrands } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import { GiBed } from "react-icons/gi";
import { RiBrushAiLine } from "react-icons/ri";
import { GiFingernail } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { LuMessageCircleMore } from "react-icons/lu";
import { useEffect, useState } from 'react';
import Confil from '../Confil';
import axios from 'axios';
export default function Caulsor() {
     let [carts,setcarts]=useState([])
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
    <div className='herosection'>
        <div className="herosection_inner">
            <h1>Booking software for hair salons</h1>
            <p>Great salon software helps you satisfy your customers’ needs. Barbar Booking number is built to assist you with this—it stores customer details, staff and service information, and appointment histories while managing your schedules so you can prioritize the customer in front of you.</p>
            <button>TRY BOOKINGS NOW</button>
        </div>
      
    </div>

    <div className="second_herosection">
        <div className="second_inner_herosection">
            <h1>A <span> diverse range of beauty services </span>, suitable of any size, or number of locations</h1>
            <p>All-in-One Online Booking for Services, Product Sales, and Consultations</p>
            <div className="second_inner_carts">
                <div className="hero_carts">
                    <p><FaRegEye/></p>
                    <span>Eyelash extension</span>
                </div>
                <div className="hero_carts">
                    <p>< GiHairStrands style={{color:" rgb(28, 24, 24)"}}/></p>
                    <span>Hair salons</span>
                </div>
                <div className="hero_carts">
                    <p><GiBed/></p>
                    <span>Spa salons</span>
                </div>
                <div className="hero_carts">
                    <p><RiBrushAiLine/></p>
                    <span>Beauty salons</span>
                </div>
                <div className="hero_carts">
                    <p><GiFingernail/></p>
                    <span>Nail salons</span>
                </div>
            </div>
        </div>
    </div>

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
           
        </div>
            )})
        }
</div>



    </>
  )
}
