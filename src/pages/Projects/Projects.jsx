import React from 'react';
import Project from '../../components/Project/Project'; // Import the Project component
import projectsData from '../../data/projects.json'; // Import project data

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="row">
        {projectsData.map(project => (
          <div className="col-md-4 mb-3" key={project.title}>
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
