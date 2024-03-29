import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { SidebarOptions } from "./SidebarOptions";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Sidebar = () => {
  const { logout } = useAuth();
  return (
    <div className="hidden  md:block  pl-5 pr-5 mt-5 border-r-2 w-[400px]  sticky top-0 ">
      <div className="ml-[100px]">
        <TwitterIcon fontSize="large" className="text-main text-3xl " />
        <Link to="/">
          <SidebarOptions Icon={HomeOutlinedIcon} text="Home" />
        </Link>
        <Link to="/profile/1">
          <SidebarOptions Icon={Person2OutlinedIcon} text="Profile" />
        </Link>
        <div className="flex flex-col">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <button onClick={logout}>logout</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
