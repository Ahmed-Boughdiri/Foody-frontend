import React, { useState } from "react";
import "../layout/Login.css";
import validate from "../global/Validate";
import "../mobile/Register.css";
import { register } from "../global/Auth";

const SignUp:React.FC<any> = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPAssword] = useState("");
  const [error, setError] = useState<any>("");
  const handleSubmit = async(e: any) => {
    e.preventDefault();

    if (validate(username, email, password)) {
      return setError(validate(username, email, password));
    } else if (confirmPassword !== password) {
      return setError("Your Password And Confirm Password Does Not Match");
    }
    setError("");
    const res = await register(username,email,password);
    if(!res.error) {
      history.push("/search");
    } else {
      setError(res.error)
    }
    console.log(res)
  };
  return (
    <div className="login">
      <div className="wrapper">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h2 className="form-signin-heading">Create An Account</h2>
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
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPAssword(e.target.value)}
          />
          <button className="form-btn" type="submit">
            Sign Up
          </button>
          <p className="error">{error}</p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
