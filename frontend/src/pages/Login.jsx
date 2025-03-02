import React, { useState } from 'react'
import '../css/login.css'
import axios from 'axios'
import Confil from '../Confil';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { searchit } from '../slices/Searchslice';
import { useDispatch } from 'react-redux';
export default function Login() {
    let [login,setlogin]=useState({});
    let [id,setid]=useState("")
    let nav=useNavigate();
    let dispatch =useDispatch();






    const inputvalue=(e)=>{
        let {name,value}=e.target;
        setlogin(values=>({...values,[name]:value}));
    }



    const FromCheck=async(e)=>{
            e.preventDefault();
            let api =`${Confil}/salon/login`;
            try {
                let response =await axios.post(api,login);
                console.log(response.data)
                setid(response.data);
                toast.success("SuccessFully login")
                localStorage.setItem("id",response.data);
                nav("/dashboard");
                
            } catch (error) {
                toast.error(error.response.data.msg)
                // console.log(error.response.data.msg);
                
            }

        }
    const gotToSignUp=()=>{
        nav("/signup")

    }
  return (
    <>
    <div className="conatiner_login">
          <div className="form">
              <h1>Login</h1>
              <form onSubmit={FromCheck} >
                  <div className="email">
                      <label>Enter Email</label>
                      <input type="email" name='email' placeholder="Enter Email id" onChange={inputvalue} />
                  </div>
                 
                  <div className="password">
                      <label >Enter Password</label>
                      <input type="password" name='password'  placeholder="Enter password" onChange={inputvalue} />
                  </div>
                 
                  <div className="button">
                  <button type="submit"> Sign in</button>
                  <p>Don't have an account? <span onClick={()=>{gotToSignUp()}}>Sign Up</span></p>
                  </div>
              </form>
          </div>
      </div>

      <Toaster/>
      </>
  )
}
