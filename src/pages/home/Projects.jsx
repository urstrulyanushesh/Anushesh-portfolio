import React from 'react';
import ProjectCard from '../../components/features/ProjectCard';
import { projects } from '../../store/slices/projectsData';
import './Projects.css';

const Projects = () => (
  <section className="projects-section" id="works">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">#projects</span>
        <a href="#works" className="view-all">View all ~~&gt;</a>
      </div>
      <div className="projects-grid">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  </section>
);

export default Projects;
