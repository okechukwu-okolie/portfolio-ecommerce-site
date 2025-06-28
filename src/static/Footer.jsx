import React from 'react'
import email from '/email.svg'
import twitter from '/twitter.svg'
import facebook from '/facebook.svg'
import instagram from '/instagram.svg'
import github from '/github.svg'
import visa from '/visa.svg'
import pay from '/pay.svg'
import google from '/google.svg'
import apple from '/apple.svg'
import master from '/master.svg'


const Footer = () => {
  return (
    <footer className=' mt-[140px] pt-[200px] w-[[100%]] relative bg-[#f0f0f0] '>
      <div className='mx-[10px] bg-black text-white p-[30px]  rounded-[30px] absolute top-[-80px]'>
        <h1 className='text-3xl font-extrabold mb-[20px]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        <div className='flex gap-5 bg-white py-[5px] rounded-full px-[10px] mb-3 '><img src={email} alt="email" className='bg-white' /><input type="text" placeholder='Enter your email address'className='outline-none placeholder:font-extralight text-black' /></div>
        <button className='bg-white text-black w-[100%] py-[5px] rounded-full cursor-pointer'>Subscribe to Newsletter</button>
      </div>
      <div className='px-[10px]'>
        <h1 className='text-3xl font-extrabold'>SHOP.CO</h1>
        <p className=' text-slate-700 text-sm '>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
      </div>
      <div className='flex gap-3 mt-[10px] px-[10px]'>
        <img src={twitter} alt="twitter" />
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={github} alt="github" />
      </div>
      <div className='grid grid-cols-2 px-[10px] mt-[20px]'>
        <ul >
          <h1 className='footer-group-link-title'>COMPANY</h1>
          <li>About</li>
          <li>Features</li>
          <li>Works</li>
          <li>Careers</li>
        </ul>
        <ul>
          <h1 className='footer-group-link-title'>HELP</h1>
          <li>Customer Support</li>
          <li>Delivery Details</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
        <ul>
          <h1 className='footer-group-link-title'>FAQ</h1>
          <li>Account</li>
          <li>Manage Deliveries</li>
          <li>Orders</li>
          <li>Payments</li>
        </ul>
        <ul>
          <h1 className='footer-group-link-title'>RESOURCES</h1>
          <li>Free eBooks</li>
          <li>Developmental Tutorials</li>
          <li>How-to Blog</li>
          <li>Youtube Playlist</li>
        </ul>
      </div>
      <hr  className='w-[90%] mx-auto border-slate-400 bg-black '/>
      <div className='h-[20p] w-[100%] text-center text-sm text-black mt-[20px] font-extralight'>Shop.co © 2000-2023, All Rights Reserved</div>
      <div className='flex justify-center gap-[-8px] pb-[50px]'>
        <img src={visa} alt="visa" className='cursor-pointer'/>
        <img src={master} alt="master card"className='cursor-pointer' />
        <img src={pay} alt="paypal" className='cursor-pointer'/>
        <img src={apple} alt="apple pay" className='cursor-pointer'/>
        <img src={google} alt="google pay" className='cursor-pointer'/>
      </div>
    </footer>
  )
}

export default Footer
