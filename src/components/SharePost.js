import React, { useState } from "react";
import useAxosInstance from "../hooks/useAxios";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";





const SharePost = ({post}) => {
const axiox = useAxosInstance();

const [data,setData] = useState({shared_body:''});


const handleChange = (event) => {
  setData({ ...data, [event.target.name]: event.target.value });
};

const handleImage = (event) => {
  setData({ ...data, [event.target.name]: event.target.files });
};


const reshare = async(e)=>{
    e.preventDefault()
    
   const response =await axiox.post(`post/reshare/${post}/`,data)

   console.log('res',response)

}


  return (
    <div className=''>
      <form onSubmit={reshare}>
        <input
          type="text"
          name="shared_body"
          autoFocus={true}
          onChange={handleChange}
          placeholder="Reshare with Quote"
          className="p-5 flex-1 ml-2 w-11/12 text-xl mt-2 focus:outline-main bg-white focus:bg-white border-2 "
        />
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
            className="bg-main text-white border-none font-black rounded-xl  w-20 h-10  ml-auto mr-10 mt-2
              "
          >
            share
          </button>
        </div>
      </form>
    </div>
  );
};

export default SharePost;
