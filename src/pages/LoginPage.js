import React, { useContext } from 'react'
import AuthContext from '../contex/AuthContext';
import "../styles/loginpage.css";
import image from '../assets/images/image.png'

const LoginPage = () => {
    const{Login}=useContext(AuthContext)

  return (
    <form onSubmit={Login} >
      <div className='login'>
        <div className='login-head'>
          <h1 className='login-heading'>LOGIN</h1>
          <img src={image} alt="Logo" height="75px" width="75px" />
          </div>
        <div className='login-cl'>
         <label>Email:</label>
        <input type="email" name='email' placeholder="Enter your email" />
        </div>
        
        <div className='login-cl'>
        <label>password:</label>
        <input type="password" name='password' placeholder="Enter your password" />
        </div>
        <a href='/login'><p className='forgot-pass'>Forgot password?</p></a>
          <button className='login-btn'>Submit</button>
        <p>Dont have an Account? <a href='/register'>Sign up</a></p>
      </div>
    </form>
  );
}

export default LoginPage
