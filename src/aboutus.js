import React from "react";
import "./aboutus.css"; // if you’re using a CSS file
import { motion } from "framer-motion";
import { Container, Nav, Button, Dropdown } from "react-bootstrap";
import Navbar from './components/Navbar';
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter"; // This is not used in the provided code, but keeping it
import Tilt from "react-parallax-tilt";
import logoImage from './image/logo.png';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';
import useMediaQuery from './hooks/useMediaQuery';


const AboutUs = () => {
  const location = useLocation();
  const isSmallScreen = useMediaQuery('(max-width: 991.98px)');

   useEffect(() => {
    if (location.state?.fromFooter && !location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const [showCode, setShowCode] = useState(false); // Not used in provided code
  const [showDeploy, setShowDeploy] = useState(false); // Not used in provided code
  const [showPara, setShowPara] = useState(false); // Not used in provided code

  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const cardTimer = setTimeout(() => setShowCard(true), 1200);
    return () => {
      clearTimeout(cardTimer);
    };
  }, []);

   const animationDelays = {
    
    missionWrapper: isSmallScreen ? 2.2 : 3.0, // Start mission section significantly later on mobile (e.g., 2.2s after page load)
    missionHeading: isSmallScreen ? 0.7 : 3.5, // Base delay for heading after wrapper appears
    missionHeadingWordStagger: isSmallScreen ? 0.15 : 0.05, // Increased stagger for individual words
    missionPara: isSmallScreen ? 1.2 : 0.3, // Ensure para comes after heading and heading words are done

    visionSection: isSmallScreen ? 1.0 : 0.1, // Start vision section later on mobile (e.g., 4.0s after page load)
    visionHeading: isSmallScreen ? 0.7 : 0.4,
    visionHeadingWordStagger: isSmallScreen ? 0.15 : 0.05,
    visionPara: isSmallScreen ? 1.2 : 0.3,

    valuesContainer: isSmallScreen ? 2.3 : 0.1, // Start values section later on mobile (e.g., 5.8s after page load)
    valuesHeading: isSmallScreen ? 0.7 : 0.3,
    valuesBoxStagger: isSmallScreen ? 0.2 : 0.06, // Slightly more stagger for boxes
};

  return (
      <>
      <Navbar/>
    
  {/* first viewport */}
  <div className="aboutus-section">
  <div className="right-section">
    <div className="tagline-placeholder">
      <motion.p
        className="jayaris-tagline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        layout
      >
        Jayaris is where bold ideas meet seamless execution.
      </motion.p>
    </div>

    {/* Glass card wrapper with reserved height */}
    <div className="glass-card-placeholder">
      {showCard && (
        <motion.div
          className="glass-card1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }} // Original delay
          layout
        >
          <h3>Empowering the Digital Future — One Solution at a Time</h3>
          <p>
            Jayaris is where bold ideas meet seamless execution. We are a new-age IT solutions company helping businesses grow, scale, and innovate with cutting-edge digital services.
            <br />
            From startups to enterprises, we help brands transform with technology — building high-performing digital products that solve real-world problems.
          </p>
        </motion.div>
      )}
    </div>
  </div>
</div>


{/* mission */}
<motion.div
  className="mission-wrapper"
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  // **** CHANGE THIS LINE ****
  transition={{ duration: 1, ease: "easeOut", delay: animationDelays.missionWrapper }}
  viewport={{ once: true, amount: 0.5 }} // Keep amount for general visibility
>
  <section className="mission-section" id="mission">
    <motion.h2
      className="mission-heading"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      // **** CHANGE THIS LINE ****
      transition={{ duration: 1.5, delay: animationDelays.missionHeading }}
      viewport={{ once: true }} // No amount needed here, parent controls initial view
    >
      {"Our Mission".split(" ").map((word, idx) => (
        <motion.span
          key={idx}
          className="word-span"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Changed to whileInView
          // **** CHANGE THIS LINE ****
          transition={{ delay: animationDelays.missionHeadingWordStagger + idx * animationDelays.missionHeadingWordStagger }}
          viewport={{ once: true }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.h2>

    <motion.p
      className="mission-para"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      // **** CHANGE THIS LINE ****
      transition={{ duration: 1.2, ease: "easeOut", delay: animationDelays.missionPara }}
      viewport={{ once: true, amount: 0.5 }} // Ensure paragraph comes into view later
    >
      At Jayaris, our mission is to bridge global gaps through technology by delivering
      future-ready digital solutions that blend creativity, functionality, and impact. We aim
      to elevate brands, streamline operations, and unlock growth for clients across borders
      by leveraging India’s top tech talent and global best practices. To bridge borders
      through technology by delivering reliable, scalable, and innovative IT solutions to
      clients worldwide.
    </motion.p>
  </section>
</motion.div>


{/* Vision Section */}
<motion.section
  className="info-section"
  initial={{ opacity: 0, x: 120 }}
  whileInView={{ opacity: 1, x: 0 }}
  // **** CHANGE THIS LINE ****
  transition={{ duration: 1.2, ease: "easeOut", delay: animationDelays.visionSection }}
  viewport={{ once: true, amount: 0.5 }} // triggers when ~40% in view
>
  <motion.h2
    className="info-heading"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }} // Changed to whileInView
    // **** CHANGE THIS LINE ****
    transition={{ duration: 0.6, delay: animationDelays.visionHeading }}
    viewport={{ once: true }}
  >
    {"Our Vision".split(" ").map((word, idx) => (
      <motion.span
        key={idx}
        className="word-span"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} // Changed to whileInView
        // **** CHANGE THIS LINE ****
        transition={{ delay: animationDelays.visionHeadingWordStagger + idx * animationDelays.visionHeadingWordStagger }}
        viewport={{ once: true }}
      >
        {word}&nbsp;
      </motion.span>
    ))}
  </motion.h2>

  <motion.p
    className="info-paragraph"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    // **** CHANGE THIS LINE ****
    transition={{ duration: 1, delay: animationDelays.visionPara }}
    viewport={{ once: true, amount: 0.5 }} // Ensure paragraph comes into view later
  >
    At Jayaris, we envision becoming the most trusted global partner in
    digital transformation — a name synonymous with innovation,
    reliability, and client success. Our goal is to empower businesses
    and institutions around the world by delivering cutting-edge IT
    solutions that are not only scalable and efficient but also
    tailored to real-world challenges.
    <br /><br />
    As we strive to lead the way in tech excellence, we remain deeply
    committed to helping our clients achieve long-term growth and
    competitive advantage through the intelligent use of technology.
    In this pursuit, trust is our foundation, excellence is our
    benchmark, and innovation is the path we follow.
  </motion.p>
</motion.section>

{/* Values Section */}
<section className="values-wrapper" id="values">
  <motion.div
    className="values-container glass-section"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ rotateX: 5, rotateY: -5 }}
    // **** CHANGE THIS LINE ****
    transition={{ duration: 1, ease: "easeOut", delay: animationDelays.valuesContainer }}
    viewport={{ once: true, amount: 0.5 }}
  >
    <motion.h2
      className="values-heading"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      // **** CHANGE THIS LINE ****
      transition={{ duration: 1.2, delay: animationDelays.valuesHeading }}
      viewport={{ once: true }}
    >
      OUR VALUES
    </motion.h2>

    <div className="values-list">
  {["Innovation", "Excellence", "Agility", "Transparency", "Global Thinking"].map(
    (value, index) => (
      <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.02} transitionSpeed={1500}>
        <motion.div
          key={index}
          className="value-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          // **** CHANGE THIS LINE ****
          transition={{ duration: 0.5, delay: animationDelays.valuesBoxStagger + index * animationDelays.valuesBoxStagger }}
          viewport={{ once: true }}
        >
          {value}
        </motion.div>
      </Tilt>
    )
  )}
</div>
  </motion.div>
</section>

<Footer />
</>
  );
};

export default AboutUs;