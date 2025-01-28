import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../custom.css";

function NiceNavbar() {
  return (
    <Navbar bg="#dc2579" expand="lg" className="pink-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/src/assets/images/logo.png" // Ange korrekt sökväg till din loggabild
            alt="Logo"
            height="100" // Justera höjden efter dina behov för att matcha designen
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {" "}
            {/* Ändra från me-auto till ms-auto */}
            <Nav.Link as={Link} to="/compose-salad">
              Beställ
            </Nav.Link>
            <Nav.Link as={Link} to="/view-order">
              Varukorg
            </Nav.Link>
            <Nav.Link as={Link} to="/Login-page">
              log in
            </Nav.Link>
            {/* Ytterligare länkar kan läggas till här om nödvändigt */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/action/3.1">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action/3.3">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NiceNavbar;
