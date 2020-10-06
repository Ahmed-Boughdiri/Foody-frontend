import React from "react";
import "../layout/Login.css";
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

const Login = () =>{
    return(
        <div className="login">
            <div className="wrapper">
                <form className="form-signin z-depth-3">       
                    <h2 className="form-signin-heading">Please login</h2>
                    <input type="text" className="col s12 z-depth-0 input" name="username" placeholder="Email Address" />
                    <input type="password" className="col s12 z-depth-0 input" name="password" placeholder="Password"/>      
                    <label className="checkbox">
                        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
                    </label>
                    <button className="btn btn-block z-depth-0 form-btn" type="submit">Login</button>   
                </form>
            </div>
        </div>
    )
}

export default Login;