import {  Menu, Search, ShoppingCart, User } from 'lucide-react'
import React,{useState} from 'react'

const Nav = () => {

  const [hamburger, setHamburger] = useState(false)

  const displayHamburger = () =>{
    setHamburger(!hamburger)
  }
  return (
    <nav className='bg-[#f2f0f1] sticky top-0'>
      <div className='bg-black text-slate-200 text-sm text-center py-[10px]'>Sign up and get 20% off to your first order. <a href="/"><span>Sign Up Now</span></a></div>
      {/* mobile navigation */}
      <div className='flex justify-between py-[20px] px-[20px] relative '>
        <div  className='flex items-center gap-4'>
          <Menu onClick={displayHamburger} size={20} className='text-red-800'/>
          <h1 className='text-3xl font-extrabold'>SHOP.CO</h1>
        </div>
        <div className={hamburger ? `absolute top-[76px] left-[1px] font-bold bg-white/80 z-[9999] px-[20px]`: `hidden`}>
          <ul className=' '>
            <li className=' text-[16px] font-semibold text-black mb-[20px] border-b-[1px]'>Shop <span>></span></li>
            <li className=' text-[16px] font-semibold text-black mb-[20px] '>On Sale</li>
            <li className=' text-[16px] font-semibold text-black mb-[20px]'>New Arrivals</li>
            <li className=' text-[16px] font-semibold text-black mb-[20px]'>Brands</li>
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
