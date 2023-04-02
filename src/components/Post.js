import React, { useState } from "react";
import { Avatar } from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import uuid from "react-uuid";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ImageList from "./ImageList";
import IconBtns from "./IconBtns";
import SharePost from "./SharePost";
import { useGetQuery } from "../hooks/useGetQuery";
import useAPIS from "../hooks/useAPIS";
import { Link } from "react-router-dom";

dayjs.extend(relativeTime);

const Post = () => {
  const [getPosts, likePost] = useAPIS();

  const [resharing, setResharing] = useState(false);

  const { isLoading, data, isError } = useGetQuery(["post"], getPosts, {});

  console.log(data?.data);

  return (
    !isLoading &&
    !isError &&
    data?.data.map((post) => {
      return (
        post?.post_id && (
          <div key={uuid(2)}>
            {post.shared_body ? (
              <>
                <div className="flex items-start border-b border-solid border-gray-300 pb-2.5">
                  <div>
                    <Avatar
                      sx={{ width: 70, height: 70 }}
                      src={`http://127.0.0.1:8000/media/${post.shared_user_picture}`}
                      className="ml-2 mt-3"
                    />
                  </div>
                  <div className="flex-1 p-2.5">
                    <div>
                      <div>
                        <h3 className="text-md font-black">
                          {post.shared_user_name}
                          <span>
                            <VerifiedOutlinedIcon className="text-sm  text-main pl-1" />
                          </span>
                          <span className="text-xs pl-2 font-extrabold text-gray-500">
                            @{post.shared_user_username}
                          </span>
                          <span className="text-xs pl-2 font-extrabold text-gray-500">
                            {dayjs(`${post.shared_on}`).fromNow()}
                          </span>
                        </h3>
                      </div>

                      <Link to={`post/${post.post_id}`}>
                        <p>{post.shared_body}</p>
                        <div className="flex flex-wrap">
                          <ImageList images={post.shared_images} />
                        </div>
                      </Link>
                    </div>

                    {/*main Body*/}

                    <div className="flex items-start border-b border-solid border-gray-300 pb-2.5 border rounded ml-2 mr-2 ">
                      <Link to={`post/${post.original_post_id}`}>
                        <div className="flex">
                          <div className="ml-2 mt-2">
                            <Avatar
                              sx={{ width: 70, height: 70 }}
                              src={`http://127.0.0.1:8000/media/${post.author_picture}`}
                            />
                          </div>
                          <div className="flex-1 mt-auto mb-auto ml-2">
                            <div>
                              <h3 className="text-md font-black">
                                {post.author_name}
                                <span>
                                  <VerifiedOutlinedIcon className="text-sm  text-main pl-1" />
                                </span>
                                <span className="text-xs pl-2 font-extrabold text-gray-500">
                                  @{post.author_username}
                                </span>
                                <span className="text-xs pl-2 font-extrabold text-gray-500">
                                  {dayjs(`${post.created_on}`).fromNow()}
                                </span>
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="ml-2">
                          <p>{post.body}</p>
                          <div className="flex flex-wrap">
                            <ImageList images={post.images} />
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="flex justify-between mt-5 ml-auto mr-auto">
                      {/*post footer*/}
                      <Link to={`post/${post.post_id}`}>
                        <ChatBubbleOutlineOutlinedIcon fontSize="small" />
                      </Link>
                      {post.favourited ? (
                        <IconBtns
                          Icon={FavoriteIcon}
                          onClick={() => likePost(post.post_id)}
                          color="error"
                        />
                      ) : (
                        <IconBtns
                          Icon={FavoriteBorderOutlinedIcon}
                          onClick={() => likePost(post.post_id)}
                        />
                      )}
                      <EqualizerIcon fontSize="small" />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-start border-b border-solid border-gray-300 pb-2.5 ">
                <div className="pl-5 mt-3">
                  <Avatar
                    sx={{ width: 70, height: 70 }}
                    src={`http://127.0.0.1:8000/media/${post.author_picture}`}
                  />
                </div>
                <div className="flex-1 p-2.5">
                  <div>
                    <h3 className="text-md font-black">
                      {post.author_name}
                      <span>
                        <VerifiedOutlinedIcon className="text-sm  text-main pl-1" />
                      </span>
                      <span className="text-xs pl-2 font-extrabold text-gray-500">
                        @{post.author_username}
                      </span>
                      <span className="text-xs pl-2 font-extrabold text-gray-500">
                        {dayjs(`${post.created_on}`).fromNow()}
                      </span>
                    </h3>
                  </div>
                  <Link to={`post/${post.post_id}`}>
                    <p>{post.body}</p>
                    <div className="flex flex-wrap">
                      <ImageList images={post.images} />
                    </div>
                  </Link>

                  <div className="flex justify-between mt-5  ml-auto mr-auto">
                    {/*post footer*/}

                    <Link to={`post/${post.post_id}`}>
                      <ChatBubbleOutlineOutlinedIcon fontSize="small" />
                    </Link>

                    {post.favourited ? (
                      <IconBtns
                        Icon={FavoriteIcon}
                        onClick={() => likePost(post.post_id)}
                        color="error"
                      />
                    ) : (
                      <IconBtns
                        Icon={FavoriteBorderOutlinedIcon}
                        onClick={() => likePost(post.post_id)}
                      />
                    )}

                    <EqualizerIcon fontSize="small" />
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      );
    })
  );
};

export default Post;
