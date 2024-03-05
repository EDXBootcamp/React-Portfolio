import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="content"
          >
            <h1 className="mb-4">Hello, I'm [Your Name]</h1>
            <p className="lead mb-4">A Creative Developer Ready to Bring Your Ideas to Life</p>
            <p className="mb-4">I specialize in building modern and interactive web applications that captivate users and enhance their online experience. From concept to execution, I'm passionate about creating innovative solutions that make a difference.</p>
            <div className="cta">
              <button className="btn btn-primary me-3">View Projects</button>
              <button className="btn btn-outline-primary">Contact Me</button>
            </div>
          </motion.div>
        </div>
        <div className="col-md-6">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="your-avatar.jpg"
            alt="Your Name"
            className="img-fluid rounded-circle avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
