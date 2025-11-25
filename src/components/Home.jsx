import React, { useState } from 'react';
import { Routes } from "react-router";
import Nav from './Nav';
import Footer from './Footer';
import profile from './../assets/janice.jpg';

const Home = () => {
        return (
            <div>
                <Nav/>
                <main>
                    <img src={profile} class="w-80 block m-auto mt-20"></img>
                    <div class="">
                        <p class="text-xl mt-20"> Hello! Here is a react application built using ReactRouter and react-image-gallery. </p>
                        <p class="text-xl mt-20"> I have 3 years experience as a front end developer working with Vue, and am currently learning React with Step8up. </p>
                    </div>
                </main>
                <Footer/>
            </div>
        )
}

export default Home;