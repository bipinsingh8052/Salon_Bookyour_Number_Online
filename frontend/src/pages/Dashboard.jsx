import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import Confil from '../Confil';
import '../css/dashboard.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  let[status ,setStatus]=useState(false);
  let [data,setData]=useState([]);
  // let namekiller=useSelector((state)=>state.search.input)
  // console.log(namekiller);
  let id=localStorage.getItem("id")
  let nav=useNavigate();
const loading=async()=>{
  let api=`${Confil}/salon/dashboard`;
  
  // console.log(id);
  try {
    let respone=await axios.post(api,{id:id});
    console.log(respone);
    setData(respone.data)
  } catch (error) {
    console.log("error")
    
  }
}
const logout=async()=>{
  localStorage.clear();


}

useEffect(()=>{
  loading()
  if(!localStorage.getItem("id")){
    nav("/home");
  }
},[logout])
  return (
    <div className='Dashboard'>
      <div className="dasHeader">
        <h1> My Appointment's</h1>
        <button onClick={logout}> Logout</button>
      </div>
      <div className="mainheaderdas">
        <p>Welcome <span> {}</span></p>
      </div>
      <div className="das">
        <div className="maindas">
          <table>
            <thead>
             <tr>
             <th>Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Appointment Time</th>
              <th> Appointment Date</th>
              <th>Action</th>
             </tr>
            </thead>
            <tbody>
             
           {
            data.map((e,index)=>{
              return(
                <tr key={index}>
                  <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.number}</td>
              <td>{e.time}</td>
              <td>{e.date}</td>
              <td><button>Cancel</button></td>
                </tr>
              )
            })
           }
            
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  )
}
