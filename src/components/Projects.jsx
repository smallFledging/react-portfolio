import React, { useState, useEffect } from 'react';
import { Routes } from "react-router";
import Nav from './Nav';
import Footer from './Footer';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    
    async function getData() {
        const username = "smallFledging";
        const url = `https://api.github.com/users/${username}/repos`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();

            setProjects(result);

        } catch (error) {
            console.error(error.message);
        }
    }
    
    useEffect(() => {
        getData();
    }, []);


        return (
            <div>
                <Nav/>
                <main class="mb-10">
                    <h1 class="text-3xl mt-10">List of public projects on Github</h1>
                    {projects.map((x, index) => (
                        <div class="mt-5" key={x.id}>
                            <li class="underline" key={x.id}><a href={x.html_url}>{x.name}</a></li>
                            <p key={index}>{x.description}</p>
                        </div>
                    ))}
                 </main>
                 <Footer/>
            </div>
            

        )
}

export default Projects;