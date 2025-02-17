import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ContactUs.css'; // Create this CSS file for styling

function ContactUs() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out:</p>
      <ul>
        <li>Email: support@example.com</li>
        <li>Phone: +1 (555) 123-4567</li>
        <li>Address: 1234 React Street, JS City</li>
      </ul>
    </div>
  );
}

export default ContactUs;
