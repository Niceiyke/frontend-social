import React,{useState} from 'react'
import { Avatar} from '@mui/material'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import {axiox} from '../utility/axios'
import useAuth from '../hooks/useAuth';



const TweetBox = () => {

  const {User}=useAuth()
  const [data,setData]=useState({body:'',images:[]})
  


  const handleChange=(event)=>{

    setData({...data,[event.target.name]:event.target.value})
}

const handleImage=(event)=>{

  setData({...data,[event.target.name]:event.target.files})
}

const handleSubmit= async (event)=>{
    event.preventDefault()
    const images=data['images']

    const formData =new FormData()


    for(let i=0; i<images.length; i++){

      let filename = images[i].name;

      formData.append("images", images[i], filename);
    }

    formData.append('body',data['body'])
    formData.append('author',User.id)

    const response = await axiox.post(
      "create/",
      formData
    );

    console.log(response.data)
      
    setData({body:'',images:[]})

    
}
  return (
    <div className="pb-2.5 border-b-8 border-solid border-gray-200 pr-2.5">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className=" flex items-center p-5">
          <Avatar
            sx={{ width: 70, height: 70 }}
            src={`http://127.0.0.1:8000/media/${User.profile_picture}`}
          />

          <input
            type="text"
            name="body"
            placeholder="What is on your mind?"
            onChange={handleChange}
            className="p-5 flex-1 ml-5 text-xl focus:outline-main bg-white focus:bg-white"
          />
        </div>

        <div className="flex">
          <label htmlFor="imagefile" className="mx-28 cursor-pointer mt-2 ">
            <ImageOutlinedIcon className="text-main" />
          </label>
          <input
            id="imagefile"
            name="images"
            type="file"
            multiple
            onChange={handleImage}
            className="hidden"
          />

          <button
            className="bg-main text-white border-none font-black rounded-xl  w-20 h-10 
              ml-auto"
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox