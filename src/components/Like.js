import useAxosInstance from "../hooks/useAxios";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Like = async ({ post }) => {
  const axiox = useAxosInstance();

  const response = await axiox.post(`post/like/${post.post_id}/`);

  console.log(response);

  return post && <FavoriteBorderOutlinedIcon fontSize="small" />;
};

export default Like;
