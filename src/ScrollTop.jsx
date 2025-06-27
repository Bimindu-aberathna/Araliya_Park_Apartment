import { ChevronsUp } from "lucide-react";
import React, { useState } from "react";
const WhatsappIcon = require("./Assets/Araliya-park/WhatsappIcon.png");
//import whatsapp link from env
const whatsappLink = process.env.REACT_APP_WHATSAPP_LINK || null;

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisibility);
  return (
    <div className="container">
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          cursor: "pointer",
          padding: "10px",
        }}
        //redirect to whatsapp
        onClick={() => window.open(whatsappLink, "_blank")
        }
      >
        <img
          alt="Chat on WhatsApp"
          src={WhatsappIcon}
          style={{ objectFit: "contain", width: "40px", height: "40px" }}
        />
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
          borderRadius: "50%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "10px",
          display: isVisible ? "flex" : "none",
          border: "1px solid white",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronsUp color="white" />
      </div>
    </div>
  );
}

export default ScrollTop;
