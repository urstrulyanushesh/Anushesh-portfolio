import React from 'react';
import './Contacts.css';

const Contacts = () => (
  <section className="contacts-section" id="contacts">
    <div className="container contacts-inner">
      <div className="contacts-left">
        <div className="section-tag">#contacts</div>
        <p className="contacts-text">
          I'm open to software engineering roles, internships,<br />
          and collaborative projects. Have a question or an idea?<br />
          I'd be glad to hear from you.
        </p>
        <div className="contacts-dots" />
      </div>
      <div className="contacts-right">
        <div className="message-box">
          <span className="message-label">Message me here</span>
          <a href="mailto:anusheshkktharu@gmail.com" className="contact-item">
            <span className="contact-icon">✉</span>
            <span>anusheshkktharu@gmail.com</span>
          </a>
          <a href="tel:+9779860769015" className="contact-item">
            <span className="contact-icon">☎</span>
            <span>+977 9860769015</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contacts;
