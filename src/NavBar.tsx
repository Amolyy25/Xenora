import React from 'react'
import logo from './assets/logo.png'
import './NavBar.css'
import Button from './contactbtn'

const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-brand">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="navbar-nav">
                    <ul className="navbar-nav-list">
                        <li className="navbar-nav-item">
                            <a href="/" className="nodecoration mrr1    ">Accueil</a>
                            <a href="/" className="nodecoration mrr1">A propos</a>
                            <a href="/" className="nodecoration mrr1">Services</a>
                            <a href="/" className="nodecoration mrr1">Contact</a>
                            <a href="/" className="nodecoration mrr1">Faq</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar