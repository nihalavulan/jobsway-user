import React from 'react'
import './navbar.css'

function Navbar() {
    return (
        <div className="navbar">
           <div className="container nav-wrapper">
                <h3 className="logo">JobsWay.</h3>
                <div className="">
                    <a href="" className="login-btn">Log In</a>
                    <a href="" className="reg-btn">Register Now</a>
                </div>
           </div>
        </div>
    )
}

export default Navbar