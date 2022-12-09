import uuid from "react-uuid";

const PostImage = ({ post }) => {
  return post.images.length > 1 ? (
    <>
      {post.images.map((img, index) => {
        return (
          <img
            key={uuid(2)}
            src={img.image}
            alt="Logo"
            className="h-auto w-2/4 mt-2 mb-2 pr-4 "
          />
        );
      })}
    </>
  ) : (
    <img
      key={uuid(2)}
      src={post.images[0].image}
      alt="Logo"
      className=" w-full h-2/4 mt-2 mb-2 pr-4 "
    />
  );  
   
};

export default PostImage;
