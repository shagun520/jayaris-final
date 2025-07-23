import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import useMediaQuery from './hooks/useMediaQuery';
import "./Services.css";

const servicesData = [
  {
    title: "SEO & Digital Marketing",
    description: "We help you rank higher, reach wider, and grow faster with smart marketing strategies.",
    image: "/assets/services/seomark.jpeg"
  },
  {
    title: "Cybersecurity Solutions",
    description: "Your business stays protected with our advanced security setups and monitoring systems.",
    image: "/assets/services/cybersol.jpeg"
  },
  {
    title: "UI/UX Design",
    description: "We design interfaces that look stunning and feel effortless to use.",
    image: "/assets/services/uiux.jpeg"
  },
  {
    title: "App Development",
    description: "From Android to iOS, we create mobile apps that are smooth, powerful, and user-friendly.",
    image: "/assets/services/appdev.jpeg"
  },
  {
    title: "Web Development",
    description: "We build fast, secure, and beautifully designed websites that make you stand out online.",
    image: "/assets/services/webdev.jpeg"
  },
  {
    title: "AI & Automation",
    description: "We create intelligent systems that automate tasks and make your business smarter.",
    image: "/assets/services/aiaut.jpeg"
  },
  {
    title: "Business Dashboards",
    description: "Visual tools that help you track, measure, and manage your company’s performance in real time.",
    image: "/assets/services/busdash.jpeg"
  },
  {
    title: "Blockchain Development",
    description: "We develop secure blockchain apps and smart contracts for the future of digital trust.",
    image: "/assets/services/blockchain.jpeg"
  },
  {
    title: "Content Creation",
    description: "From blogs to brand copy — we write content that connects and converts.",
    image: "/assets/services/content.jpeg"
  },
   {
    title: "CMS Integration",
    description: "Easily manage your website with tools like WordPress, Strapi, or custom CMS dashboards.",
    image: "/assets/services/cmsint.jpeg"
  }
];

const Services = () => {
  const location = useLocation();
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (location.state?.fromFooter && !location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const [virtualIndex, setVirtualIndex] = useState(4);
  const carouselTrackRef = useRef(null);
  const carouselViewportRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const ARC_RADIUS = isSmallScreen ? 190 : 350;
  const MAX_ROTATION_DEGREES = isSmallScreen ? 35 : 25;
  const MIN_CENTER_SCALE = 1.0;
  const MAX_SIDE_SCALE = isSmallScreen ? 1.4 : 1.4;
  const VISIBLE_SLOTS = isSmallScreen ? 5 : 7;
  const HORIZONTAL_SPACING_FACTOR = isSmallScreen ? 1.1 : 2.0;
  const BASE_CARD_WIDTH = isSmallScreen ? 120 : 160;

  const displayItems = useMemo(() => servicesData, []);
  const logicalIndex = useMemo(() => virtualIndex, [virtualIndex]);

  const handleSwipe = useCallback((direction) => {
    if (isAnimatingRef.current) return;

    setVirtualIndex((prev) => {
      if (direction === "left" && prev < servicesData.length - 1) {
        return prev + 1;
      } else if (direction === "right" && prev > 0) {
        return prev - 1;
      }
      return prev;
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
    const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
    if (!isHorizontalScroll) return;

    e.preventDefault();
    const now = Date.now();
    if (now - lastWheelTime.current < WHEEL_COOLDOWN) return;

    lastWheelTime.current = now;

    if (e.deltaX > 0) {
      handleSwipe("left");
    } else {
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

  useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      handleSwipe("right"); // Left arrow means move carousel to the right
    } else if (e.key === "ArrowRight") {
      handleSwipe("left");  // Right arrow means move carousel to the left
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [handleSwipe]);

  const getCardTransforms = useCallback((cardIndex) => {
    const rawOffset = cardIndex - virtualIndex;
    const half = Math.floor(displayItems.length / 2);
    const offset = Math.max(-half, Math.min(half, rawOffset));

    const angleStep = MAX_ROTATION_DEGREES / (VISIBLE_SLOTS / 2);
    const angleDegrees = offset * angleStep;
    const angleRadians = angleDegrees * (Math.PI / 180);

    const baseTranslateX = ARC_RADIUS * Math.sin(angleRadians);
    const linearSpreadX = offset * BASE_CARD_WIDTH * 0.8;
    const translateX = (baseTranslateX + linearSpreadX) * HORIZONTAL_SPACING_FACTOR;

    const translateZ = -ARC_RADIUS * Math.cos(angleRadians);
    const rotateY = angleDegrees;

    const normalizedAbsAngle = Math.min(1, Math.abs(angleDegrees) / (MAX_ROTATION_DEGREES * (VISIBLE_SLOTS / 2)));
    const scale = MIN_CENTER_SCALE + (MAX_SIDE_SCALE - MIN_CENTER_SCALE) * normalizedAbsAngle;
    const clampedScale = Math.min(MAX_SIDE_SCALE, Math.max(MIN_CENTER_SCALE, scale));

    const zIndex = displayItems.length - Math.abs(offset);
    const opacityThreshold = (VISIBLE_SLOTS / 2) + 2;
    const opacity = Math.abs(offset) > opacityThreshold ? 0 : 1;

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

  return (
    <>
      <Navbar />

      <section className="services-carousel-section" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <h2 className="services-heading">Expert Services We Offer</h2>
        <div className="carousel-viewport" ref={carouselViewportRef}>
          <div className="carousel-3d-container">
            <motion.div className="carousel-track" ref={carouselTrackRef}>
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
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    onClick={() => setVirtualIndex(index)}
                  >
                    <Tilt
                      className={`service-card ${isCenter ? 'center' : ''}`}
                      tiltMaxAngleX={10}
                      tiltMaxAngleY={10}
                      style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(30, 5, 80, 0.33), rgba(0, 0, 0, 0.46)), url(${process.env.PUBLIC_URL + service.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      <div className="card-heading-blur">
                        <h5>{service.title}</h5>
                      </div>
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
      </section>

      <Footer />
    </>
  );
};

export default Services;
