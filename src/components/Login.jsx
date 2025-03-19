import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { auth } from './Firebase';
import {signInWithEmailAndPassword} from "firebase/auth"
import userLogo from "../img/user-logo.jpg"

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit=async (e)=>{
        e.preventDefault()
        try{
           await signInWithEmailAndPassword(auth,email,password)
            alert("Login Successfully")
        }catch(error){
            alert(error); 
        }
    }

  return (
    <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>
            <figure id='user'><img src={userLogo} alt="user-logo" /></figure>
            <h2 style={{color:"white",fontFamily:"cursive"}}>Login</h2>
            <label htmlFor="email" className='s-email' style={{color:"white"}}>
                Email 
            </label><br />
            <input type="text" id='inp' onChange={(e) => setEmail(e.target.value)} style={{color:"white"}}/><br /><br />
            <label htmlFor="password" className='s-password'style={{color:"white"}}>
                Password 
            </label><br />
            <input type="password" id='inp' onChange={(e) => setPassword(e.target.value)} style={{color:"white"}}/><br />
            <button type='submit' id='btn'>Login</button>
            <p style={{color:"white"}}>Do'nt have an account?<Link to="/" id='white'>Sign Up</Link></p>
        </form>
    </div>
  )
}

export default Login;