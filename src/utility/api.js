




 export const likePost = async (post) => {
   const response = await axiox.post(`post/like/${post}/`);

   console.log(response);
 };