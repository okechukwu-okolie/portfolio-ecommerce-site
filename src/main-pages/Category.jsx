import React from 'react'
import {Outlet} from 'react-router-dom'

const Category = () => {
  return (
    <section>
      <Outlet/>
      this is the category main page
    </section>
  )
}

export default Category
