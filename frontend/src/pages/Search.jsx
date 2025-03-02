import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { FaLocationDot } from "react-icons/fa6";
import { LuMessageCircleMore } from "react-icons/lu";
import Confil from '../Confil';
import { useNavigate } from 'react-router-dom';
export default function Search() {
 let [alldata,setAllData]=useState([]);
  let search =useSelector((state)=>state.search.input);
  console.log(search)
  const loading=async()=>{
   let api =`${Confil}/custmor/search`
   try {
    let response = await axios.post(api,{search:search});
    console.log(response);
    setAllData(response.data)

    
   } catch (error) {
    console.log(error)
   }
  }
  let nav=useNavigate()
  useEffect(()=>{ loading()
   nav("/search")
  },[])
  return (
    <>
 <h1 className='booking_header'>You can only see  it </h1>
 {
      (search)?
        <div className='cartsall'>
        {
            alldata.map((e,index)=>{return(
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
        
    </div>:<h1>Not Found </h1>
  }
    </>
  )
}
