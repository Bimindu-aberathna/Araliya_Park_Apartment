import React from "react";
import "./Card.css";

function Card({
  title,
  image,
  icon: Icon,
  text,
  facilities,
  setModalContent,
  setShowModal,
  setImageModal
}) {
  function handleCardClick() {
    setImageModal(false);
    setShowModal(true);
    setModalContent({ title, image, text, facilities, type: "facilities" });
  }
  return (
    <div className="Anicard" style={{ backgroundImage: `url(${image})` }}>
      <div className="card-overlay"></div>

      <div className="icon-container">
        <div className="iconBackground">
          <Icon color="white" size={24} />
        </div>
      </div>

      <div className="Anicard-content">
        <h2 className="Anicard-title">{title}</h2>
        <p className="Anicard-body">{text}</p>
        <button type="button" className="button" onClick={handleCardClick}>
          <span>Learn More</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M12 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Card;
