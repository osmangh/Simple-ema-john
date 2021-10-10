import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register:Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter Your Email "/>
                    <br />
                    <input type="password" name="" id=""placeholder="Password" /><br />
                    <input type="password" name="" id="" placeholder="Re-Enter-Pasword"/><br />
                    <input type="submit" value="submit" placeholder="submit"/>
                </form>
                <p>Already have an Account?<Link to='/login'>login</Link></p>
                <div>----------or--------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;