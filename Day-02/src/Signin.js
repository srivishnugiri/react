import React from 'react'
import './sign.css'
// import bgimg from '../asscts/signin.jpg';
// import bgvideo from '../asscts/signin.mp4';
// import { Link } from 'react-router-dom';

export default function Signinpage()
{
    return(
        <section id='signin'>

            <div className="register">
                <div className="col-1">
                    <h2> Sign In</h2>
                    <span>Login Here</span>
                    <form id='form' className="flex flex-col">
                    <input type="text" placeholder="username"/>
                    <input type="text" placeholder="password"/>
                    <button className="btn">Login</button>
                    <span>
                        Don't have an account? <a href='#signup'>Create Account</a>
                    </span>
                    </form>
                </div>
               
    

                


                </div>
            </section>



    )
}