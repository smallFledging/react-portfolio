import React, { useState } from 'react';
import { Routes } from "react-router";
import Nav from './Nav';
import profile from './../assets/janice.jpg';

const Footer = () => {
        return (
            <footer id="footer" class="text-center bg-blue-600 fixed w-full bottom-0">
                <h2 class="text-white">Contact details</h2>
                <a href="tel:+44123456789" class="text-decoration-none text-dark"><p>Number: +44123456789</p></a>
                <a href="mailto:testemail@email.com" class="text-decoration-none text-dark"><p>Email address: testemail@email.com</p></a>
            </footer>
        )
}

export default Footer;