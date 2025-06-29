import React from 'react'
import SecondaryNav from '../static/SecondaryNav'
import { ChevronRight } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

const Category = () => {
  return (
    <section className=' px-[20px]' >
      
        <nav className='sticky top-[90px] z-[999]'>
            <ul className='flex'>
              <Link to='/'>
              <li className='flex items-center font-semibold hover:text-[15px] hover:transform-[3] hover:ease-in-out hover:text-slate-600'>Home <span className=''><ChevronRight size={18}/></span> </li></Link>
              <Link to='casual'><li className='flex items-center font-semibold text-red-700'>Casual <span className=''><ChevronRight size={18}/></span> </li></Link>
              <Link to='formal'><li className='flex items-center font-semibold'>Formal <span className=''><ChevronRight size={18}/></span> </li></Link>
              <Link to='party'><li className='flex items-center font-semibold'>Party <span className=''><ChevronRight size={18}/></span> </li></Link>
              <Link to='gym'><li className='flex items-center font-semibold'>Gym <span className=''><ChevronRight size={18}/></span> </li></Link>
            </ul>
      </nav>
      <Outlet/>
      
      
      this is the category main page
    </section>
  )
}

export default Category
