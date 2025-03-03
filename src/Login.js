import React, { useState } from "react";
import "./App.css";

function Login({ close, onLogin, setShowSignup }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [redirecting, setRedirecting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSuccess = onLogin(identifier, password);
    if (isSuccess) {
      setRedirecting(true);
      setTimeout(() => {
        close();
        setRedirecting(false);
      }, 3000);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={close}>×</button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or Username"
            required
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            disabled={redirecting}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={redirecting}
          />
          <button type="submit" className="modal-button" disabled={redirecting}>
            Login
          </button>
        </form>
        <p>
          <span className="link" onClick={() => alert('Please contact support to reset your password.')}>Forgot Username or Password?</span>
        </p>
        <p>
          Don't have an account?{" "}
          <span className="link" onClick={() => { close(); setShowSignup(true); }}>Sign Up</span>
        </p>
        {redirecting && (
          <div className="redirecting-popup">
            Redirecting to home...
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
