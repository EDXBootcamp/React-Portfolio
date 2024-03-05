import React from 'react';

const Home = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <h1>Welcome to Your Portfolio</h1>
        <p>This is where you showcase your skills and projects to potential employers.</p>
        <p>Feel free to explore the projects I've worked on and get in touch if you have any inquiries.</p>
      </div>
      <div className="col-md-6">
        <img src="your-avatar.jpg" alt="Your Name" className="img-fluid rounded-circle" />
      </div>
    </div>
  );
};

export default Home;
