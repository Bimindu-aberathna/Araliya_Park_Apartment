import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import './Contact.css';
import ContactCard from "./Components/Contact_Card/ContactCard";

function Contact() {

  function copyText(textToCopy) {
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert("Copied the text: " + textToCopy);
    })
    .catch(err => {
      alert("Failed to copy: " + err);
    });
}
  
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2 className="display-6 fw-bold mb-4">Get in Touch</h2>
            <p className="lead text-muted">
              Interested in learning more? Contact us today to schedule a
              viewing.
            </p>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {/* <div className="col-md-4">
            <div
              className="card h-100 border-0 shadow-lg p-4"
              style={{ borderRadius: "20px" }}
            >
              <div className="card-body text-center">
                <div className="contact-icon">
                  <Phone color="white" size={24} />
                </div>
                <h3 className="h5 fw-bold mb-3">Call Us</h3>
                <p className="text-muted mb-0">
                  <a href="tel:+94773406398"> +94 77 340 6398</a>
                </p>
              </div>
            </div>
          </div> */}
          <ContactCard
            title="Call Us"
            link="tel:+94773406398"
            linkText="+94 77 340 6398"
            icon={Phone}
          />
          {/* <div className="col-md-4">
            <div
              className="card h-100 border-0 shadow-lg p-4"
              style={{ borderRadius: "20px" }}
            >
              <div className="card-body text-center">
                <div className="contact-icon">
                  <Mail color="white" size={24} />
                </div>
                <h3 className="h5 fw-bold mb-3">Email Us</h3>
                <p className="text-muted mb-0">
                  <a href="mailto:araliyaparkkatubedda@gmail.com">
                    araliyaparkkatubedda@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div> */}
          <ContactCard
            title="Email Us"
            link="mailto:araliyaparkapartments@gmail.com"
            linkText="araliyaparkapartments@gmail.com"
            icon={Mail}
            onClick={()=>copyText("araliyaparkapartments@gmail.com")}
          />
          {/* <div className="col-md-4">
            <div
              className="card h-100 border-0 shadow-lg p-4"
              style={{ borderRadius: "20px" }}
            >
              <div className="card-body text-center">
                <div className="contact-icon">
                  <MapPin color="white" size={24} />
                </div>
                <h3 className="h5 fw-bold mb-3">Visit Us</h3>
                <a
                  href="https://maps.app.goo.gl/AGJvNTxVpJmMmqZ79"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-muted mb-0">
                    27/7,1st lane, Bandaranayake mawatha, Katubedda, Sri Lanka.
                  </p>
                </a>
              </div>
            </div>
          </div> */}
          <ContactCard
            title="Visit Us"
            link="https://maps.app.goo.gl/AGJvNTxVpJmMmqZ79"
            linkText="27/7,1st lane, Bandaranayake mawatha, Katubedda, Sri Lanka."
            icon={MapPin}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
