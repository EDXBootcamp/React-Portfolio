import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="card">
      <img src={project.image} className="card-img-top" alt={project.title} />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <a href={project.deployedLink} className="btn btn-primary me-2">View Project</a>
        <a href={project.githubLink} className="btn btn-secondary">View Code</a>
      </div>
    </div>
  );
};

export default Project;
