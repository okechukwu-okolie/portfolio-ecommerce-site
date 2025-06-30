import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'



const Shop = () => {
  return (
    <section className=' px-[20px] z-[999]' >
      
        <nav className='sticky top-[90px] '>
            <ul className='flex'>
              <Link to='/'>
              <li className='flex items-center font-semibold hover:text-[15px] hover:transform-[3] hover:ease-in-out hover:text-slate-600'>Home <span className=''><ChevronRight size={18}/></span> </li></Link>
              <Link to='newArrival'><li className='flex items-center font-semibold text-red-700'>New Arrivals <span className=''><ChevronRight size={18}/></span> </li></Link>
              <Link to='topSelling'><li className='flex items-center font-semibold'>Top Selling <span className=''><ChevronRight size={18}/></span> </li></Link>
             
            </ul>
      </nav>
      <Outlet/>
      
    </section>
  )
}

export default Shop
