import React, { useState } from "react";
import "./App.css";

function Signup({ close, onSignup, setShowLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSignup(formData.name, formData.email, formData.password);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" }); // Clear form after submission
  };

  return (
    <div className="modal-overlay" role="dialog" aria-labelledby="signup-title">
      <div className="modal">
        <button className="close-button" onClick={close} aria-label="Close">×</button>
        <h2 id="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit} noValidate>
          <label>
            Name
            <input type="text" name="name" placeholder="Enter your name" required value={formData.name} onChange={handleChange} autoFocus />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            Password
            <input type="password" name="password" placeholder="Enter your password" required value={formData.password} onChange={handleChange} />
            {errors.password && <span className="error">{errors.password}</span>}
          </label>
          <label>
            Confirm Password
            <input type="password" name="confirmPassword" placeholder="Confirm your password" required value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </label>
          <button type="submit" className="modal-button">Sign Up</button>
        </form>
        <p>
          Already have an account? <span className="link" onClick={() => { close(); setShowLogin(true); }}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
