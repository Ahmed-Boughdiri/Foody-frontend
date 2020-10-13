import React from "react";
import "../layout/Login.css";

const SignUp = () =>{
    return(
        <div className="login">
            <div className="wrapper">
                <form className="form-signin z-depth-3">       
                    <h2 className="form-signin-heading">Create An Account</h2>
                    <input type="text" className="input" name="username" placeholder="Username" />
                    <input type="email" className="input" name="email" placeholder="Email Address" />
                    <input type="password" className="input" name="password" placeholder="Password"/>      
                    <button className="form-btn" type="submit">Sign Up</button>   
                </form>
            </div>
        </div>
    )
}

export default SignUp;
