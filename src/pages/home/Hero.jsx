import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <section className="hero" id="home">
      <div ref={cursorRef} className="custom-cursor" />
      <div className="container hero-inner">
        <div className="hero-content">
          <h2 className="hero-title">
            <strong> Hello, world. I am — </strong> <br />
            Anushesh, 
            <span style={{ textDecoration: 'none' }} className="accent-text">Full-stack <br /> developer </span>
         
          <span><br /> &amp;  BIT Student</span>
          </h2>
          <p className="hero-sub">
            BIT student and MERN stack developer focused on<br />scalable applications, APIs, and thoughtful UX
          </p>
          <a href="#contacts" className="cta-btn">Let's connect</a>
        </div>
        <div className="hero-art">
          <div className="bracket-frame">
            <div className="hero-dots hero-dots-top" /> 
            <img className="hero-photo" src="/assets/anushesh-hero.jpg" alt="Anushesh in a suit" />
            <div className="hero-dots hero-dots-bottom" />
          </div>
          <div className="status-bar">
            <span className="status-dot" />
            Available for <strong>software engineering opportunities</strong>
          </div>
        </div>
      </div>
      <div className="hero-quote">
        <div className="quote-mark open">"</div>
        <p className="quote-text">With great power comes great electricity bill</p>
        <div className="quote-author">- Mr. Who</div>
        <div className="quote-mark close">"</div>
      </div>
    </section>
  );
};

export default Hero;
