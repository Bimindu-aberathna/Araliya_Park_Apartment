import { MapPin, Star } from "lucide-react";
import React from "react";
const photoCollage = require("./Assets/Araliya-park/collage.png");

function About() {
  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={photoCollage}
              alt="Interior view"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 ps-lg-5">
            <h2 className="display-6 fw-bold mb-4">
              Modern Apartments for Comfortable Living
            </h2>
            <p className="lead mb-4">
              Discover thoughtfully designed apartments that combine style, convenience, and comfort in prime locations.
            </p>
            <div className="row g-4 mb-4">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle p-2 me-3"
                    style={{ backgroundColor: "#d2a331" }}
                  >
                    <MapPin color="white" size={20} />
                  </div>
                  <span className="fw-semibold">Prime Location</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle p-2 me-3"
                    style={{ backgroundColor: "#d2a331" }}
                  >
                    <Star color="white" size={20} />
                  </div>
                  <span className="fw-semibold">Quality Finish</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
