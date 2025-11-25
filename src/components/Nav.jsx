import React, { useState } from 'react';
import { Link } from "react-router";

const Nav = () => {
        return (
            <nav>
                <ul class="mb-3">
                    <li class="inline text-4xl">
                        <Link to='/'> Home </Link> 
                    </li>
                    <li class="inline text-4xl">
                        <Link to='/form'> Contact </Link>
                    </li>
                    <li class="inline text-4xl">
                        <Link to="/gallery"> Gallery </Link>
                    </li>
                </ul>
            </nav>
        )
}

export default Nav;