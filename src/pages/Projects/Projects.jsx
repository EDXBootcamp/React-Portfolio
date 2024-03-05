import React from 'react';
import Project from '../../components/Project/Project';
import { motion } from 'framer-motion';
import projectsData from '../../data/projects.json';
import './Projects.css';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container py-5"
    >
      <h1 className="mb-5">Projects</h1>
      <div className="row">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="col-md-4 mb-4"
          >
            <Project project={project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
