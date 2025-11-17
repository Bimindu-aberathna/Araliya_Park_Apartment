import { Mail, MapPin, Phone, Copy } from "lucide-react";
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
          <ContactCard
            title="Call Us"
            link="tel:+94773406398"
            linkText="+94 77 340 6398"
            icon={Phone}
            onCopy={() => copyText("+94773406398")}
          />
          <ContactCard
            title="Email Us"
            link="mailto:araliyaparkapartments@gmail.com"
            linkText="araliyaparkapartments@gmail.com"
            icon={Mail}
            onCopy={() => copyText("araliyaparkapartments@gmail.com")}
          />
          <ContactCard
            title="Visit Us"
            link="https://maps.app.goo.gl/AGJvNTxVpJmMmqZ79"
            linkText="27/7,1st lane, Bandaranayake mawatha, Katubedda, Sri Lanka."
            icon={MapPin}
            onCopy={() => copyText("27/7,1st lane, Bandaranayake mawatha, Katubedda, Sri Lanka.")}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
