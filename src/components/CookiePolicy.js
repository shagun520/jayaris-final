// src/components/CookiePolicy.js
import React, { useEffect } from 'react';
import './CookiePolicy.css'; // Link to the CSS file in the same folder
import { Container } from 'react-bootstrap'; // Using react-bootstrap Container for centering
import Footer from './Footer';
import Navbar from './Navbar';
function CookiePolicy() {
  // Optional: Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Use constants for the dates to easily update them
  const effectiveDate = "[July 14, 2025]"; // Placeholder: Update this date
  const lastUpdatedDate = "[July 14, 2025]"; // Placeholder: Update this date

  return (
    <>
    <Navbar/>
    <div className="policy-page-wrapper"> {/* Main wrapper for the gradient background */}
      <Container className="policy-content-container"> {/* React-Bootstrap Container for centered content */}
        <div className="policy-glass-card"> {/* The glass morphism effect card */}
          <h1>Cookie Policy</h1>
          <p className="effective-dates">
            Effective Date: {effectiveDate}<br/>
            Last Updated: {lastUpdatedDate}
          </p>
          <p>
            This Cookie Policy explains how Jayaris Solution Private Limited (“Jayaris,” “we,” “our,” or “us”) uses cookies and similar tracking technologies when you visit our website, <a href="https://www.jayaris.com" target="_blank" rel="noopener noreferrer">www.jayaris.com</a> (“Website”).
          </p>
          <p>
            By using our website, you agree to our use of cookies as outlined in this policy. You may control your cookie preferences at any time using your browser settings.
          </p>

          <h2 className="section-heading">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device (computer, smartphone, or tablet) when you visit a website. They help websites remember your preferences, understand how you interact with content, and improve your overall experience.
          </p>
          <p className="highlight-note">
            Cookies do not contain personal information like your name or phone number but may be linked to data stored elsewhere.
          </p>

          <h2 className="section-heading">2. Why We Use Cookies</h2>
          <p>
            Jayaris uses cookies for the following key purposes:
          </p>
          <div className="sub-section">
            <h3>a) Essential Cookies</h3>
            <p>These cookies are strictly necessary for the website to function. They enable core features such as:</p>
            <ul>
              <li>Page navigation</li>
              <li>Accessing secure areas</li>
              <li>Form submission and project estimators</li>
            </ul>
            <p>Without these cookies, some parts of the website won’t work correctly.</p>
          </div>
          <div className="sub-section">
            <h3>b) Analytics & Performance Cookies</h3>
            <p>These cookies help us understand how users interact with our website. We use services like Google Analytics to:</p>
            <ul>
              <li>Track page views and time spent</li>
              <li>Identify slow-loading pages</li>
              <li>Improve design, content, and navigation</li>
              <li>Detect technical issues and broken links</li>
            </ul>
            <p>All collected data is anonymized and used only for statistical analysis.</p>
          </div>
          <div className="sub-section">
            <h3>c) Functionality Cookies</h3>
            <p>These cookies allow the website to remember your preferences and choices, such as:</p>
            <ul>
              <li>Language or region selection</li>
              <li>Saved contact information in forms</li>
              <li>Remembering whether you’ve already read a pop-up or banner</li>
            </ul>
            <p>They enhance the user experience without tracking your Browse elsewhere.</p>
          </div>
          <div className="sub-section">
            <h3>d) Advertising & Targeting Cookies (If Applicable)</h3>
            <p>If we run ad campaigns (e.g., Google Ads or Meta Ads), we may use cookies to:</p>
            <ul>
              <li>Show relevant ads based on your Browse behavior</li>
              <li>Measure the success of ad campaigns</li>
              <li>Limit the number of times you see a specific ad</li>
            </ul>
            <p>These cookies may be placed by third-party advertising platforms, not Jayaris directly.</p>
          </div>

          <h2 className="section-heading">3. Types of Cookies We Use</h2>
          <div className="cookie-table-container">
            <table>
              <thead>
                <tr>
                  <th>Cookie Type</th>
                  <th>Purpose</th>
                  <th>Expires After</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_csrf_token</td>
                  <td>Security & session verification</td>
                  <td>End of session</td>
                </tr>
                <tr>
                  <td>_ga (Google Analytics)</td>
                  <td>Track user behavior anonymously</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Distinguish users for analytics</td>
                  <td>24 hours</td>
                </tr>
                <tr>
                  <td>cookieConsentStatus</td>
                  <td>Store cookie preferences</td>
                  <td>6 months</td>
                </tr>
              </tbody>
            </table>
            <p className="note-text">Note: Specific cookie names may vary slightly based on updates or third-party tools used.</p>
          </div>

          <h2 className="section-heading">4. Third-Party Cookies</h2>
          <p>
            Some cookies on our website may be placed by third-party services such as:
          </p>
          <ul>
            <li>Google Analytics – for traffic monitoring</li>
            <li>YouTube – for embedded videos</li>
            <li>Facebook Pixel / Meta – for campaign tracking (if applicable)</li>
            <li>LinkedIn Insight Tag – for ad analytics (if implemented)</li>
          </ul>
          <p>
            We encourage you to review the privacy and cookie policies of these platforms as we do not control how they operate.
          </p>

          <h2 className="section-heading">5. How to Manage or Disable Cookies</h2>
          <p>
            You have full control over how cookies are used on your device.
          </p>
          <div className="sub-section">
            <h3>Browser Controls:</h3>
            <p>Most web browsers (Chrome, Firefox, Safari, Edge) allow you to:</p>
            <ul>
              <li>View existing cookies</li>
              <li>Block all or selected cookies</li>
              <li>Delete cookies manually or automatically after each session</li>
              <li>Set up alerts when a website wants to place cookies</li>
            </ul>
            <p>To change your cookie settings, refer to your browser’s Help section or these guides:</p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-5791-d2c64da68843" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>
          </div>
          <div className="sub-section">
            <h3>Cookie Consent Tool (Optional):</h3>
            <p>If implemented, you may see a cookie banner when you visit our site for the first first time. You can use it to:</p>
            <ul>
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customize cookie categories</li>
            </ul>
            <p>You can also revisit the banner using the “Cookie Settings” link in our footer (if enabled).</p>
          </div>

          <h2 className="section-heading">6. Changes to This Cookie Policy</h2>
          <p>
            We may update this policy from time to time to reflect new tools, regulations, or business practices. When we do, we’ll revise the “Last Updated” date at the top of this page.
          </p>
          <p>
            For major changes, we may notify you via banner or email (if applicable).
          </p>

          <h2 className="section-heading">7. Contact Us</h2>
          <div className="contact-info">
            <p>If you have any questions or concerns regarding our use of cookies or this policy, please contact:</p>
            <p><strong>Jayaris Solution Private Limited</strong></p>
            <p>
              📍 314/16 Nanda Nagar, Indore – 452011, Madhya Pradesh, India
            </p>
            <p>
              📧 Email: <a href="mailto:infojayaris@outlook.com">infojayaris@outlook.com</a>
            </p>
            <p>
              📞 Phone: +91-9981442233 / +91-8516998877
            </p>
          </div>

        </div> {/* End policy-glass-card */}
      </Container> {/* End policy-content-container */}
    </div>
    <Footer />
    </>
  );
}

export default CookiePolicy;