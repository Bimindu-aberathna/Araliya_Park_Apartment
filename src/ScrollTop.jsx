import { ChevronsUp } from "lucide-react";
import React, { useState } from "react";

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
        border:"1px solid white"
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ChevronsUp color="white" />
    </div>
  );
}

export default ScrollTop;
