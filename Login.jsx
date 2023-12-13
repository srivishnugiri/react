import React, { useState } from 'react';
import './login.css';

import user_icon from './person.png';
import email_icon from "./email.png";
import password_icon from "./password.png";

const Login = () => {
    const [action, setAction] = useState("Login");

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action === "Login" ? "Login" : "Sign Up"}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action !== "Login" &&
                    <div className='inputs'>
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder="Name" />
                    </div>
                }
                <div className='inputs'>
                   <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email Id" />
                </div>
                <div className='inputs'>
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Login" &&
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            }
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    )
}

export default Login;
