import React from 'react';
import logo from '../images/Logo .svg'

function Nav(){
    return (
        <nav>
            <a href='/'>
            <img src={logo} alt='logo'/>
            </a>
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
                <li>
                    <a href="/menu">Menu</a>
                </li>
                <li>
                    <a href="/reservations">Reservations</a>
                </li>
                <li>
                    <a href="/order">Order Online</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;