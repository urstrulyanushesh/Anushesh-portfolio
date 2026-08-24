import React from 'react';
import { skills } from '../../store/slices/projectsData';
import './Skills.css';

const Skills = () => (
  <section className="skills-section" id="skills">
    <div className="container skills-inner">
      <div className="skills-deco">
        <div className="dot-grid" />
        <div className="sq sq1" />
        <div className="dot-grid" />
        <div className="sq sq2" />
      </div>
      <div className="skills-content">
        <div className="section-tag">#skills</div>
        <div className="skills-grid">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="skill-category">
              <h4 className="skill-cat-title">{cat}</h4>
              <p className="skill-items">{items.join(' ')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
