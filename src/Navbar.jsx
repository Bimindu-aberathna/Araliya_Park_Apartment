import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Home.css";
const logo = require("./Assets/Araliya-park/logo.jpg");

function NavigationBar(props) {

  function handlePricing(){
    props.setShowModal(true);
    props.setImageModal(false);
    props.setModalContent({
      title: "Pricing",
      text: "",
      type: "pricing"
    });
  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar"
      variant="dark"
      style={{
        background:
          "linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          {/* <img id="logo" src={logo} alt="Logo" /> */}
          <div
            className="navbar-brand d-flex align-items-center"
            style={{ flexDirection: "column", textAlign: "center" }}
          >
            <img id="logo" src={logo} alt="Logo" />
            <span className="mt-1" style={{ fontFamily:'cursive',fontSize:'11px',color: "#d2a331" }}>
              KATUBEDDA
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => window.scrollTo({ top:document.body.scrollHeight, behavior: "smooth" })}>Contact</Nav.Link>
            <Nav.Link 
            onClick={handlePricing}
            >Pricing</Nav.Link>
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
