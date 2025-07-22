// src/components/Footer.js
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import { Container, Row, Col } from 'react-bootstrap'; // For Bootstrap grid layout
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Import chevron icons
import './Footer.css'; // Create a new CSS file for footer-specific styles
// import logoImage from './path/to/your/logo.png'; // If you want to use the logo in the footer too

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation(); // Used for scroll-to-top logic

  // State to manage if we are on a mobile screen
  const [isMobile, setIsMobile] = useState(false);
  // States to manage dropdown open/close for Quick links
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  // States to manage dropdown open/close for Legal & Policies
  const [legalOpen, setLegalOpen] = useState(false);

  // Effect to detect screen size and update isMobile state
  useEffect(() => {
    const handleResize = () => {
      // Set isMobile based on screen width (matching CSS breakpoint: max-width: 767.98px)
      setIsMobile(window.innerWidth <= 767.98);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    // Call handler right away to set initial state
    handleResize();
    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this runs once on mount and unmount

  // Toggle functions for dropdowns
  const toggleQuickLinks = () => {
    setQuickLinksOpen(!quickLinksOpen);
  };

  const toggleLegal = () => {
    setLegalOpen(!legalOpen);
  };

  // Scroll to Top Logic (from your previous code)
  useEffect(() => {
    if (location.state?.fromFooter && !location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);


  return (
    <footer className="main-footer py-5">
      <Container>
        <Row>
          {/* About Jayaris Section */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-heading">About Jayaris</h5>
            <p className="footer-text">
              Jayaris is a modern IT solutions startup that delivers trusted, resourceful, and
              high-quality IT services to global clients. From web and app development to SEO,
              cybersecurity, blockchain, content creation, and digital marketing, we
              provide everything a business needs to grow in the digital space. Our mission is
              to become the most reliable and future-ready tech partner for companies
              worldwide, powered by innovation, transparency, and excellence.
            </p>
          </Col>

          {/* Quick links Section - Now with conditional rendering for mobile dropdown */}
          <Col md={2} className="mb-4 mb-md-0">
            {isMobile ? (
              // On mobile, render a clickable header for dropdown
              <div className="footer-dropdown-header" onClick={toggleQuickLinks}>
                <h5 className="footer-heading mb-0">Quick links</h5> {/* mb-0 to remove default bottom margin */}
                <FontAwesomeIcon icon={quickLinksOpen ? faChevronUp : faChevronDown} className="dropdown-icon" />
              </div>
            ) : (
              // On desktop, render a regular heading
              <h5 className="footer-heading">Quick links</h5>
            )}
            {/* The list of links, conditionally collapsed on mobile */}
            <ul className={`list-unstyled footer-links ${isMobile && !quickLinksOpen ? 'collapsed' : ''}`}>
              <li><Link to="/" state={{ fromFooter: true }}>Home</Link></li>
              <li><Link to="/about" state={{ fromFooter: true }}>About us</Link></li>
              <li><Link to="/services" state={{ fromFooter: true }}>Services</Link></li>
              <li><Link to="/career" state={{ fromFooter: true }}>Career</Link></li>
              <li><Link to="/testimonials" state={{ fromFooter: true }}>Testimonials</Link></li>
              <li><Link to="/contact" state={{ fromFooter: true }}>Contact us</Link></li>
              <li><Link to="/blog" state={{ fromFooter: true }}>Blog</Link></li>
            </ul>
          </Col>

          {/* Contact Info Section (remains standard) */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="footer-heading">Contact Info</h5>
            <ul className="list-unstyled footer-contact-info">
              <li>Email: <a href="mailto:support@jayaris.com">infojayaris@outlook.com</a></li>
              <li>Location: 📍 314/16 Nanda Nagar, Indore – 452011, Madhya Pradesh, India</li>
              <li>Phone: +91-9981442233 / +91-8516998877</li>
            </ul>
          </Col>

          {/* Legal & Policies Section - Now with conditional rendering for mobile dropdown */}
          <Col md={3} className="mb-4 mb-md-0">
            {isMobile ? (
              // On mobile, render a clickable header for dropdown
              <div className="footer-dropdown-header" onClick={toggleLegal}>
                <h5 className="footer-heading mb-0">Legal & Policies</h5>
                <FontAwesomeIcon icon={legalOpen ? faChevronUp : faChevronDown} className="dropdown-icon" />
              </div>
            ) : (
              // On desktop, render a regular heading
              <h5 className="footer-heading">Legal & Policies</h5>
            )}
            {/* The list of links, conditionally collapsed on mobile */}
            <ul className={`list-unstyled footer-links ${isMobile && !legalOpen ? 'collapsed' : ''}`}>
              <li><Link to="/terms" state={{ fromFooter: true }}>Terms & Conditions</Link></li>
              <li><Link to="/privacy" state={{ fromFooter: true }}>Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" state={{ fromFooter: true }}>Cookie Policy</Link></li>
              <li><Link to="/sitemap" state={{ fromFooter: true }}>Sitemap</Link></li>
            </ul>
          </Col>
        </Row>

        <hr className="footer-divider mt-4 mb-3" />

        {/* Copyright Section */}
        <Row>
          <Col className="text-center">
            <p className="footer-copyright">
              Copyright &copy; {currentYear} JAYARIS Solution Private Limited
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;