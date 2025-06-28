import React from 'react'
import heroImg from '/heroImg.png'
import calvin from '/calvin.svg'
import gucci from '/gucci.svg'
import prada from '/prada.svg'
import versace from '/versace.svg'
import zara from '/zara.svg'

const Hero = () => {
  return (
    <section className='bg-[#f2f0f1]'>
      <h1 className='px-[20px] text-4xl font-extrabold max-w-[350px] text-left pb-[15px]  '>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
      <p className='px-[20px] text-sm text-justify font-semibold text-slate-600 pb-[15px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
      <button className='mobile-button '>Shop Now</button>
      <div className='px-[20px] flex flex-wrap justify-evenly font-[Roboto] py-[20px] gap-[15px]'>
        <div className=''>
          <h1 className='number'>200+</h1>
          <p className='number-description'>international brands</p>
        </div>
        <div>
          <h1 className='number'>2,000+</h1>
          <p className='number-description'>High-Quality Products</p>
        </div>
        <div>
          <h1 className='number'>30,000+</h1>
          <p className='number-descriptionn'>Happy Customers</p>
        </div>
      </div>
      <img src={heroImg} alt="" />
      <div className='w-[100%] h-[100px] py-[0px] bg-black flex flex-wrap justify-evenly '>
        <img src={versace} alt="versace" className='w-[110px]' />
        <img src={zara} alt="zara" className='w-[110px]' />
        <img src={gucci} alt="gucci" className='w-[110px]' />
        <img src={prada} alt="prada" className='w-[110px]' />
        <img src={calvin} alt="calvin" className='w-[110px]' />
      </div>
    </section>
  )
}

export default Hero
