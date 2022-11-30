import React, {useState } from 'react'
import { useNavigate} from 'react-router-dom';

import "../styles/loginpage.css";
import image from '../assets/images/image.png'

const RegisterPage = () => {

    const navigate =useNavigate()

    const Register =async (e)=>{
        e.preventDefault()
        
        let response = await fetch("http://127.0.0.1:8000/api/register/",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value}),
            })
        let data = await response.json()
        console.log(data)
        if (response.status ===201){
            navigate('/login')

        }
    

    }

  return (
    <form onSubmit={Register} >
      <div className='login'>
        <div className='login-head'>
          <h1 className='login-heading'>Register</h1>
          <img src={image} alt="Logo" height="75px" width="75px" />
          </div>
        <div className='login-cl'>
         <label>Email:</label>
        <input type="email" name='email' placeholder="Enter your email" />
        </div>
        
        <div className='login-cl'>
        <label>password:</label>
        <input type="password" name='password' placeholder="password" />
        </div>
        <div className='login-cl'>
        <label>password:</label>
        <input type="password" name='password2' placeholder="confirm password" />
        </div>

          <button className='login-btn'>Submit</button>
        <p>have an Account Alredy? <a href='/login'>Login</a></p>
      </div>
    </form>
  );
}

export default RegisterPage
