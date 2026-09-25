import React from 'react';
import './About.css';

const About = () => (
  <section className="about-section" id="about-me">
    <div className="container about-inner">
      <div className="about-text">
        <div className="section-tag">#about-me</div>
        <p className="about-p">Hello, I'm Anushesh Kariya Kangrahuwa Tharu!</p>
        <p className="about-p">
          I'm a Bachelor in Information Technology student based in Kathmandu, Nepal, with hands-on full-stack MERN internship experience.
        </p>
        <p className="about-p">
          I build responsive interfaces, secure RESTful APIs, and data-driven applications. I enjoy solving practical problems with clean, collaborative software.
        </p>
        <a href="#contacts" className="read-more-btn">Work with me -&gt;</a>
      </div>
      <div className="about-portrait">
        <div className="portrait-frame">
          <div className="portrait-dots portrait-dots-top" />
          <img className="portrait-photo" src="/assets/anushesh-about.jpg" alt="Anushesh checking his watch" />
          <div className="portrait-dots" />
        </div>
      </div>
    </div>
  </section>
);

export default About;
