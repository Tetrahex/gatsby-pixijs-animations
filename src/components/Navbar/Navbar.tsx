import React from "react";
import logo from "../../images/logo.webp";
import "./NavbarStyle.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const navLink = {
  padding: "6px 24px",
  color: "#fff",
  fontWeight: "700",
  fontFamily: "Roboto Slab,serif",
  fontSize: "17px",
};

// const h1 = {
//   color: "#ffc170",
//   fontWeight: "700",
//   fontFamily: "Roboto Slab,serif",
//   // marginTop: "56px",
//   // marginLeft: "57px",
//   fontSize: "21px",
// };

const Header = () => {
  return (
    <main>
      <div className="main-div">
        <Navbar expand="lg">
          <Container className="nav-container">
            <Navbar.Brand href="#">
              <img className="logo" src={logo} alt="logo"></img>
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-md`}
              className="navbar-canvas"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="menu-item">
                <Nav>
                  <Nav.Link style={navLink} href="">
                    Home
                  </Nav.Link>
                  <Nav.Link style={navLink} href="">
                    Battle
                  </Nav.Link>
                  <Nav.Link style={navLink} href="">
                    Land
                  </Nav.Link>
                  <Nav.Link style={navLink} href="">
                    AXS
                  </Nav.Link>
                  <Nav.Link style={navLink} href="">
                    News
                  </Nav.Link>
                  <Nav.Link style={navLink} href="">
                    Marketplace
                  </Nav.Link>

                  {/* <NavDropdown
                      title="More"
                      id={`offcanvasNavbarDropdown-expand-$md`}
                    >
                      <NavDropdown.Item href="">
                        Getting Started
                      </NavDropdown.Item>
                      <NavDropdown.Item href="">News</NavDropdown.Item>
                      <NavDropdown.Item href="">Encyclopedia</NavDropdown.Item>
                      <NavDropdown.Item href="">
                        Land Chest Sale
                      </NavDropdown.Item>
                    </NavDropdown> */}
                  <div className="flag">
                    {/* <h1 style={h1}>PLAY NOW</h1> */}
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
      {/* </div> */}
    </main>
  );
};

export default Header;
