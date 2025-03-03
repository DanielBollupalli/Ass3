import React, { useState } from "react";
import "./App.css";

function Signup({ close, onSignup, setShowLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(name, email, password);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={close}>×</button>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="modal-button">Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <span className="link" onClick={() => { close(); setShowLogin(true); }}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
