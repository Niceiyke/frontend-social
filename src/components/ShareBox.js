import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaUpload, FaPoll} from "react-icons/fa";
import { FcUpload, FcShare } from "react-icons/fc";
import AuthContext from '../contex/AuthContext';




const ShareBox = () => {
  const{profile,fetchPost}=useContext(AuthContext)
  const navigate =useNavigate()
  const [post,setPost]=useState('')
  const [screenshot, setScreenshot]=useState([])

  const{AuthToken,refreshPage}=useContext(AuthContext)

  const createPost =async(e)=>{
    e.preventDefault()
  let formdata = new FormData();
  formdata.append('body',post)
  formdata.append('author',profile.user)

  for (let i = 0; i < screenshot.length; i++) {
    let filename = screenshot[i].name;

    formdata.append("uploaded_images", screenshot[i], filename);
   
  }
      
  

   
    let response = await fetch("http://127.0.0.1:8000/api/",{
      method:"POST",
      headers: {
 
          'Authorization':  'Bearer '+`${AuthToken.access}` ,
        },
      body: formdata
        })
    let data = await response.json()

  if (response.status ===201){

         console.log(data);
         refreshPage()

  }

  }


  
  return (
    <form onSubmit={createPost}>
      <div className=" flex flex-col">
        <div className="flex shrink-0">
          <img
            src={profile.picture}
            alt="Logo"
            className="border rounded-full w-14 h-14 shrink-0 "
          />
          <div className="w-full pl-4">
            <input
              placeholder="share your code"
              name="body"
              className="w-10/12 h-12 mt-1 mb-2"
              onChange={(e) => {
                setPost(e.target.value);
              }}
              value={post}
            />

            <input
              type="file"
              name="screenshot"
              onChange={(e) => {
                setScreenshot(e.target.files);
              }}
              multiple
             
            />

            <div className="ml-4">
              <div className="flex justify-between mt-4 mb-2 w-10/12">
                <span className="pr-2">
                  <FaUpload />
                </span>
                <span className="pr-2">
                  <FcUpload />
                </span>
                <span className="pr-2">
                  <FaPoll />
                </span>
                <span className="pr-2">
                  <FcShare />
                </span>
              </div>
            </div>
          </div>
        </div>
        <button className="w-16 h-8 rounded-full mt-2 relative left-[230px] md:left-[220px] lg:left-[350px] bg-red-600 text-dim-50">
          Share
        </button>
      </div>
    </form>
  );
}

export default ShareBox

