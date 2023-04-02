import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Avatar } from "@mui/material";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import IconBtns from "./IconBtns";
import { useGetQuery, useGetQueryWithId } from '../hooks/useGetQuery';
import useAPIS from '../hooks/useAPIS';
import { useQuery } from '@tanstack/react-query';
import useAxosInstance from '../hooks/useAxios';
import SharePost from './SharePost';
import CommentBox from './CommentBox';
import ImageList from './ImageList';


const Detail = () => {
  const axiox = useAxosInstance();

  const[reharing,setResharing]=useState(false)

  const [getPosts, likePost] = useAPIS();



    const {id}= useParams()
    
   const {data}= useQuery({queryKey: ["post", id],queryFn:()=>axiox.get(`post/${id}`) });
  

  return (
    data?.data && (
      <div className="flex flex-col w-5/12 ">
        <div className="sticky top-0 bg-white z-[100] border-solid border border-gray-400 px-5 py-4 min-w-fit rounded-md flex  items-center">
          <Link to="/">
            <KeyboardBackspaceIcon />
          </Link>

          <div className="pl-4">
            <h2 className="text-xl font-bold">Tweet</h2>
          </div>
        </div>
        {reharing && <SharePost post={data.data.post_id}/>}
        <div className="flex">
          <div className="pl-2.5  mt-3">
            <Avatar
              sx={{ width: 40, height: 40 }}
              src={`http://127.0.0.1:8000/media/${data.data.author_picture}`}
            />
          </div>
          <div className="pl-5 mt-3">
            <h2 className="text-xl font-bold">{data.data.author_name}</h2>
            <h3 className="text-xs font-normal">
              @{data.data.author_username}
            </h3>
          </div>
        </div>
        <div className="pl-2.5 mt-2">

          {data.data.shared_body ? (<div>{data.data.shared_body}</div>):(<div>{data.data.body}</div>)}
          
          <div className="flex flex-wrap">
            <ImageList images={data.data.images} />
          </div>
          <div>
            <span>85 shares</span> <span>120 likes</span>
          </div>
          <div className="flex justify-between mt-5 ml-2  mr-8">
            <ChatBubbleOutlineOutlinedIcon fontSize="small" />
            {/*post footer*/}
            {data.data?.favourited ? (
              <IconBtns
                Icon={FavoriteIcon}
                onClick={() => likePost(data.data.post_id)}
                color="error"
              />
            ) : (
              <IconBtns
                Icon={FavoriteBorderOutlinedIcon}
                onClick={() => likePost(data.data.post_id)}
              />
            )}

            <IconBtns
              Icon={RepeatOutlinedIcon}
              onClick={() => setResharing(!reharing)}
            />

            <EqualizerIcon fontSize="small" />
          </div>
        </div>
        <CommentBox />
      </div>
    )
  );
}

export default Detail
