import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => (
  <div className="project-card" style={{ '--card-accent': project.color }}>
    <div className="card-preview">
      <img src={project.image} alt={`${project.title} preview`} />
    </div>
    <div className="card-tags">
      {project.tags.slice(0, 8).map(t => (
        <span key={t} className="tag">{t}</span>
      ))}
    </div>
    <div className="card-body">
      <h3 className="card-title">{project.title}</h3>
      <p className="card-desc">{project.desc}</p>
      <div className="card-links">
        {project.links.live && (
          <a href={project.links.live} className="card-link">Live &lt;~&gt;</a>
        )}
        {project.links.cached && (
          <a href={project.links.cached} className="card-link secondary">Cached &gt;=</a>
        )}
        {project.links.code && (
          <a href={project.links.code} target="_blank" rel="noreferrer" className="card-link">GitHub &lt;~&gt;</a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
