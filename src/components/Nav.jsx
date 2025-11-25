import React, { useState } from 'react';
import { Link } from "react-router";
import { useLocation } from "react-router";
const Nav = () => {

    const location = useLocation();

        return (
            <header>
                <nav class="bg-blue-300 w-full pt-2">
                    <ul class="mb-3">
                        <li class="inline text-4xl hover:text-pink-500" >
                            <Link to='/' className={` ${location.pathname === '/' ? 'underline' : ''}`}> Home </Link> 
                        </li>
                        <li class="inline text-4xl hover:text-pink-500">
                            <Link to='/form' className={` ${location.pathname === '/form' ? 'underline' : ''}`}> Contact </Link>
                        </li>
                        <li class="inline text-4xl hover:text-pink-500">
                            <Link to="/gallery" className={` ${location.pathname === '/gallery' ? 'underline' : ''}`}> Gallery </Link>
                        </li>
                        <li class="inline text-4xl hover:text-pink-500">
                            <Link to="/projects" className={` ${location.pathname === '/projects' ? 'underline' : ''}`}> Projects </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
}

export default Nav;