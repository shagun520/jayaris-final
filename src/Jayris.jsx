import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import Earthvideo from './image/Earthvideo.mp4'
import Testi1 from './image/Testibg.jpeg'
import Testi2 from './image/Testibg2.jpeg'
import img from './image/img1.jpg'
import img2 from './image/img2.webp'
import graphic from './image/graphic.jpg'
import Team from './image/Team.jpg'
// import star from './image/star.png'
import './Jayris.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const Jayris = () => {

    const { scrollYProgress } = useScroll({
        // target: ref,

        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

    return (
<>
        <Navbar/>
        <div className='Hero_Section'>
            <motion.div
                style={{
                    // backgroundPosition: "bottom",
                    // backgroundSize: "cover",
                    // y: backgroundY,

                }}
                className="section-container"
            >
                <video className="video-bg" autoPlay muted loop>
                    <source src={Earthvideo} />
                </video>

                <div className="content-wrapper">
                    <motion.h1 style={{ y: textY }} className="heading">
                        <span className="highlight">Shape </span>
                        the Future. Build Your Career
                        <span className="highlight"> With </span> Jayaris
                    </motion.h1>
                    <br />
                    <motion.p style={{ y: textY }} className="paragraph">
                        At Jayaris, careers are more than just roles. We empower talent with purpose, ownership, and growth opportunities that create lasting impact.
                    </motion.p>
                    <br /><br />
                    <div>
                        {/* Optionally add scroll button or arrow here */}
                    </div>
                </div>
            </motion.div>

            <div

            style={{ backgroundImage: `url(${Testi1})`, backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat:'no-repeat' }} className='section12 '>
                {/* <video className='h-[100%] w-[100%] object-cover' autoPlay muted loop><source src={Earthvideo} /></video> */}
                {/* <video className='w-[100%] h-[100%] object-cover' autoPlay muted loop><source src={bg2} /></video> */}
                <img src={Testi2} className="background-img" alt="" />

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="heading-container"
                >
                    <motion.h1 className="heading-text">
                        Overview of <span className="highlight">Opportunities</span>
                    </motion.h1>
                </motion.div>

                <div>
                {/* <br /> */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="card-container"
                    >
                        <div className="box box1">
                            <ul className="content-list">
                                <p className="highlight-text">Open for Freshers (Internships)</p>
                                <li>
                                    Start strong with immersive internships that let you work on live projects, collaborate with real teams, and develop skills that matter in the real world
                                </li>
                                <p className="highlight-text">Experienced Professionals Welcome</p>
                                <li>
                                    Bring your experience to the table and join a company where innovation meets execution. We value leaders who are ready to build, mentor, and grow.
                                </li>
                            </ul>
                        </div>
                        <div className="box box2">
                            <ul className="content-list">
                                <p className="highlight-text">Live, Industry-Grade Projects</p>
                                <li>
                                    Get involved in real client work from day one. Our projects span across industries and technologies, helping you build a portfolio that stands out.
                                </li>
                                <p className="highlight-text">Mentorship by Expert Teams</p>
                                <li>
                                    You’ll never work alone. Our senior team members guide, support, and mentor every step to help you elevate your skills and career trajectory.
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                 
                    {/* Optional video block */}
                </div>


                <div className="internship-box">
                    <motion.div
                        initial={{ opacity: 0, x: -50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="internship-text"
                    >
                        <h1 className="internship-title">Web Development</h1>
                        <div>
                            <ul className="internship-list">
                                <li>Frontend Development Intern (React.js, HTML/CSS, JavaScript)</li>
                                <li>Backend Development Intern (Node.js, Express, APIs)</li>
                                <li>Full Stack Development Intern (MERN/MEAN Stack)</li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="internship-image-container"
                    >
                        <img className="internship-image" src={img} alt="" />
                    </motion.div>
                </div>


                <div className="internship-box">
                    <motion.div
                        initial={{ opacity: 0, x: -50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="internship-image-container"
                    >
                        <img className="internship-image" src={img2} alt="" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="internship-text"
                    >
                        <h1 className="internship-title">App Development</h1>
                        <div>
                            <ul className="internship-list">
                                <li>Android Development Intern (Java/Kotlin)</li>
                                <li>iOS Development Intern (Swift)</li>
                                <li>Cross-Platform App Development Intern (Flutter/React Native)</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>


                
                <div className="internship-box">
                    <motion.div
                        initial={{ opacity: 0, x: -50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="internship-text"
                    >
                        <h1 className="internship-title">UI/UX Design</h1>
                        <div>
                            <ul className="internship-list">
                                <li>UI Design Intern (Figma, Adobe XD)</li>
                                <li>UX Research & Wireframing Intern</li>
                                <li>Product Design Intern (Prototyping & User Testing)</li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="internship-image-container"
                    >
                        <img className="internship-image" src={graphic} alt="" />
                    </motion.div>
                </div>


                <div className="internship-box">
                    <motion.div
                        initial={{ opacity: 0, x: -50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="internship-image-container"
                    >
                        <img
                            className="internship-image"
                            src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png"
                            alt=""
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="internship-text"
                    >
                        <h1 className="internship-title">SEO & Digital Marketing</h1>
                        <div>
                            <ul className="internship-list">
                                <li>SEO Intern (On-page, Off-page, Analytics)</li>
                                <li>Digital Marketing Intern (Google Ads, Meta Ads, Funnels)</li>
                                <li>Social Media Marketing Intern (Strategy, Content, Scheduling)</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
                <div className="internship-box">
                    <motion.div
                        initial={{ opacity: 0, x: -50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="internship-text"
                    >
                        <h1 className="internship-title">Content Creation</h1>
                        <div>
                            <ul className="internship-list">
                                <li>Content Writing Intern (Blogs, Web Copy, SEO Content)</li>
                                <li>UX Research & Wireframing Intern</li>
                                <li>Product Design Intern (Prototyping & User Testing)</li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="internship-image-container"
                    >
                        <img
                            className="internship-image"
                            src="https://cdn.pixabay.com/photo/2024/09/08/08/51/man-9031564_1280.jpg"
                            alt=""
                        />
                    </motion.div>
                </div>


<div className="team-perks-box">
  <motion.div
    initial={{ opacity: 0, x: -50, y: 20 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    transition={{ delay: 0.1 }}
    className="team-perks-content"
  >
    <h1 className="team-perks-title">Team Culture & Perks</h1>
    <ul className="team-perks-list">
      <li>Flexible Work Hours</li>
      <li>Learning & Development Support</li>
      <li>Agile, Collaborative Work Environment</li>
      <li>Structured Career Progression</li>
      <li>Employee Recognition Programs</li>
      <li>Inclusive & Transparent Culture</li>
      <li>Wellness & Mental Health Support</li>
      <li>Innovation-Driven Ecosystem</li>
      <li>Hands on experience</li>
      <li>Industry Level Projects</li>
    </ul>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 50, y: 20 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    transition={{ delay: 0.1 }}
    className="team-perks-image-container"
  >
    <img className="team-perks-image" src={Team} alt="Team" />
  </motion.div>
</div>

        <br />
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Jayris