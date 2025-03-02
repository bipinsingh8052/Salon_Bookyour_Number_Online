import React, { useState } from 'react'
import '../css/signUp.css'
import Confil from '../Confil';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
  let [login,setlogin]=useState({});
 let nav=useNavigate();
 
 
 
 
 
 
     const inputvalue=(e)=>{
         let {name,value}=e.target;
         setlogin(values=>({...values,[name]:value}));
     }
 
 
 
     const FromCheck=async(e)=>{
             e.preventDefault();
             let api =`${Confil}/salon/signup`;
             try {
                 let response =await axios.post(api,login);
                 toast.success(response.data.msg)
                 nav("/login")
                 
             } catch (error) {
                toast.error(error.response.data.msg)
                 
             }
 
         }
    
   return (
    <>
     <div className="conatiner_signup">
           <div className="signform">
               <h1>SignUp</h1>
               <form onSubmit={FromCheck} >
                   <div className="email">
                       <label >Enter Email</label>
                       <input type="email" name='email' placeholder="Enter Email id" onChange={inputvalue} required />
                   </div>
                  
                   <div className="number">
                       <label >Enter number</label>
                       <input type="number" name='number'  placeholder="e.g 1234567890" onChange={inputvalue} required/>
                   </div>

                   <div className="image">
                       <label >Enter Image Url </label>
                       <input type="text" name='image'  placeholder="e.g http://qwrettrewrt" onChange={inputvalue} required/>
                   </div>

                   <div className="address">
                       <label >Enter Address</label>
                       <input type="text" name='address'  placeholder="E.g allahabad" onChange={inputvalue}required />
                   </div>


                   <div className="name">
                       <label >Enter Shop Name</label>
                       <input type="text" name='nameshop'  placeholder="e.g men salon" onChange={inputvalue} required/>
                   </div>

                   <div className="password">
                       <label >Enter Password</label>
                       <input type="password" name='password'  placeholder="Enter password" onChange={inputvalue}required />
                   </div>
                  
                   <div className="button">
                   <button type="submit"> Sign in</button>
                   <p>Regestration only Barbar Shop own</p>
                   </div>
               </form>
           </div>
       </div>

<Toaster/>
</>
   )
 }
