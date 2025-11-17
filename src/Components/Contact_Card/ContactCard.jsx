import "./ContactCard.css";

function ContactCard({title,link,linkText,icon:Icon}) {
  return (
    <div className="col-md-4">
      <div
      id="contact-card"
        className="card h-100 border-0 shadow-lg p-4"
        style={{ borderRadius: "20px" ,cursor: "pointer" }}
      >
        <div className="card-body text-center" onClick={() => window.location.href = link}>
          <div className="contact-icon">
            <Icon color="white" size={24} />
          </div>
          <h3 className="h5 fw-bold mb-3">{title}</h3>
          <p className="text-muted mb-0">
            <a style={{ color: "inherit", textDecoration: "none" }} href={link}>{linkText}</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
