// src/components/PrivacyPolicy.js
import React, { useEffect } from 'react';
import './PrivacyPolicy.css'; // Link to the CSS file in the same folder
import { Container } from 'react-bootstrap'; // Using react-bootstrap Container for centering
import Footer from './Footer';
import Navbar from './Navbar';
function PrivacyPolicy() {
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
          <h1>Privacy Policy</h1>
          <p className="effective-dates">
            Effective Date: {effectiveDate}<br/>
            Last Updated: {lastUpdatedDate}
          </p>
          <p>
            At Jayaris Solution Private Limited (“Jayaris”, “we”, “our”, or “us”), your privacy is extremely important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website, communicate with us, or use our services.
          </p>
          <p>
            By accessing our website or sharing your personal data with us, you agree to the terms of this Privacy Policy. If you do not agree with this policy, please refrain from using our website or services.
          </p>

          <h2 className="section-heading">1. Who We Are</h2>
          <p>
            Jayaris Solution Private Limited is a technology company providing website development, app development, UI/UX design, and digital consulting services. We are registered in India and operate globally via a remote team. Our website address is: <a href="https://www.jayaris.com" target="_blank" rel="noopener noreferrer">www.jayaris.com</a>.
          </p>

          <h2 className="section-heading">2. What Information We Collect</h2>
          <p>
            We collect different types of personal and non-personal information depending on how you interact with us:
          </p>
          <div className="sub-section">
            <h3>a) Information You Provide Directly</h3>
            <p>This includes:</p>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Business details or project requirements</li>
              <li>Communication content (emails, messages, proposals)</li>
              <li>Billing or payment information (if you’re our client)</li>
            </ul>
          </div>
          <div className="sub-section">
            <h3>b) Information We Collect Automatically</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and device information</li>
              <li>Pages visited and time spent</li>
              <li>Referring website or search engine</li>
              <li>Cookies and tracking data (explained below)</li>
            </ul>
          </div>
          <div className="sub-section">
            <h3>c) Information from Third Parties</h3>
            <p>We may collect data from trusted sources like:</p>
            <ul>
              <li>Payment processors (e.g., Razorpay, PayPal)</li>
              <li>Analytics providers (e.g., Google Analytics)</li>
              <li>LinkedIn, contact forms, or freelance platforms (when you reach out to us)</li>
            </ul>
          </div>

          <h2 className="section-heading">3. How We Use Your Information</h2>
          <p>
            We use the data collected for specific and legitimate purposes, including:
          </p>
          <ul>
            <li>To respond to your inquiries and proposals</li>
            <li>To communicate about our services and offers</li>
            <li>To carry out contractual obligations (e.g., billing, reporting)</li>
            <li>To improve our website experience and content</li>
            <li>To personalize services and recommendations</li>
            <li>To comply with legal and regulatory requirements</li>
            <li>To protect our legal rights, business operations, or other users from fraud, abuse, or harm</li>
          </ul>
          <p className="highlight-note">
            We do not sell or rent your personal information to third parties for marketing purposes.
          </p>

          <h2 className="section-heading">4. Cookies & Tracking Technologies</h2>
          <p>
            Our website uses cookies and similar tracking tools (like pixels and tags) to improve performance and user experience.
          </p>
          <div className="sub-section">
            <h3>What Are Cookies?</h3>
            <p>
              Cookies are small data files stored on your device that help websites remember your preferences and behavior.
            </p>
          </div>
          <div className="sub-section">
            <h3>We Use Cookies To:</h3>
            <ul>
              <li>Remember user preferences</li>
              <li>Analyze website traffic via tools like Google Analytics</li>
              <li>Help with form submissions and project estimation tools</li>
              <li>Track conversion from ads or campaigns</li>
            </ul>
            <p>
              You can control cookies via your browser settings and delete them at any time.
            </p>
          </div>

          <h2 className="section-heading">5. Legal Basis for Data Processing (For EU/EEA Users – GDPR)</h2>
          <p>
            If you are located in the European Union (EU) or European Economic Area (EEA), we only process your personal data when we have a legal basis to do so, such as:
          </p>
          <ul>
            <li><strong>Consent:</strong> You’ve given clear permission to process your data.</li>
            <li><strong>Contractual necessity:</strong> We need your data to fulfill a contract.</li>
            <li><strong>Legal obligation:</strong> We are legally required to process your data.</li>
            <li><strong>Legitimate interests:</strong> We have a business reason to use your data in a way that does not override your rights.</li>
          </ul>

          <h2 className="section-heading">6. How We Share Your Information</h2>
          <p>
            We may share your personal information with:
          </p>
          <ul>
            <li>Our internal team (designers, developers, managers) under strict confidentiality</li>
            <li>Service providers such as:
              <ul>
                <li>Hosting platforms (e.g., Hostinger, AWS)</li>
                <li>Payment gateways (e.g., Razorpay, PayPal)</li>
                <li>Communication tools (e.g., Gmail, Slack, WhatsApp)</li>
              </ul>
            </li>
            <li>Legal authorities if required to comply with laws or respond to lawful requests</li>
            <li>Business acquirers in the case of a merger, acquisition, or sale (you’ll be notified in such cases)</li>
          </ul>
          <p>
            We do not share your data with advertisers or third parties unrelated to our business services.
          </p>

          <h2 className="section-heading">7. How We Store & Secure Your Data</h2>
          <p>
            We take data security seriously and use appropriate technical and organizational measures to protect your information from loss, misuse, unauthorized access, disclosure, or destruction.
          </p>
          <p>Measures include:</p>
          <ul>
            <li>SSL encryption on our website</li>
            <li>Two-factor authentication for internal tools</li>
            <li>Secure file sharing (via encrypted drives or internal storage)</li>
            <li>Access restrictions for project teams</li>
            <li>Regular backups and data audits</li>
          </ul>
          <p>
            However, no system can guarantee 100% security, especially when transmitted over the Internet. You use our services at your own risk.
          </p>

          <h2 className="section-heading">8. Data Retention – How Long We Keep Your Information</h2>
          <p>
            We retain your data only for as long as necessary for the purposes outlined in this policy, including:
          </p>
          <ul>
            <li>During the course of a project</li>
            <li>For support and legal documentation</li>
            <li>For financial compliance and audit records</li>
          </ul>
          <p>We typically retain:</p>
          <ul>
            <li>Inactive client communication for 12–24 months</li>
            <li>Payment and tax-related records for up to 7 years (as per law)</li>
            <li>Website analytics and logs for up to 12 months</li>
          </ul>
          <p>
            If you request deletion of your data, we will fulfill it subject to legal and contractual limitations.
          </p>

          <h2 className="section-heading">9. Your Rights Over Your Data</h2>
          <p>
            Depending on your location, you may have the right to:
          </p>
          <ul>
            <li><strong>Access</strong> the personal data we hold about you</li>
            <li><strong>Correct</strong> inaccurate or outdated data</li>
            <li><strong>Request deletion</strong> ("Right to be Forgotten")</li>
            <li><strong>Object</strong> to processing or withdraw consent</li>
            <li><strong>Restrict</strong> how we use your data</li>
            <li><strong>Port</strong> your data to another service provider</li>
            <li><strong>Complain</strong> to a data protection authority (if based in EU/UK)</li>
          </ul>
          <p>
            To exercise these rights, please email: <a href="mailto:privacy@jayaris.com">privacy@jayaris.com</a> or use our website contact form.
          </p>

          <h2 className="section-heading">10. Data Transfers Across Borders</h2>
          <p>
            As we operate globally, your data may be transferred to and stored in countries outside your own. For example, if you are based in Europe, your data may be processed by our Indian team or stored on global cloud servers.
          </p>
          <p>
            We ensure appropriate safeguards (standard contractual clauses, encryption, access control) to protect your data wherever it is handled.
          </p>

          <h2 className="section-heading">11. Children's Privacy</h2>
          <p>
            Our services are not directed to anyone under the age of 16. We do not knowingly collect data from children. If we learn that a child under 16 has submitted personal information, we will take appropriate action to delete it promptly.
          </p>

          <h2 className="section-heading">12. Third-Party Links</h2>
          <p>
            Our website may contain links to other websites (e.g., blog articles, tools, client websites). We are not responsible for the privacy practices of these external websites. We encourage you to review their privacy policies before submitting personal information.
          </p>

          <h2 className="section-heading">13. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect new practices, legal changes, or company developments. When we do, we will update the "Last Updated" date at the top of this page.
          </p>
          <p>
            Major changes will be notified via email (if you’re a client) or via website banner/notification.
          </p>

          <h2 className="section-heading">14. How to Contact Us</h2>
          <div className="contact-info">
            <p>For any privacy-related questions, data access requests, or complaints, please reach out to:</p>
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

export default PrivacyPolicy;