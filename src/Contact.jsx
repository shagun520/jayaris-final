// src/Contact.jsx

import React, { useState } from 'react';
import Contactimg from './image/Contact.png';
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import imagebg from './image/bg2.jpeg';
import Footer from './components/Footer'; 
import Navbar from './components/Navbar'; 
import "./Contact.css"; // Ensure this import is present

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        subject: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here, you can add API call logic (Formspree, EmailJS, backend, etc.)
        console.log(formData);
        setSubmitted(true);
    };

    return (
        <>
            <Navbar/>
            <div
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${imagebg})`, backgroundSize: 'cover' }}
                className="contact-page-container"
            >
                <div className="contact-form-card">
                    <div className='contact-close-button-wrapper'>
                        <Link to='/'><FaXmark className="contact-close-button" /></Link>
                    </div>
                    <h2 className="contact-form-title">Contact Us</h2>

                    {submitted ? (
                        <div className="contact-submission-message">Thank you! We'll be in touch soon.</div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form-layout">
                            <div className="contact-form-row">
                                <div className="contact-form-group">
                                    <label htmlFor="name" className="contact-label">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        onChange={handleChange}
                                        required
                                        placeholder='Enter your name'
                                        className="contact-input"
                                    />
                                </div>
                                <div className="contact-form-group">
                                    <label htmlFor="email" className="contact-label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                        placeholder='Enter your Email'
                                        required
                                        className="contact-input"
                                    />
                                </div>
                            </div>

                            <div className="contact-form-group">
                                <label htmlFor="service" className="contact-label">Service</label>
                                <input
                                    type="text"
                                    id="service"
                                    name="service"
                                    onChange={handleChange}
                                    required
                                    placeholder='Service Name'
                                    className="contact-input"
                                />
                            </div>
                            <div className="contact-form-group">
                                <label htmlFor="subject" className="contact-label">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    onChange={handleChange}
                                    required
                                    className="contact-input"
                                />
                            </div>

                            <div className="contact-form-group">
                                <label htmlFor="message" className="contact-label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="contact-input contact-textarea"
                                ></textarea>
                            </div>

                            <div className="contact-submit-button-wrapper">
                                <button
                                    type="submit"
                                    className="contact-submit-button"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Contact;