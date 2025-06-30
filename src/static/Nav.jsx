import {  ChevronRight, Menu, Search, ShoppingCart, User } from 'lucide-react'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  const [hamburger, setHamburger] = useState(false)

  const displayHamburger = () =>{
    setHamburger(!hamburger)
  }
  
  return (
    <nav className='bg-[#f2f0f1] sticky top-0'>
      <div className='bg-black text-slate-200 text-sm text-center py-[10px]'>Sign up and get 20% off to your first order. <Link><span>Sign Up Now</span></Link></div>
      {/* mobile navigation */}
      <div className='flex justify-between py-[20px] px-[20px] relative '>
        <div  className='flex items-center gap-4'>
          <Menu onClick={displayHamburger} size={20} className='text-red-800 cursor-pointer'/>
        <Link to='/'> <h1 className='text-3xl font-extrabold'>SHOP.CO</h1></Link>
        </div>
        <div className={hamburger ? `absolute top-[76px] left-[1px] font-bold bg-white/80 z-50 px-[20px] `: `hidden`}>
          <ul className='z-50 '>
            <Link to='shop'><li className='z-50 flex text-[16px] font-semibold text-slate-500 mb-[20px] border-b-[1px] cursor-pointer'>Shop <span><ChevronRight/></span></li></Link> 
            <li className='z-50 text-[16px] font-semibold text-slate-500 mb-[20px] cursor-pointer '>On Sale</li>
            <Link to='newArrival'><li className='z-50 text-[16px] font-semibold text-slate-500 mb-[20px] cursor-pointer'>New Arrivals</li></Link>
            <Link to='category'><li className='z-50 text-[16px] font-semibold text-slate-500 mb-[20px] cursor-pointer'>Category</li></Link>
            
          </ul>
        </div>
        <div className='flex gap-2'>
          <Search size={20}/>
          <ShoppingCart size={20}/>
          <User size={20} />
        </div>
      </div>
    </nav>
  )
}

export default Nav
