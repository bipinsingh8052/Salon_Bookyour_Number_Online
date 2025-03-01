import React, { useState } from 'react'
import '../css/login.css'
export default function Login() {
    let [login,setlogin]=useState({});







    const inputvalue=(e)=>{
        let {name,value}=e.target;
        setlogin(values=>({...values,[name]:value}));
    }



    const FromCheck=(e)=>{
            e.preventDefault();
            console.log(login)

        }
    const gotToSignUp=()=>{

    }
  return (
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
  )
}
