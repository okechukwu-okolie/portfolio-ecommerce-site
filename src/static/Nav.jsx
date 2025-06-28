import {  Menu, Search, ShoppingCart, User } from 'lucide-react'
import React from 'react'

const Nav = () => {
  return (
    <nav className='bg-[#f2f0f1]'>
      <div className='bg-black text-slate-200 text-sm text-center py-[10px]'>Sign up and get 20% off to your first order. <a href="/"><span>Sign Up Now</span></a></div>
      {/* mobile navigation */}
      <div className='flex justify-between py-[20px] px-[20px] '>
        <div  className='flex items-center gap-4'>
          <Menu size={20} className='text-red-800'/>
          <h1 className='text-3xl font-extrabold'>SHOP.CO</h1>
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
