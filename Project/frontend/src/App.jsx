import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Register from './Pages/Register/Register'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './Pages/Layout'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children:[
      {
        path: "/",
        Component: Home,
      }
    ],
    

  },
  {
    path: "/register",
    Component: Register 
  },
  {
    path: "/login",
    Component: Login
  }
  
]);
  return  <RouterProvider router={router} />;
}

export default App
