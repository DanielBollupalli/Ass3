import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <h1>CareNest</h1>
        <nav>
          <button>Home</button>
          <button>Login</button>
          <button>Sign Up</button>
        </nav>
      </header>

      {/* Landing Page Section */}
      <main className="landing">
        <h2>Welcome to CareNest</h2>
        <p>Your trusted platform for care and wellness.</p>

        {/* About Section */}
        <section className="about">
          <h3>We provide</h3>
          <p>
            CareNest is dedicated to providing top-tier healthcare solutions. We
            connect caregivers and patients in a seamless experience.
          </p>
        </section>

        {/* Services Section */}
        <section className="services">
          <h3>Our Services</h3>
          <ul>
            <li>24/7 Online Consultation</li>
            <li>Home Healthcare Assistance</li>
            <li>Medical Appointment Scheduling</li>
            <li>Wellness and Fitness Guidance</li>
          </ul>
        </section>

        {/* Call-to-Action Section */}
        <section className="cta">
          <h3>Get Started Today</h3>
          <button className="cta-button">Join Now</button>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 CareNest. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
