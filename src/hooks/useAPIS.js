import useAxosInstance from "../hooks/useAxios";

const useAPIS = () => {
  
    const axiox =useAxosInstance()


  const likePost = async (post) => {
    const response = await axiox.post(`post/like/${post}/`);

    console.log(response);  
  };
    const getPosts = async () => {
      return await axiox.get();
  };

  const getDetail =(id)=>{
    axiox.get(`post/${id}`)
  }

  
  return [getPosts,likePost,getDetail]

};
export default useAPIS