import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Avatar, Button } from '@mui/material'
import jwt_decode from 'jwt-decode'
import useAuth from '../hooks/useAuth'
import axios from 'axios'
import { useLocalStorage } from '../hooks/useLocalStorage'


const Login = () => {
    const navigate = useNavigate();
    const {setAuthToken,setUser}=useAuth()
    const{setItem}=useLocalStorage()
   
    const bgImage ='https://img.freepik.com/free-vector/blue-curve-frame-template_53876-114605.jpg?size=626&ext=jpg&ga=GA1.1.497941786.1679395633&semt=ais'
  
    const [data,setData]=useState({email:'',password:''})

    const handleChange=(event)=>{

        setData({...data,[event.target.name]:event.target.value})
    }

    const handleSubmit= async(event)=>{
        
        event.preventDefault()
        try{
            const response = await axios.post(
              "http://127.0.0.1:8000/api/login/",
              data
            );
            
            if (response.status ==200){
                const accessToken =response?.data
                

                setAuthToken(accessToken)
                localStorage.setItem('accessToken',JSON.stringify(response?.data))
                setUser(JSON.parse(JSON.stringify(jwt_decode(accessToken['access']))))
                localStorage.setItem("activeUser", JSON.stringify(jwt_decode(accessToken['access'])));
               
                navigate('/')
   
                
            }
    
        }catch(err){
            console.log(err)
        }
    

    }
    return (
        <div className='h-screen flex items-center bg-cover ' style={{backgroundImage: `url(${bgImage})`}}>

        <div className=' w-3/12 mx-auto'>
        <form onSubmit={handleSubmit} className='flex flex-col '>
            <Avatar className='mx-auto mb-4 ' sx={{ width: 70, height: 70 }} src='https://img.freepik.com/free-vector/golden-elegant-logo-with-frame_52683-13462.jpg?size=338&ext=jpg&ga=GA1.2.497941786.1679395633&semt=sph'/>
                <input
                    type='text'
                    name='email'
                    placeholder='Enter email'
                    className='border p-2 mb-2 rounded-md outline-none'
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='password'
                    autoComplete='off'
                    className='border p-2 mb-2 rounded-md outline-none'
                    onChange={handleChange}
                />
                <div>

                    <Link to='#'><p className='text-end'>Forgot password</p></Link>
                    
                    
                </div>
                <button className='bg-main text-white font-bold p-2 rounded-md'>Login</button>
                <span className='mt-4 text-xs mb-2'>Dont have an Account?<Link to='/signup'><span className='mb-2  pl-2'>Register</span></Link></span>
            </form>
            <div className='flex flex-col justify-center'>
            <p
              className =" text-center font-semibold mt-5">
              OR
            </p>
            <Button className='bg-blue-700 text-white font-semibold mt-5'>Continue with Facebook</Button>
            <Button className='bg-main text-white font-semibold mt-5'>Continue with Twitter</Button>
            <Button className='bg-red-700 text-white font-semibold mt-5'>Continue with Google</Button>
            </div>

        </div>
        
        </div>

  )
}

export default Login