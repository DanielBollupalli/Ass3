import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  const handleLogin = (identifier, password) => {
    const existingUser = users.find((u) => (u.email === identifier || u.name === identifier) && u.password === password);
    if (existingUser) {
      setIsLoggedIn(true);
      setUser(existingUser);
      setShowLogin(false);
      return true;
    } else {
      alert("Incorrect email/username or password.");
      return false;
    }
  };

  const handleSignup = (name, email, password) => {
    const newUser = { name, email, password };
    setUsers([...users, newUser]);
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setShowProfile(false);
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    setUsers(users.map((u) => (u.email === updatedUser.email ? updatedUser : u)));
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <h1>CareNest</h1>
        <nav>
          <button onClick={() => { setShowLogin(false); setShowSignup(false); setShowProfile(false); }}>Home</button>
          {isLoggedIn ? (
            <>
              <button onClick={handleLogout}>Logout</button>
              <button className="profile-button" onClick={() => { setShowProfile(true); }}>
                {user.name.charAt(0).toUpperCase()}
              </button>
            </>
          ) : (
            <>
              <button onClick={() => { setShowLogin(true); setShowSignup(false); }}>Login</button>
              <button onClick={() => { setShowSignup(true); setShowLogin(false); }}>Sign Up</button>
            </>
          )}
        </nav>
      </header>

      {/* Landing Page Section */}
      <main className="landing">
        <h2>Welcome to CareNest</h2>
        <p>Your trusted platform for care and wellness.</p>

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
        {!isLoggedIn && (
          <section className="cta">
            <button className="cta-button" onClick={() => setShowSignup(true)}>Join Now</button>
          </section>
        )}
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 CareNest. All Rights Reserved.</p>
      </footer>

      {/* Modals */}
      {showLogin && <Login close={() => setShowLogin(false)} onLogin={handleLogin} setShowSignup={setShowSignup} />}
      {showSignup && <Signup close={() => setShowSignup(false)} onSignup={handleSignup} setShowLogin={setShowLogin} />}
      {showProfile && isLoggedIn && <Profile user={user} close={() => setShowProfile(false)} updateUser={updateUser} />}
    </div>
  );
}

export default App;
