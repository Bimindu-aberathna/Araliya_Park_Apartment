import React from "react";
import "./Home.css";
const mainImg = require("./Assets/Araliya-park/cover-photo.jpg");

function MainImg() {
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <img
          id="mainImg"
          src={mainImg}
          alt="A beautiful landscape"
        />
        <div
          id="mainImgTint"
        ></div>
      </div>
    </div>
  );
}

export default MainImg;
