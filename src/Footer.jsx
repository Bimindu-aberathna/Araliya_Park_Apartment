import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <span className="fw-semibold">© 2024 Katubedda Residences</span>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <div className="d-flex justify-content-center justify-content-md-end gap-4">
              <a href="#" className="text-white text-decoration-none">
                Privacy Policy
              </a>
              <a href="#" className="text-white text-decoration-none">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;