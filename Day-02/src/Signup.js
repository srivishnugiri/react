import React from 'react'
import './sign.css'
// import bgvideo from '../asscts/signup.mp4';
// import bgimg from '../asscts/signup.jpg';
// import { Link  } from 'react-router-dom';
export default function Signuppage()
{
    return(
        <section id='signup'>

            <div className="register">
                <div className="col-1">
                    <h2  > Sign Up</h2>
                    <span>Register Here</span>
                    <form id='form' className="flex flex-col">
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <input type="password" placeholder="confirm password"/>
                    <input type="text" placeholder="Mobile number"/>
                    <button className="btn"><a href='#portfolio'>Sign Up</a></button>
                    <span>
                        Already have an account? <a href='#signin'>Login</a>
                    </span>
                    </form>
                </div>
               
    
                
                    </div>
                    </section>
                    
                


                



    )
}
