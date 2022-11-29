import React, { useContext, useState } from 'react'
import AuthContext from '../contex/AuthContext';

const LoginPage = () => {
    const{Login}=useContext(AuthContext)

  return (
    <form onSubmit={Login}>
      <div>
        <input type="email" name='email' placeholder="Enter email" />
      </div>
      <input type="password" name='password' placeholder="Enter password" />

      <button>Submit</button>
    </form>
  );
}

export default LoginPage
