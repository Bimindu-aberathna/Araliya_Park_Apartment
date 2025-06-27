import React from "react";
import MyVerticallyCenteredModal from "./Carousel/MyVerticallyCenteredModal";

function Hero() {
  const [modalShow, setModalShow] = React.useState(false);

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
                Your Home Away From Home in Katubedda
              </h1>
              <p className="lead mb-5 fw-normal">
                Experience short-term stays in our stylish, fully-furnished
                apartments — perfect for holidays, business trips, or family
                visits. Designed with comfort and convenience in mind for
                foreigners and Sri Lankans returning home.
              </p>
              <div className="d-flex gap-3">
                <button
                  className="btn btn-warning btn-lg px-4 py-3 fw-semibold"
                  onClick={() => setModalShow(true)}
                >
                  Explore Apartments
                </button>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <button className="btn btn-outline-light btn-lg px-4 py-3 fw-semibold">
                  Reserve Now
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
