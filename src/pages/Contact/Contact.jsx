import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Contact Me</h2>
          <p>Have a question or want to work together? Feel free to reach out to me using the form below or connect with me on social media.</p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Connect With Me</h2>
          <ul className="list-unstyled">
            <li><i className="bi bi-envelope me-2"></i><a href="mailto:youremail@example.com">youremail@example.com</a></li>
            <li><i className="bi bi-github me-2"></i><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><i className="bi bi-linkedin me-2"></i><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
