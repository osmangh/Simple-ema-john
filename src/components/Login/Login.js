import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'
const Login = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id=""placeholder="Your Email" />
                    <br/>
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>New to ema john?<Link to="/register">Creat an Account</Link></p>
                <div>----------or----------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;