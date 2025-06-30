import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const CombinedStatic = () => {
  return (
    <section>
      <Nav/>
      <Outlet/>
      <Footer/>
    </section>
  )
}

export default CombinedStatic
