import React, { useState } from 'react';
import { Routes } from "react-router";
import Nav from './Nav';
import Footer from './Footer';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import gunwharf from './../assets/gunwharf.jpg';
import sea from './../assets/sea.jpg';
import spiceIsland from './../assets/spice-island.jpg';
import spinnaker from './../assets/spinnaker.jpg';

const Gallery = () => {

    const images = [
    {
        original: gunwharf,
        description: "Gunwharf"
    },
    {
        original: sea,
        decscription: "Sea"
    },
    {
        original: spiceIsland,
        description: "Spice Island Pub"
    },
    {
        original: spinnaker,
        description: "Spinnaker Tower"
    }
    ];

        return (
            <div>
                <Nav/>
                <main>
                    <ImageGallery items={images} />
                </main>
                <Footer/>
            </div>
        )
}

export default Gallery;