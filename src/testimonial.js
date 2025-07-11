// src/components/Testimonial.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import './testimonial.css'; // Create this new CSS file for testimonial specific styles
import { Link } from 'react-router-dom';
import  { useRef, useLayoutEffect, useCallback, useMemo } from "react"; // Import useEffect
import { Container, Nav, Button, Dropdown } from "react-bootstrap";
import client1 from './image/client1.jpeg';

import client2 from './image/client2.jpeg';
import client3 from './image/client3.jpeg';
import Footer from './components/Footer'; 
import Navbar from './components/Navbar'; 
// Data for the testimonials
const feedbackList = [
  {
    name: "Aarav Patel",
    role: "Product Manager at TechNova",
    image: client2, // ✅ Use the imported variable directly (NOT require())
    feedback: "Jayaris helped us scale our MVP in record time. The team was proactive, extremely responsive, and their code quality was exceptional. What impressed me most was their deep understanding of design systems and their ability to adapt to our ever-evolving requirements with zero friction."
  },
  {
    name: "Sanya Mehra",
    role: "Founder of DesignSpire",
    image: client1, // ✅ Use the imported variable directly (NOT require())
    feedback: "We needed a UI/UX partner who could think beyond the basics, and Jayaris delivered. They redefined how we looked at user flows and brought a modern, intuitive touch to our app experience. The attention to micro-interactions and consistency was outstanding."
  },
  {
    name: "Rohan Desai",
    role: "CTO at DevPeak",
    image: client3, // ✅ Use the imported variable directly (NOT require())
    feedback: "Working with Jayaris was like expanding our core tech team without the overhead. They delivered scalable architecture, handled tight deadlines with ease, and brought valuable suggestions during every sprint. Highly dependable and efficient."
  }
];

const Testimonial = () => {
  const [showTestimonialCards, setShowTestimonialCards] = useState(false);

  // Intersection Observer to show cards when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowTestimonialCards(true);
        }
      },
      { threshold: 0.4 } // Adjust to trigger later or earlier
    );

    const section = document.getElementById("testimonials");
    if (section) observer.observe(section);

    return () => section && observer.unobserve(section);
  }, []);

  return (
    <>
     <Navbar/>

    <motion.section className="testimonial-glass-section" id="testimonials">
      {/* Central Glass Message Box */}
      <motion.div
        className="glass-message-box"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Typewriter
          words={["we hear clients are saying something about us..."]}
          loop={1}
          cursor
          typeSpeed={50}
          deleteSpeed={30}
        />
      </motion.div>

      {/* Cards fade in one by one */}
      <div className="client-feedback-grid">
        {showTestimonialCards && feedbackList.map((feedback, index) => (
          <motion.div
            key={index}
            className="client-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
          >
            <img src={feedback.image} className="client-avatar" alt="client" />
            <h5>{feedback.name}</h5>
            <small>{feedback.role}</small>
            <div className="stars">
              {Array(5).fill("★").map((s, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="feedback-text">{feedback.feedback}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
    <Footer />
    </>
  );
};

export default Testimonial;