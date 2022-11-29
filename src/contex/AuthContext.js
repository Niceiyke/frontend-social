import React, { createContext, useEffect, useState } from 'react'
<<<<<<< HEAD
import { useNavigate} from 'react-router-dom';
import jwt_decode from 'jwt-decode'
=======
>>>>>>> 9e8b4356f19e06feb6d76764568a3611dfdf382b

const AuthContext =createContext()

export const AuthProvider = ({children}) => {

<<<<<<< HEAD
  const [profile,setProfile]=useState(localStorage.getItem('Profile') ? JSON.parse(localStorage.getItem('Profile')):null)
  const[user,setUser]=useState(localStorage.getItem('AuthTokens') ? jwt_decode(localStorage.getItem('AuthTokens')):null)
  const[AuthToken,setAuthToken]=useState(localStorage.getItem('AuthTokens') ? JSON.parse(localStorage.getItem('AuthTokens')):null)

  const[posts, setPosts]=useState([])
  
  const navigate =useNavigate()

  const fetchPost =async ()=>{
    let response = await fetch(`http://127.0.0.1:8000/api/`)
    let data =await response.json()
    
    if (response.status===200){
     setPosts(data)
    }

  }

  useEffect(()=>{

    fetchPost()
  
  },[])

 
  const getProfile = async (id)=>{
    let response = await fetch(`http://127.0.0.1:8000/api/profile/${id}`)

    let data =await response.json()
    console.log("profile",data)  
    if (response.status===200){
      setProfile(data)
      localStorage.setItem('Profile',JSON.stringify(data))
    }
}

    const Login = async (e)=>{
        e.preventDefault()
        let response = await fetch("http://127.0.0.1:8000/api/login/", {
=======
    const[user,setUser]=useState(null)
    const[AuthToken,setAuthToken]=useState(null)


    const Login = async (e)=>{
        e.preventDefault()
        let response = fetch("http://127.0.0.1:8000/api/login/", {
>>>>>>> 9e8b4356f19e06feb6d76764568a3611dfdf382b
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: e.target.email.value,
            password: e.target.password.value}),
        })
<<<<<<< HEAD
        let data =await response.json()
        if (response.status===200){
          setAuthToken(data);
          setUser(jwt_decode(data.access))
          let id=(jwt_decode(data.access)).user_id
          localStorage.setItem('AuthTokens',JSON.stringify(data))
          getProfile(id)
          
          
          navigate('/')
         


        }else {
          // Handle Error

          alert('something went round')
        }

      }  
 
    let contextData={
        "user":user,
        "AuthToken":AuthToken,
        "profile":profile,
        "posts":posts,

        "Login":Login,
    }


=======
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
    
>>>>>>> 9e8b4356f19e06feb6d76764568a3611dfdf382b

  return (
    <AuthContext.Provider value={contextData}>

        {children}

    </AuthContext.Provider>
  )
<<<<<<< HEAD

}


=======
}

>>>>>>> 9e8b4356f19e06feb6d76764568a3611dfdf382b
export default AuthContext
 