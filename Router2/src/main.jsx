import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import ContactForm from './Components/Contact/ContactForm.jsx'
import About from './Components/About/About.jsx'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      
      
      <Route path='/' element = {<Home/>}/>
      <Route path='ContactForm' element = {<ContactForm/>}/>
      <Route path='about' element ={<About/>}/>

    </Route>
  )
) 

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
