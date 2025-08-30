// AboutUs.tsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>We are a company that values excellence, innovation, and customer satisfaction.</p>

      <div className="company-info">
        <div className="info-item">
          <h2>Our Mission</h2>
          <p>Our mission is to provide top-quality services to meet the needs of our clients, focusing on efficiency and customer-centric solutions.</p>
        </div>
        <div className="info-item">
          <h2>Our Values</h2>
          <p>Integrity, excellence, and innovation are the core values that drive everything we do at our company.</p>
        </div>
        <div className="info-item">
          <h2>Contact Us</h2>
          <p>If you want to get in touch, please reach out to our support team via email or through our contact form.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
