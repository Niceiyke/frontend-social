import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaArtstation, FaBuffer, FaCalendarAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="pl-4 flex flex-col fixed">
      <h1>
        <Link
          to="/"
          className="uppercase font-bold text-3xl text-red-600 hover:text-gray-600 "
        >
          LOGO
        </Link>{" "}
      </h1>
      <div className="flex gap-3  mt-4   ">
        {" "}
        <span className="mt-0">
          <FaHome size="2em" />{" "}
        </span>
        <Link
          to="/"
          className="font-bold text-xl mt-1 text-gray-600 hover:text-red-600 "
        >
          Home
        </Link>
      </div>
      <div className="flex gap-3  mt-4  ">
        {" "}
        <span className="mt-0">
          <FaArtstation size="2em" />{" "}
        </span>
        <Link
          to="/"
          className="font-bold text-xl mt-1 text-gray-600 hover:text-red-600 "
        >
          Profile
        </Link>
      </div>
      <div className="flex gap-3  mt-4  ">
        {" "}
        <span className="mt-0">
          <FaBuffer size="2em" />{" "}
        </span>
        <Link
          to="/"
          className="font-bold text-xl mt-1 text-gray-600 hover:text-red-600 "
        >
          Explore
        </Link>
      </div>
      <div className="flex gap-3  mt-4  ">
        {" "}
        <span className="mt-0">
          <FaCalendarAlt size="2em" />{" "}
        </span>
        <Link
          to="/"
          className="font-bold text-xl mt-1 text-gray-600 hover:text-red-600 "
        >
          Favourite
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
