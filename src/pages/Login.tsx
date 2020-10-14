import React, { useState } from "react";
import "../layout/Login.css";
import validate from "../global/Validate";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<any>("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validate(username, email, password)) {
      return setError(validate(username, email, password));
    }
    setError("");
  };
  return (
    <div className="login">
      <div className="wrapper">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h2 className="form-signin-heading">Please login</h2>
          <input
            type="text"
            className="input"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            className="input"
            name="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="form-btn" type="submit">
            Login
          </button>
          <p className="error">{error}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
