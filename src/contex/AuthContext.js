import React, { createContext, useEffect, useState } from 'react'

const AuthContext =createContext()

export const AuthProvider = ({children}) => {

    const[user,setUser]=useState(null)
    const[AuthToken,setAuthToken]=useState(null)


    const Login = async (e)=>{
        e.preventDefault()
        let response = fetch("http://127.0.0.1:8000/api/login/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: e.target.email.value,
            password: e.target.password.value}),
        })
        let data =await (await response).json()
      if (response.status===200){
        setAuthToken(data);

        //Todo decode access token with jwt
        setUser(data.access);
      }else {
        // Handle Error
        alert('something went round')
      }

        

       
    }
 
    let contextData={
        "user":user,

 
        "Login":Login
    }
    

  return (
    <AuthContext.Provider value={contextData}>

        {children}

    </AuthContext.Provider>
  )
}

export default AuthContext
 