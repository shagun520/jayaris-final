// src/pages/TermsAndConditions.js
import React, { useEffect } from 'react';
import './TermsAndConditions.css';
import { Container } from 'react-bootstrap'; // Using react-bootstrap Container for centering
import Footer from './Footer';
import Navbar from './Navbar';
function TermsAndConditions() {
  // Optional: Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Use a constant for the date to easily update it
  const effectiveDate = "[July 14, 2025]"; // Placeholder: Update this date
  const lastUpdatedDate = "[July 14, 2025]"; // Placeholder: Update this date

  return (
    <>
    <Navbar/>
    <div className="terms-page-wrapper"> {/* Main wrapper for the gradient background */}
      <Container className="terms-content-container"> {/* React-Bootstrap Container for centered content */}
        <div className="terms-glass-card"> {/* The glass morphism effect card */}
          <h1>Terms and Conditions</h1>
          <p className="effective-dates">
            Effective From: {effectiveDate}<br/>
            Last Updated: {lastUpdatedDate}
          </p>
          <p>
            Welcome to the official website of Jayaris Solution Private Limited ("Jayaris", "we", "our", or "us"). These Terms and Conditions explain the rules and guidelines you agree to follow when you use our services, browse our website, or engage in a business relationship with us.
          </p>
          <p>
            Please read them carefully before you proceed. If you do not agree with these terms, you should not use our services.
          </p>

          <h2 className="section-heading">1. Who We Are</h2>
          <p>
            Jayaris Solution Private Limited is a digital-first company that specializes in building custom websites, mobile applications, and UI/UX interfaces. We offer scalable technology services to individuals, startups, and companies across the globe. Whether it's launching a brand-new website, developing a full-featured app, or modernizing a digital experience, we operate remotely with a global mindset and a commitment to high-quality results.
          </p>
          <p>
            We are legally registered in India and follow international standards in all our operations.
          </p>

          <h2 className="section-heading">2. What These Terms Cover</h2>
          <p>
            These Terms cover everything related to your interaction with Jayaris, including:
          </p>
          <ul>
            <li>How we work with clients,</li>
            <li>What to expect from our services,</li>
            <li>Payment policies,</li>
            <li>Your rights and responsibilities,</li>
            <li>Our legal limitations and data protection promises.</li>
          </ul>
          <p>
            We may update these Terms from time to time. If we do, we’ll post the updated version on our website. You’re encouraged to check this page regularly to stay informed.
          </p>

          <h2 className="section-heading">3. Starting a Project With Us</h2>
          <p>
            When you decide to work with Jayaris, we follow a structured onboarding process:
          </p>
          <ul>
            <li>We begin with a consultation or proposal based on your needs.</li>
            <li>After that, we send a clear agreement (via email or PDF) outlining the project scope, costs, timeline, and delivery expectations.</li>
            <li>Once you accept the proposal and make the initial payment, your project officially begins.</li>
          </ul>
          <p>
            We believe in transparency from day one and ensure that all deliverables are discussed and approved before we start working.
          </p>

          <h2 className="section-heading">4. Our Services – What We Offer</h2>
          <p>
            At Jayaris, we provide a wide range of digital solutions tailored to your goals. These include:
          </p>
          <div className="service-list">
            <h3>Website Design & Development</h3>
            <p>– Whether static or dynamic, portfolio or e-commerce, we build websites that match your brand.</p>
            <h3>App Development</h3>
            <p>– We build Android and iOS mobile apps from scratch, including hybrid solutions using technologies like Flutter and React Native.</p>
            <h3>UI/UX Design</h3>
            <p>– We craft beautiful user interfaces, wireframes, prototypes, and responsive designs.</p>
            <h3>Custom Software</h3>
            <p>– Internal dashboards, booking systems, admin panels, CRMs, and more.</p>
            <h3>Technical Consultation</h3>
            <p>– Guidance on domains, hosting, tools, and how to make your tech stack scalable.</p>
            <h3>Ongoing Support</h3>
            <p>– Optional long-term maintenance, updates, bug fixes, and new feature additions.</p>
          </div>
          <p>
            Each service will be executed as per the mutually agreed plan and pricing before the project begins.
          </p>

          <h2 className="section-heading">5. Project Timeline & Delivery Process</h2>
          <p>
            Once a project begins:
          </p>
          <ul>
            <li>We break it down into phases or milestones (e.g., design phase, development phase, testing, deployment).</li>
            <li>You'll receive regular progress updates and preview links.</li>
            <li>We follow a feedback-based system where we move to the next stage only after your review and approval.</li>
          </ul>
          <p>
            While we commit to agreed timelines, your timely feedback and information are crucial. Delays from your side (e.g., late content, approvals, or payments) may affect final delivery dates. If unforeseen technical or third-party issues occur, we’ll notify you and resolve them as quickly as possible.
          </p>

          <h2 className="section-heading">6. What We Expect From You (Client Responsibilities)</h2>
          <p>
            For a smooth and successful collaboration, you agree to:
          </p>
          <ul>
            <li>Provide all required information and files (content, logos, references) on time.</li>
            <li>Review the work and give feedback within the set timeframe.</li>
            <li>Appoint one single person from your side for coordination.</li>
            <li>Avoid any unlawful, harmful, or unethical use of our services or platforms.</li>
          </ul>
          <p>
            You are also responsible for the legality of the content you provide. If you share copyrighted images, software, or data that you don’t own or have permission for, you will be held accountable—not Jayaris.
          </p>

          <h2 className="section-heading">7. Who Owns the Work We Create</h2>
          <p>
            This section explains intellectual property ownership:
          </p>
          <ul>
            <li>Until the final payment is made, all work (designs, code, documentation) remains the property of Jayaris.</li>
            <li>Once you've paid in full, you receive full rights to use the work for personal, commercial, or internal use.</li>
            <li>However, you may not resell our code, reuse our backend structure in other projects, or give it to third parties for replication unless discussed in writing.</li>
            <li>Jayaris retains the right to showcase completed projects in its portfolio, unless you request confidentiality through a formal NDA.</li>
          </ul>

          <h2 className="section-heading">8. Payments – How They Work</h2>
          <p>
            We offer simple and transparent payment models:
          </p>
          <ul>
            <li>Fixed-Price Projects: Payment is split into milestones (e.g., 40% upfront, 30% midway, 30% on delivery).</li>
            <li>Hourly or Monthly Work: Time-tracked billing sent weekly or monthly, based on actual hours worked.</li>
            <li>Subscriptions: For ongoing support, clients can choose monthly retainers.</li>
          </ul>
          <p>
            All payments must be completed within 7 working days of receiving the invoice. We accept bank transfers, UPI, Razorpay, PayPal, and Wise.
          </p>
          <p className="warning-note">
            ⚠️ No refunds are provided for services that have already been delivered or started, unless there’s a documented fault entirely on our side.
          </p>

          <h2 className="section-heading">9. Revisions and Edits</h2>
          <p>
            We understand that creative and development work may need revisions. Here’s how we handle them:
          </p>
          <ul>
            <li>You get two rounds of free revisions per deliverable (e.g., homepage design, app screen).</li>
            <li>Revisions must be related to the original brief. If you change your mind or want to add features later, that would be considered a new request and may cost extra.</li>
            <li>Additional revisions beyond the included two rounds will be charged at a pre-agreed rate or hourly fee.</li>
          </ul>
          <p>
            Revisions are expected to be requested within 7 days of each milestone delivery.
          </p>

          <h2 className="section-heading">10. Keeping Things Private (Confidentiality & Data Security)</h2>
          <p>
            Jayaris respects your privacy and protects your business data.
          </p>
          <p>We ensure:</p>
          <ul>
            <li>All credentials, code, content, and documents you share are kept strictly confidential.</li>
            <li>Access is limited only to the relevant members of our internal team.</li>
            <li>We never share or sell your information to third parties.</li>
          </ul>
          <p>
            In turn, we ask that you do not share any internal tools, methods, or project-related insights of Jayaris with others unless authorized in writing.
          </p>

          <h2 className="section-heading">11. Tools We Use – Third-Party Dependencies</h2>
          <p>
            To deliver your project, we may use third-party tools or software like:
          </p>
          <ul>
            <li>APIs (e.g., Google Maps, Stripe),</li>
            <li>CMS plugins (e.g., WordPress add-ons),</li>
            <li>Hosting platforms (e.g., Hostinger, GoDaddy).</li>
          </ul>
          <p>
            While we install, configure, and test them carefully, we are not responsible for:
          </p>
          <ul>
            <li>Their long-term maintenance,</li>
            <li>Any future changes in their terms or pricing,</li>
            <li>Downtime or bugs originating from those services.</li>
          </ul>
          <p>
            If any plugin or third-party feature needs renewal or licensing fees, that cost will be borne by the client.
          </p>

          <h2 className="section-heading">12. Support & Maintenance After Project Completion</h2>
          <p>
            Once your website or app is delivered, we provide a free support period (usually 15 to 30 days) during which we fix bugs and answer queries.
          </p>
          <p>Beyond that:</p>
          <ul>
            <li>You can subscribe to a paid monthly maintenance plan.</li>
            <li>This includes security updates, uptime monitoring, small improvements, and priority support.</li>
          </ul>
          <p>
            Please note: support does not cover redesigns, major feature changes, or issues arising from misuse or third-party tampering.
          </p>

          <h2 className="section-heading">13. When Projects Get Cancelled (Termination Policy)</h2>
          <p>
            A project may be cancelled if:
          </p>
          <ul>
            <li>Either party gives a 7-day written notice;</li>
            <li>The other party violates a major part of the agreement (e.g., delayed payment, poor communication);</li>
            <li>Both parties mutually agree that it’s best to discontinue.</li>
          </ul>
          <p>In case of termination:</p>
          <ul>
            <li>Work completed until that point will be delivered upon payment.</li>
            <li>Jayaris reserves the right to withhold further access to the platform or files until dues are cleared.</li>
          </ul>
          <p>
            No refunds are provided for partially completed work unless discussed in writing.
          </p>

          <h2 className="section-heading">14. What We’re Not Responsible For (Limitations of Liability)</h2>
          <p>
            While we strive to deliver excellence, we are not liable for:
          </p>
          <ul>
            <li>Loss of business or profit caused by delays or bugs,</li>
            <li>Issues that occur due to third-party services or hosting problems,</li>
            <li>Client-side misconfigurations after handover,</li>
            <li>Any legal consequences resulting from content provided by the client.</li>
          </ul>
          <p>
            Our total liability under any agreement is limited to the total amount you have paid us for the service in question.
          </p>

          <h2 className="section-heading">15. In Case of Emergencies (Force Majeure)</h2>
          <p>
            Jayaris is not responsible for delays or failures caused by events beyond our control, including:
          </p>
          <ul>
            <li>Internet outages,</li>
            <li>Natural disasters (earthquakes, floods),</li>
            <li>Government restrictions or lockdowns,</li>
            <li>Cyberattacks,</li>
            <li>Global pandemics or health emergencies.</li>
          </ul>
          <p>
            In such cases, we will notify you as early as possible and resume work as soon as conditions allow.
          </p>

          <h2 className="section-heading">16. Legal Matters (Jurisdiction & Applicable Law)</h2>
          <p>
            These Terms are governed by Indian law. Any disputes that arise between you and Jayaris will be handled by the courts located in Indore, Madhya Pradesh, India.
          </p>
          <p>
            We encourage resolving any issues through discussion and mutual understanding before initiating legal action.
          </p>

          <h2 className="section-heading">17. How to Contact Us</h2>
          <div className="contact-info">
            <p>If you have any questions, complaints, or feedback about these Terms, reach out to us:</p>
            <p><strong>Jayaris Solution Private Limited</strong></p>
            <p>
              📍 314/16 Nanda Nagar, Indore – 452011, Madhya Pradesh, India
            </p>
            <p>
              📞 +91-9981442233 / +91-8516998877
            </p>
            <p>
              📧 Email: <a href="mailto:infojayaris@outlook.com">infojayaris@outlook.com</a>
            </p>
            <p>
              🌐 Website: <a href="https://www.jayaris.com" target="_blank" rel="noopener noreferrer">www.jayaris.com</a>
            </p>
          </div>

        </div> {/* End terms-glass-card */}
      </Container> {/* End terms-content-container */}
    </div> 
    <Footer />
    </>
  );
}

export default TermsAndConditions;