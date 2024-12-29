import React from "react";
import "./Card.css";

function Card({ title, image, icon: Icon, text }) {
  return (
    <div className="Anicard" style={{ backgroundImage: `url(${image})` }}>
      <div className="d-flex align-items-center mb-4 justify-content-center">
        <div
          className="iconBackground"
          style={{
            backgroundColor: "#d2a331",
            width: "48px", // Equal width and height for a perfect circle
            height: "48px",
            borderRadius: "50%", // Makes it a circle
            display: "flex", // Centers the content
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow for better visual appeal
          }}
        >
          <Icon color="white" size={24} />
        </div>
      </div>

      <div className="Anicard-content">
        <h2 className="Anicard-title">{title}</h2>
        <p className="Anicard-body">{text}</p>
        <a href="#" className="button">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Card;