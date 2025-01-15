import React from 'react'

import { Outlet } from 'react-router-dom'
import Head from '../Header/head'
import Footer from '../Footer/footer'

function Layout() {
  return (
  <>
    <Head/>
        <Outlet/>
    <Footer />
  </>
  )
}

export default Layout