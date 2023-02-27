import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css'
import Google from '../Google/Google';

const Signin = () => {
    return (
        <div>
            <div className="form">
                <form>
                <h2 className='tag'>Log in</h2>
                <div className="input-container">
                    <label className='labeling'>Username </label>
                    <input className='input' placeholder='enter username' type="text" name="uname" required />
                </div>
                <div className="input-container">
                    <label className='labeling'>Password </label>
                    <input className='input' placeholder='enter a password' type="password" name="pass" required />
                </div>
                <button id='btn'>Log in</button>
                </form>
                <p>Forgot Password?</p>
                <p>Need an account? <Link className='connect' to='/home/signup'>Register</Link></p>
                <Google></Google>
            </div>
        </div>
    );
};

export default Signin;