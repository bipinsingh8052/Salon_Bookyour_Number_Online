import React, { useEffect, useState } from 'react'

import '../css/dashboard.css'

export default function Dashboard() {
  let[status ,setStatus]=useState(false);
  let [data,setData]=useState([]);

const loading=async()=>{
 
}
const logout=()=>{

  
}

useEffect(()=>{
  loading()
},[])
  return (
    <div className='Dashboard'>
      <div className="dasHeader">
        <h1> My Appointment's</h1>
        <button onClick={logout}> Logout</button>
      </div>
      <div className="mainheaderdas">
        <p>Welcome <span> {name.name}</span></p>
      </div>
      <div className="das">
        <div className="maindas">
          <table>
            <thead>
              <th>Name</th>
              <th>Email</th>
              <th>Disease</th>
              <th>City</th>
              <th>Mobile No</th>
              <th>Appointment Time</th>
              <th> Appointment Date</th>
              <th>Action</th>
            </thead>
            <tbody>
             
           {/* {
            data.map((e,index)=>{
              return(
                <tr key={index}>
                  <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.disease}</td>
              <td>{e.city}</td>
              <td>{e.mobileNo}</td>
              <td>{e.time}</td>
              <td>{e.date}</td>
              <td><button>Cancel</button></td>
                </tr>
              )
            })
           } */}
            
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  )
}
