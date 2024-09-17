// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import './HomePage.css'; // Importing CSS for specific page styling

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our College Clubs and Events</h1>
          <p>Explore, Engage, and Elevate your College Experience</p>
          <a href="/events" className="cta-button">Explore Events</a>
        </div>
      </section>

      <section className="clubs-section">
        <h2>Featured Clubs</h2>
        <div className="clubs-grid">
          <div className="club-card">
            <img src="./src/assets/club1.jpg" alt="Club 1" />
            <h3>GDSC</h3>
            <p>Capture moments and improve your photography skills with like-minded individuals.</p>
          </div>
          <div className="club-card">
            <img src="./src/assets/club2.jpg" alt="Club 2" />
            <h3>CSI</h3>
            <p>Build robots and participate in exciting competitions with fellow tech enthusiasts.</p>
          </div>
          <div className="club-card">
            <img src="./src/assets/club3.jpg" alt="Club 3" />
            <h3>Cosmos</h3>
            <p>Express your creativity and work on collaborative projects with peers.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Students Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>"Joining the Robotics Club was the best decision I made in college. The hands-on experience is invaluable!"</p>
            <span>- Alex D.</span>
          </div>
          <div className="testimonial">
            <p>"The Art & Craft Club helped me discover my passion for design, and I made some great friends along the way!"</p>
            <span>- Maya S.</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
