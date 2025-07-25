import React, { useState } from "react"; // Import useState
import "aos/dist/aos.css";
import { motion } from 'framer-motion';
import { Container, Nav, Button, Dropdown, Navbar as BootstrapNavbar } from "react-bootstrap";
import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom';
import logoImage from '../image/logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
  // State to manage the expanded/collapsed state of the navbar
  const [expanded, setExpanded] = useState(false); // Initialize to false (closed)

  // Function to close the navbar when a link is clicked
  const handleNavLinkClick = () => {
    setExpanded(false); // Collapse the navbar
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -30, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      style={{ position: 'fixed', width: '100%', zIndex: 9999 }}
    >
      <BootstrapNavbar
        expand="lg"
        fixed="top"
        className="glass-navbar px-4"
        expanded={expanded} // Bind the expanded state
        onToggle={() => setExpanded(!expanded)} // Update state on toggle click
      >
        <Container fluid className="d-flex justify-content-between align-items-center">
          <BootstrapNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src={logoImage}
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
              alt="Jayaris Logo"
            />
            <span className="jayaris-gradient-text">JAYARIS</span>
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" /> {/* Keep this as is */}

          <BootstrapNavbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              {/* Add onClick handler to close navbar when a link is clicked */}
              <Nav.Link as={NavLink} to="/" end onClick={handleNavLinkClick}>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about" onClick={handleNavLinkClick}>About</Nav.Link>
              <Nav.Link as={NavLink} to="/services" onClick={handleNavLinkClick}>Services</Nav.Link>
              <Nav.Link as={NavLink} to="/testimonials" onClick={handleNavLinkClick}>Testimonials</Nav.Link>
              <Nav.Link as={NavLink} to="/career" onClick={handleNavLinkClick}>Career</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" onClick={handleNavLinkClick}>Contact Us</Nav.Link>
            </Nav>

            <div className="d-flex align-items-center gap-3 ms-lg-auto">
              <Link to="/auth" style={{ textDecoration: "none" }}>
                <Button variant="outline-light" size="sm" className="signup-btn">
                  Login
                </Button>
              </Link>
              <Dropdown align="end">
                <Dropdown.Toggle variant="outline-light" size="sm" className="language-toggle d-flex align-items-center">
                  <span className="bi bi-three-dots-vertical me-0 lang-icon"></span> 
                </Dropdown.Toggle>
                <Dropdown.Menu className="dd">
                  <Dropdown.Item>English</Dropdown.Item>
                  <Dropdown.Item>हिन्दी</Dropdown.Item>
                  <Dropdown.Item>Français</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </motion.div>
  );
}

export default Navbar;