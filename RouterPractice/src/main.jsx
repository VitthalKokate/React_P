import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Layout from './Componets/Layout/Layout.jsx'
import Contactus from './Componets/Contactus/Contactus.jsx'
import Login from './Componets/Login/Login.jsx'
import Home from './Componets/Home/home.jsx'
import About from './Componets/About/About.jsx'

const route = createBrowserRouter([
  {
    path:'/',
    element :<Layout />,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"contactus",
        element:<Contactus />
      },
      {
        path:"login",
        element:<Login />
      },
      {
        path:"about",
        element:<About />
      },
    ]

  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {route} />
  </StrictMode>,
)
