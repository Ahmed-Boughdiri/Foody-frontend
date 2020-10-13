import React from "react";
import "../layout/Login.css";

const Login = () =>{
    return(
        <div className="login">
            <div className="wrapper">
                <form className="form-signin z-depth-3">       
                    <h2 className="form-signin-heading">Please login</h2>
                    <input type="text" className="input" name="username" placeholder="Email Address" />
                    <input type="password" className="input" name="password" placeholder="Password"/>      
                    <button className="form-btn" type="submit">Login</button>   
                </form>
            </div>
        </div>
    )
}

export default Login;