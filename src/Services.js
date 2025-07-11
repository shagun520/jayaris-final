import Tilt from "react-parallax-tilt";
import "./Services.css";
import { motion } from "framer-motion";
import { Container, Nav, Button, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import React, { useState, useRef, useLayoutEffect, useCallback, useMemo, useEffect } from "react";
import logoImage from './image/logo.png';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom';
import useMediaQuery from './hooks/useMediaQuery'; // Import the useMediaQuery hook

const servicesData = [
  { title: "Web Development", description: "We build fast, secure, and beautifully designed websites that make you stand out online." },
  { title: "App Development", description: "From Android to iOS, we create mobile apps that are smooth, powerful, and user-friendly." },
  { title: "UI/UX Design", description: "We design interfaces that look stunning and feel effortless to use." },
  { title: "Cybersecurity Solutions", description: "Your business stays protected with our advanced security setups and monitoring systems." },
  { title: "SEO & Digital Marketing", description: "We help you rank higher, reach wider, and grow faster with smart marketing strategies." },
  { title: "AI & Automation", description: "We create intelligent systems that automate tasks and make your business smarter." },
  { title: "CMS Integration", description: "Easily manage your website with tools like WordPress, Strapi, or custom CMS dashboards." },
  { title: "Blockchain Development", "description": "We develop secure blockchain apps and smart contracts for the future of digital trust." },
  { title: "Content Creation", description: "From blogs to brand copy — we write content that connects and converts." },
  { title: "Business Dashboards", description: "Visual tools that help you track, measure, and manage your company’s performance in real time." },
];

const Services = () => {
  const location = useLocation();
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (location.state?.fromFooter && !location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const [virtualIndex, setVirtualIndex] = useState(1);
  const carouselTrackRef = useRef(null);
  const carouselViewportRef = useRef(null);
  const isAnimatingRef = useRef(false);

  // --- DYNAMIC CAROUSEL PARAMETERS BASED ON SCREEN SIZE ---
  const ARC_RADIUS = isSmallScreen ? 190 : 350;
  const MAX_ROTATION_DEGREES = isSmallScreen ? 35 : 25;
  const MIN_CENTER_SCALE = 1.0;
  const MAX_SIDE_SCALE = isSmallScreen ? 1.4 : 1.4;
  const VISIBLE_SLOTS = isSmallScreen ? 5 : 7;
  const HORIZONTAL_SPACING_FACTOR = isSmallScreen ? 1.1 : 2.0;
  const BASE_CARD_WIDTH = isSmallScreen ? 120 : 160;
  // --- END DYNAMIC CAROUSEL PARAMETERS ---

  // Define clonesBefore and clonesAfter here, outside the useMemo for displayItems
  // This allows them to be accessed by other hooks like logicalIndex and useLayoutEffect
  const CLONE_COUNT = 2; // Number of items to clone at each end for seamless looping

  const displayItems = useMemo(() => {
    if (servicesData.length === 0) return [];
    const clonesBefore = servicesData.slice(servicesData.length - CLONE_COUNT);
    const clonesAfter = servicesData.slice(0, CLONE_COUNT);
    return [...clonesBefore, ...servicesData, ...clonesAfter];
  }, [servicesData]);

  const logicalIndex = useMemo(() => {
    if (servicesData.length === 0) return 0;
    // Adjust logical index calculation for more clones
    let index = virtualIndex - CLONE_COUNT; // Subtract the number of leading clones
    return (index + servicesData.length) % servicesData.length;
  }, [virtualIndex, servicesData.length, CLONE_COUNT]); // Add CLONE_COUNT to dependencies


  const handleSwipe = useCallback((direction) => {
    if (isAnimatingRef.current) return;

    setVirtualIndex((prev) => {
      if (direction === "left") {
        return prev + 1;
      } else {
        return prev - 1;
      }
    });
  }, []);

  const startX = useRef(null);
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (isAnimatingRef.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const delta = touchEndX - startX.current;
    const SWIPE_THRESHOLD = 50;

    if (delta > SWIPE_THRESHOLD) {
      handleSwipe("right");
    } else if (delta < -SWIPE_THRESHOLD) {
      handleSwipe("left");
    }
  };

  const lastWheelTime = useRef(0);
  const WHEEL_COOLDOWN = 300;

  const handleWheel = useCallback((e) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastWheelTime.current < WHEEL_COOLDOWN) {
      return;
    }

    lastWheelTime.current = now;

    const scrollDirection = e.deltaX || e.deltaY;

    if (scrollDirection > 0) {
      handleSwipe("left");
    } else if (scrollDirection < 0) {
      handleSwipe("right");
    }
  }, [handleSwipe]);

  useEffect(() => {
    const viewportElement = carouselViewportRef.current;
    if (viewportElement) {
      viewportElement.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (viewportElement) {
        viewportElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, [handleWheel]);

  const getCardTransforms = useCallback((cardIndex) => {
    let relativePos = cardIndex - virtualIndex;
    const totalDisplayItems = displayItems.length;

    const halfTotal = totalDisplayItems / 2;
    if (relativePos > halfTotal) relativePos -= totalDisplayItems;
    if (relativePos < -halfTotal) relativePos += totalDisplayItems;

    const angleStep = MAX_ROTATION_DEGREES / (VISIBLE_SLOTS / 2);
    const angleDegrees = relativePos * angleStep;
    const angleRadians = angleDegrees * (Math.PI / 180);

    const baseTranslateX = ARC_RADIUS * Math.sin(angleRadians);
    const linearSpreadX = relativePos * BASE_CARD_WIDTH * 0.8;
    const translateX = (baseTranslateX + linearSpreadX) * HORIZONTAL_SPACING_FACTOR;

    const translateZ = -ARC_RADIUS * Math.cos(angleRadians);
    const rotateY = angleDegrees;

    const normalizedAbsAngle = Math.min(1, Math.abs(angleDegrees) / (MAX_ROTATION_DEGREES * (VISIBLE_SLOTS / 2)));
    const scale = MIN_CENTER_SCALE + (MAX_SIDE_SCALE - MIN_CENTER_SCALE) * normalizedAbsAngle;
    const clampedScale = Math.min(MAX_SIDE_SCALE, Math.max(MIN_CENTER_SCALE, scale));

    const zIndex = totalDisplayItems - Math.abs(relativePos);
    const opacityThreshold = (VISIBLE_SLOTS / 2) + 2;
    const opacity = Math.abs(relativePos) > opacityThreshold ? 0 : 1;

    return {
      x: translateX,
      y: 0,
      z: translateZ,
      rotateY: rotateY,
      scale: clampedScale,
      zIndex: zIndex,
      opacity: opacity
    };
  }, [virtualIndex, displayItems.length, ARC_RADIUS, MAX_ROTATION_DEGREES, MIN_CENTER_SCALE, MAX_SIDE_SCALE, VISIBLE_SLOTS, HORIZONTAL_SPACING_FACTOR, BASE_CARD_WIDTH]);

  useLayoutEffect(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    const SNAP_BACK_DELAY = 500;

    const totalServices = servicesData.length;
    // Use the defined CLONE_COUNT here
    if (virtualIndex >= totalServices + CLONE_COUNT) {
      setTimeout(() => {
        if (carouselTrackRef.current) {
          carouselTrackRef.current.style.transitionDuration = '0s';
          setVirtualIndex(CLONE_COUNT); // Reset to the first real item index
          void carouselTrackRef.current.offsetWidth;
          carouselTrackRef.current.style.transitionDuration = '';
        }
        isAnimatingRef.current = false;
      }, SNAP_BACK_DELAY);
    } else if (virtualIndex < CLONE_COUNT) { // If it's moved to the last clone before the real items (index 0 or 1)
      setTimeout(() => {
        if (carouselTrackRef.current) {
          carouselTrackRef.current.style.transitionDuration = '0s';
          setVirtualIndex(totalServices + CLONE_COUNT - 1); // Reset to the last real item index
          void carouselTrackRef.current.offsetWidth;
          carouselTrackRef.current.style.transitionDuration = '';
        }
        isAnimatingRef.current = false;
      }, SNAP_BACK_DELAY);
    } else {
      isAnimatingRef.current = false;
    }
  }, [virtualIndex, displayItems.length, servicesData.length, CLONE_COUNT]);


  return (
    <>
      <Navbar/>

      <section
        className="services-carousel-section"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <h2 className="services-heading">Expert Services We Offer</h2>
        <div className="carousel-viewport" ref={carouselViewportRef}>
          <div className="carousel-3d-container">
            <motion.div
              className="carousel-track"
              ref={carouselTrackRef}
            >
              {displayItems.map((service, index) => {
                const transforms = getCardTransforms(index);
                const isCenter = index === virtualIndex;
                return (
                  <motion.div
                    key={`${service.title}-${index}`}
                    className="service-card-3d-wrapper"
                    animate={{
                      x: transforms.x,
                      y: transforms.y,
                      z: transforms.z,
                      rotateY: transforms.rotateY,
                      scale: transforms.scale,
                      zIndex: transforms.zIndex,
                      opacity: transforms.opacity
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onClick={() => setVirtualIndex(index)}
                  >
                    <Tilt
                      className={`service-card ${isCenter ? 'center' : ''}`}
                      tiltMaxAngleX={10}
                      tiltMaxAngleY={10}
                    >
                      <h5>{service.title}</h5>
                    </Tilt>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="service-description">
          <h4>{servicesData[logicalIndex].title}</h4>
          <p>{servicesData[logicalIndex].description}</p>
        </div>

        <div className="carousel-nav-arrows">
          <Button variant="outline-light" onClick={() => handleSwipe("right")}>&lt;</Button>
          <Button variant="outline-light" onClick={() => handleSwipe("left")}>&gt;</Button>
        </div>
      </section>
      <Footer />
      </>
  );
};

export default Services;