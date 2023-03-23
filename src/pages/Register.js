import React,{ useState} from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Button } from '@mui/material'
import { axiox } from '../utility/axios'




const Register = () => {

    const bgImage ='https://img.freepik.com/free-vector/blue-curve-frame-template_53876-114605.jpg?size=626&ext=jpg&ga=GA1.1.497941786.1679395633&semt=ais'
  
    const [data,setData]=useState({first_name:'',last_name:'',email:'',password:''})

    const handleChange=(event)=>{

        setData({...data,[event.target.name]:event.target.value})
    }

    const handleSubmit= async(event)=>{
        event.preventDefault()
        try {
            const response =await axiox.post('register/',data)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
        
    }
  
    return (
    <div className='h-screen flex items-center bg-cover ' style={{backgroundImage: `url(${bgImage})`}}>

    <div className=' w-3/12 mx-auto'>
    <form onSubmit={handleSubmit} className='flex flex-col '>
        <Avatar className='mx-auto mb-4 ' sx={{ width: 70, height: 70 }} src='https://img.freepik.com/free-vector/golden-elegant-logo-with-frame_52683-13462.jpg?size=338&ext=jpg&ga=GA1.2.497941786.1679395633&semt=sph'/>
        <input
                type='text'
                name='first_name'
                placeholder='First Name'
                className='border p-2 mb-2 rounded-md outline-none'
                onChange={handleChange}
            />
            <input
                type='text'
                name='last_name'
                placeholder='Last Name'
                className='border p-2 mb-2 rounded-md outline-none'
                onChange={handleChange}
            />

            <input
                type='email'
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
            
            <span className='text-end text-xs mb-2'>Already have an Account?<Link to='/login'><span className='mb-2 text-end pl-2'>Login</span></Link></span>
                
         
            <button className='bg-main text-white font-bold  p-2 rounded-md'>Signup</button>
        </form>
        <div className='flex flex-col justify-center'>
        <p
          class=" text-center font-semibold mt-5">
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

export default Register