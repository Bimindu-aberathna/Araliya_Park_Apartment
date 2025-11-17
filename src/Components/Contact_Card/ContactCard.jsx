import { Copy } from "lucide-react";
import "./ContactCard.css";
import toast, { Toaster } from 'react-hot-toast';

function ContactCard({ title, link, linkText, icon: Icon, cpy }) {
  const copyText = (textToCopy) => {

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        toast.success("Copied to clipboard!", {
          position: "top-center",
        });
      })
      .catch(err => {
        alert("Failed to copy: " + err);
      });
  };

  return (
    <div className="col-md-4" style={{ position: "relative" }}>
      {cpy && (
        <div
          id="cpyBtn"
          onClick={(e) => {
            e.stopPropagation();
            copyText(linkText);
          }}
          style={{
            zIndex: "10",
            border: "1px solid #d2a331",
            position: "absolute",
            top: "10px",
            right: "25px",
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "white",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
          }}
        >
          <Copy size={16} color="#d2a331" />
        </div>
      )}
      <div
        id="contact-card"
        className="card h-100 border-0 shadow-lg p-4"
        style={{ borderRadius: "20px", cursor: "pointer" }}
      >
        <div
          className="card-body text-center"
          onClick={() => (window.location.href = link)}
        >
          <div className="contact-icon">
            <Icon color="white" size={24} />
          </div>
          <h3 className="h5 fw-bold mb-3">{title}</h3>
          <p className="text-muted mb-0">
            <a style={{ color: "inherit", textDecoration: "none" }} href={link}>
              {linkText}
            </a>
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default ContactCard;
