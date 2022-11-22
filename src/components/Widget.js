import React from "react";
import "../styles/widget.css";

const Widget = () => {
  return (
    <div className="widgetcontainer">
      <div className="widgetsearch">
        <input type="text" placeholder="Search here" />
      </div>
      <div className="widgettrend">
        <h3 className="widgettrendh3">Trends For You</h3>
        <div className="trenditem">
          <h5>Trending in nigeria</h5>
          <h3>New Nigeria</h3>
          <h6>11.5k likes</h6>
        </div>
        <div className="trenditem">
          <h5>Trending in nigeria</h5>
          <h3>New Nigeria</h3>
          <h6>11.5k likes</h6>
        </div>
        <div className="trenditem">
          <h5>Trending in nigeria</h5>
          <h3>New Nigeria</h3>
          <h6>11.5k likes</h6>
        </div>
      </div>
    </div>
  );
};

export default Widget;
