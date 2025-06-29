import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SecondaryNav = () => {
  return (
    <nav className={`sticky top-[150px]`}>
      <ul className='flex'>
        <li className='flex items-center font-semibold hover:text-[15px] hover:transform-[3] hover:ease-in-out hover:text-slate-600'><Link to='/'>Home</Link> <span className=''><ChevronRight size={18}/></span> </li>
        <li className='flex items-center font-semibold text-red-700'>Casual <span className=''><ChevronRight size={18}/></span> </li>
        <li className='flex items-center font-semibold'>Formal <span className=''><ChevronRight size={18}/></span> </li>
        <li className='flex items-center font-semibold'>Party <span className=''><ChevronRight size={18}/></span> </li>
        <li className='flex items-center font-semibold'>Gym <span className=''><ChevronRight size={18}/></span> </li>
      </ul>
    </nav>
  )
}

export default SecondaryNav
