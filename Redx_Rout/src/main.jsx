import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter , createRoutesFromElements ,Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout/layout.jsx'
import FirstPg from './Componats/FirstPg.jsx'
import Result from './Componats/Result.jsx'
import { Provider } from 'react-redux'

import {store} from './Store.js'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>} >

      <Route path='/' element ={<FirstPg />} />
      <Route path='/results' element ={<Result />} />
        
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={route} />
  </Provider>,
)
