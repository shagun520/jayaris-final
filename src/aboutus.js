import React from 'react';
import './aboutus.css';
import { motion } from 'framer-motion';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import missionImage from "./image/mission.jpeg";
import visionImage from "./image/vision.jpeg";

const headingText = "Jayaris is where bold ideas meet seamless execution.";
const description = `Empowering the Digital Future — One Solution at a Time.
Jayaris is where bold ideas meet seamless execution. We are a new-age IT solutions company helping businesses grow, scale, and innovate with cutting-edge digital services.
From startups to enterprises, we help brands transform with technology — building high-performing digital products that solve real-world problems.`;

const About = () => {
  const jayaris = "Jayaris";
  const restHeading = headingText.replace("Jayaris", "").trim();

  
const missionPoints = [
  "Bridge global gaps through tech",
  "Deliver scalable digital solutions",
  "Unlock client growth worldwide",
  "Leverage India’s top tech talent",
];

  return (
    <>
      <Navbar />
      <section className="about-hero">
        <div className="overlay">
          <div className="text-box">
            <motion.h1 className="hero-heading">
              <motion.span
                className="word jayaris-highlight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {jayaris}
              </motion.span>

              <motion.span
                className="word"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                &nbsp;{restHeading}
              </motion.span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              {description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
{/* Our Mission Section */}
<section className="our-mission-section" id="our-mission">
  <motion.div
    className="our-mission-container"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.3,
        },
      },
    }}
  >
    <motion.div
      className="mission-image"
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
      }}
    >
      <img src={missionImage} alt="Mission Visual" />
    </motion.div>

    <motion.div
      className="mission-content"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      <motion.h2
        className="mission-heading"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        Our Mission
      </motion.h2>

      <motion.p
        className="mission-paragraph"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } },
        }}
      >
        At Jayaris, our mission is to bridge global gaps through technology by delivering future-ready digital solutions that blend creativity, functionality, and impact. We aim to elevate brands, streamline operations, and unlock growth for clients across borders by leveraging India’s top tech talent and global best practices.
      </motion.p>

      <motion.ul
  className="mission-points"
  initial="hidden"
  whileInView="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.0,
      },
    },
  }}
  viewport={{ once: true }}
>
  {[
    'Bridging global gaps through tech',
    'Delivering future-ready digital solutions',
    'Elevating brands and streamlining operations',
    'Leveraging India’s top tech talent',
  ].map((point, index) => (
    <motion.li
      key={index}
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.3 }}
    >
      {point}
    </motion.li>
  ))}
</motion.ul>

    </motion.div>
  </motion.div>
</section>

<section className="our-vision-section">
  <div className="our-vision-container">
    {/* Image */}
    <motion.div
      className="vision-image"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img src={visionImage} alt="Vision" />
    </motion.div>

    {/* Content */}
    <div className="vision-content">
      {/* Heading */}
      <motion.h2
        className="vision-heading"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Our Vision
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="vision-paragraph"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        At Jayaris, we envision becoming the most trusted global partner in digital transformation — a name synonymous with innovation, reliability, and client success. Our goal is to empower businesses and institutions around the world by delivering cutting-edge IT solutions that are not only scalable and efficient but also tailored to real-world challenges.
        <br></br>
        <br></br>
        As we strive to lead the way in tech excellence, we remain deeply committed to helping our clients achieve long-term growth and competitive advantage through the intelligent use of technology. In this pursuit, trust is our foundation, excellence is our benchmark, and innovation is the path we follow.
      </motion.p>

      {/* Points */}
      <motion.ul
        className="vision-points"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 1.0,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {[' Global reach', ' Empowering creators', ' Redefining innovation', ' Purpose-driven growth'].map((point, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            {point}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </div>
</section>

<section className="our-values-section">
  <motion.h2
    className="values-heading"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    Our Values
  </motion.h2>

  <div className="zigzag-grid">
    {[
      ' Innovation',
      ' Excellence',
      ' Agility',
      ' Transparency',
      ' Global Thinking',
      ' Integrity',
    ].map((value, index) => (
      <motion.div
        className="value-card"
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 * index, duration: 0.5 }}
      >
        {value}
      </motion.div>
    ))}
  </div>
</section>


      <Footer />
    </>
  );
};

export default About;
