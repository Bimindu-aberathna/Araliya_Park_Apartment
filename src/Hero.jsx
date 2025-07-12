import React from "react";
import ViewModal from "./Components/Modal/View_Modal";

function Hero(props) {
  function handleViewApartments() {
    props.setShowModal(true);
    props.setImageModal(true);
  }
  return (
    <section className="position-relative vh-100">
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
        style={{
          background:
            "linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-6 text-white">
              <h1
                className="display-3 fw-bold mb-4"
                style={{ lineHeight: "1.2" }}
              >
                Experience Luxury Living in Katubedda
              </h1>
              <p className="lead mb-5 fw-normal">
                Discover our newly built premium apartments that blend modern
                comfort with elegant design, creating the perfect space for your
                family.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <button
                  className="btn btn-warning btn-lg btn-md-lg px-3 px-md-4 py-2 py-md-3 fw-semibold"
                  onClick={handleViewApartments}
                >
                  View Apartments
                </button>
                <button className="btn btn-outline-light btn-lg btn-md-lg px-3 px-md-4 py-2 py-md-3 fw-semibold" disabled>
                  Take a Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
