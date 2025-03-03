import React from "react";
import "./App.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h2>Welcome to CareNest</h2>
        <p>Your trusted platform for care and wellness.</p>
      </section>

      <section className="about">
        <h3>We Provide</h3>
        <p>
          CareNest is dedicated to providing top-tier healthcare solutions. We
          connect caregivers and patients in a seamless experience.
        </p>
      </section>

      <section className="services">
        <h3>Our Services</h3>
        <ul>
          <li>24/7 Online Consultation</li>
          <li>Home Healthcare Assistance</li>
          <li>Medical Appointment Scheduling</li>
          <li>Wellness and Fitness Guidance</li>
        </ul>
      </section>

      <section className="cta">
        <h3>Get Started Today</h3>
        <button className="cta-button">Join Now</button>
      </section>
    </div>
  );
}

export default Home;
