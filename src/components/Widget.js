import React from "react";
import Trend from "./Trend";


const Widget = () => {
  return (
    <div className="widgetcontainer">
      <div className="w-full">
        <input type="text" placeholder="Search here" className="w-4/5" />
      </div>
      <div className="mt-4 ">
        <h3 className="text-2xl font-bold">Trends For You</h3>

        <Trend />
      </div>
    </div>
  );
};

export default Widget;
