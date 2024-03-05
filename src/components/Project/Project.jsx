import React from 'react';
import { motion } from 'framer-motion';

const Project = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="card h-100 shadow-sm project-card"
    >
      <img src={project.image} className="card-img-top" alt={project.title} />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <a href={project.demoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Demo</a>
          <a href={project.repoLink} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
