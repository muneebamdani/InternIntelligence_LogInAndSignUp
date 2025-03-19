import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from './Firebase';
import {createUserWithEmailAndPassword} from "firebase/auth"
import userLogo from "../img/user-logo.jpg"

function Signup(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault()
        try{
           await createUserWithEmailAndPassword(auth,email,password)
            alert("Account Created");
            navigate("/login");
            
        }catch(error){
            alert(error);
            
        }
    }

  return (
    <div className='signup-container'>
        <form className='signup-form' onSubmit={handleSubmit}>
            <figure id='user'><img src={userLogo} alt="user-logo" /></figure>
            <h2 style={{color:"white",fontFamily:"cursive"}}>Sign Up</h2>
            <label htmlFor="email" className='s-email' style={{color:"white"}}>
                Email 
            </label><br />
            <input type="text" id='inp' onChange={(e) => setEmail(e.target.value)} style={{color:"white"}}/><br /><br />
            <label htmlFor="password" className='s-password'style={{color:"white"}}>
                Password 
            </label><br />
            <input type="password" id='inp' onChange={(e) => setPassword(e.target.value)} style={{color:"white"}}/><br />
            <button type='submit' id='btn'>Signup</button>
            <p style={{color:"white"}}>Do you have an account?<Link to="/login"  id='white'>Login</Link></p>
        </form>
    </div>
  )
}

export default Signup