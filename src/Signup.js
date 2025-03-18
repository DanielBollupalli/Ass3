// import React, { useState } from "react";
// import "./App.css";

// function Signup({ close, onSignup, setShowLogin }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSignup(name, email, password);
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <button className="close-button" onClick={close}>×</button>
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
//           <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
//           <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
//           <button type="submit" className="modal-button">Sign Up</button>
//         </form>
//         <p>
//           Already have an account?{" "}
//           <span className="link" onClick={() => { close(); setShowLogin(true); }}>Login</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;


import React, { useState } from "react";
import "./App.css";

function Signup({ close, onSignup, setShowLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://project-server-1-s7bc.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to sign up. Please try again.");
      }

      const data = await response.json();
      onSignup(data); // Optionally handle the response (e.g., store user data)
      close(); // Close modal after successful signup
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={close}>×</button>
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="modal-button" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
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
