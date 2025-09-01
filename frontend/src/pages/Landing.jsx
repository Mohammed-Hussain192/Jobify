import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/landing.css';

const Landing = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="jobify-landing">
      {/* Enhanced Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <span>Jobify</span>
          </div>
          
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#jobs">Jobs</a></li>
            <li><a href="#companies">Companies</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          
          <div className="nav-buttons">
            <button className="login-btn">Login</button>
            <button className="register-btn">Register</button>
          </div>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your First Job <span className="highlight">Starts Here</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover opportunities tailored for fresh graduates and kickstart your career journey with Jobify
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-buttons"
          >
            <button className="cta-btn">Find Your Dream Job</button>
            <button className="cta-secondary">How It Works</button>
          </motion.div>
        </div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="Job interview" 
          />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <motion.div 
            className="stats-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div className="stat-item" variants={fadeIn}>
              <h3>10,000+</h3>
              <p>Jobs Available</p>
            </motion.div>
            <motion.div className="stat-item" variants={fadeIn}>
              <h3>5,000+</h3>
              <p>Companies Hiring</p>
            </motion.div>
            <motion.div className="stat-item" variants={fadeIn}>
              <h3>50,000+</h3>
              <p>Successful Hires</p>
            </motion.div>
            <motion.div className="stat-item" variants={fadeIn}>
              <h3>95%</h3>
              <p>Satisfaction Rate</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div 
            className="about-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div className="about-text" variants={fadeIn}>
              <h2>About Jobify</h2>
              <p>
                Jobify is a dedicated platform for fresh graduates and entry-level professionals 
                to find their first career opportunities. We bridge the gap between talented 
                newcomers and innovative companies looking for fresh perspectives.
              </p>
              <p>
                Our mission is to simplify the job search process for recent graduates by 
                providing tailored opportunities, resources, and guidance to help launch 
                successful careers.
              </p>
              <ul className="about-features">
                <li>Personalized job recommendations</li>
                <li>Resume building tools</li>
                <li>Interview preparation resources</li>
                <li>Career counseling services</li>
              </ul>
            </motion.div>
            <motion.div className="about-image" variants={fadeIn}>
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                alt="Team meeting" 
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="resources" className="features">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Jobify?
          </motion.h2>
          <motion.div 
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div className="feature-card" variants={fadeIn} whileHover={{ y: -10 }}>
              <div className="feature-icon">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="One-click apply" 
                />
              </div>
              <h3>One-Click Apply</h3>
              <p>Apply to multiple jobs with a single click using your standardized profile.</p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeIn} whileHover={{ y: -10 }}>
              <div className="feature-icon">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Internships" 
                />
              </div>
              <h3>Internships for Freshers</h3>
              <p>Gain valuable experience with internships specifically designed for students and recent graduates.</p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeIn} whileHover={{ y: -10 }}>
              <div className="feature-icon">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Career growth" 
                />
              </div>
              <h3>Career Kickstart</h3>
              <p>Access resources, workshops, and mentorship programs to launch your career successfully.</p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeIn} whileHover={{ y: -10 }}>
              <div className="feature-icon">
                <img 
                  src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Skill assessment" 
                />
              </div>
              <h3>Skill Assessment</h3>
              <p>Evaluate and showcase your skills with our comprehensive assessment tools.</p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeIn} whileHover={{ y: -10 }}>
              <div className="feature-icon">
                <img 
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" 
                  alt="Company matching" 
                />
              </div>
              <h3>Company Matching</h3>
              <p>Get matched with companies that align with your skills, values, and career goals.</p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeIn} whileHover={{ y: -10 }}>
              <div className="feature-icon">
                <img 
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1178&q=80" 
                  alt="Mobile friendly" 
                />
              </div>
              <h3>Mobile Friendly</h3>
              <p>Search and apply for jobs on the go with our fully responsive platform.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Success Stories
          </motion.h2>
          <motion.div 
            className="testimonials-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div className="testimonial-card" variants={fadeIn}>
              <div className="testimonial-content">
                <p>"Jobify helped me land my dream job right after graduation. The one-click apply feature saved me so much time!"</p>
              </div>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Sarah M." />
                <div>
                  <h4>Sarah M.</h4>
                  <p>Software Developer at TechCorp</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="testimonial-card" variants={fadeIn}>
              <div className="testimonial-content">
                <p>"The career resources and interview prep materials were invaluable. I felt completely prepared for my interviews."</p>
              </div>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="James L." />
                <div>
                  <h4>James L.</h4>
                  <p>Marketing Associate at NextGen</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="testimonial-card" variants={fadeIn}>
              <div className="testimonial-content">
                <p>"I received multiple job offers within weeks of creating my profile. The matching algorithm is spot on!"</p>
              </div>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80" alt="Priya K." />
                <div>
                  <h4>Priya K.</h4>
                  <p>Data Analyst at DataWorks</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Launch Your Career?</h2>
            <p>Join thousands of fresh graduates who found their dream jobs through Jobify</p>
            <div className="cta-buttons">
              <button className="cta-primary">Create Your Profile</button>
              <button className="cta-secondary">Browse Jobs</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Jobify</h3>
              <p>Helping fresh graduates start their career journey with confidence and success.</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="footer-section">
              <h4>For Job Seekers</h4>
              <ul>
                <li><a href="#">Browse Jobs</a></li>
                <li><a href="#">Career Resources</a></li>
                <li><a href="#">Resume Builder</a></li>
                <li><a href="#">Interview Prep</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>For Employers</h4>
              <ul>
                <li><a href="#">Post a Job</a></li>
                <li><a href="#">Search Candidates</a></li>
                <li><a href="#">Pricing Plans</a></li>
                <li><a href="#">Employer Resources</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Us</h4>
              <p>Email: info@jobify.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Career Street, Job City</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 Jobify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;