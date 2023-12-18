import React from 'react';
import logo from '../images/Logo.svg';

const Footer = () => {
    return(
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>

            <div>
            <h3>Important Links</h3>
            <ul>
                <li><a href='/home'>Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>

        <div>
            <h3>Contact</h3>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </div>

        <div>
            <h3>Social Media Links</h3>
            <ul>
                <li><a href='/facebook'>Facebook</a></li>
                <li><a href="/instagram">Instagram</a></li>
                <li><a href="/twitter">Twitter</a></li>
            </ul>
        </div>

    </section>
    </footer>
    );
};

export default Footer;