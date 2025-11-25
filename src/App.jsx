import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: '/form',
    element: <Form/>
  },
  {
    path: '/gallery',
    element: <Gallery/>
  },
  {
    path: '/projects',
    element: <Projects/>
  }
]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
