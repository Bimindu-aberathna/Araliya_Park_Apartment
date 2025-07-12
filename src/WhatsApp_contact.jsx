const whatsappIcon = require("../src/Assets/Araliya-park/whatsapp_logo.png");

function WhatsApp_contact() {
  const handleWhatsAppClick = () => {
    const message = "Hello! I'm asking about Araliya Park Apartment. I would like to know more details.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = process.env.REACT_APP_WHATSAPP_LINK + `?text=${encodedMessage}`;
    
    window.location.href = whatsappUrl;
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        cursor: "pointer",
        zIndex: 1000,
      }}
      onClick={handleWhatsAppClick}
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp Icon"
        style={{ width: "70px", height: "70px" }}
      />
    </div>
  );
}

export default WhatsApp_contact;