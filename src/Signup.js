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


// import React, { useState } from "react";
// import "./App.css";

// function Signup({ close, onSignup, setShowLogin }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     let newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
//     if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
//     if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch("https://project-server-1-s7bc.onrender.com/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to sign up. Please try again.");
//       }

//       const data = await response.json();
//       onSignup(data); // Optionally handle the response (e.g., store user data)
//       close(); // Close modal after successful signup
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }

//     if (!validate()) return;
//     onSignup(formData.name, formData.email, formData.password);
//     setFormData({ name: "", email: "", password: "", confirmPassword: "" }); // Clear form after submission
//   };

//   return (
//     <div className="modal-overlay" role="dialog" aria-labelledby="signup-title">
//       <div className="modal">
//         <button className="close-button" onClick={close}>×</button>
//         <h2>Sign Up</h2>
//         {error && <p className="error">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
//           <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
//           <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
//           <button type="submit" className="modal-button" disabled={loading}>
//             {loading ? "Signing Up..." : "Sign Up"}
//           </button>
// =======
//         <button className="close-button" onClick={close} aria-label="Close">×</button>
//         <h2 id="signup-title">Sign Up</h2>
//         <form onSubmit={handleSubmit} noValidate>
//           <label>
//             Name
//             <input type="text" name="name" placeholder="Enter your name" required value={formData.name} onChange={handleChange} autoFocus />
//             {errors.name && <span className="error">{errors.name}</span>}
//           </label>
//           <label>
//             Email
//             <input type="email" name="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} />
//             {errors.email && <span className="error">{errors.email}</span>}
//           </label>
//           <label>
//             Password
//             <input type="password" name="password" placeholder="Enter your password" required value={formData.password} onChange={handleChange} />
//             {errors.password && <span className="error">{errors.password}</span>}
//           </label>
//           <label>
//             Confirm Password
//             <input type="password" name="confirmPassword" placeholder="Confirm your password" required value={formData.confirmPassword} onChange={handleChange} />
//             {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
//           </label>
//           <button type="submit" className="modal-button">Sign Up</button>
//         </form>
//         <p>
//           Already have an account? <span className="link" onClick={() => { close(); setShowLogin(true); }}>Login</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;
