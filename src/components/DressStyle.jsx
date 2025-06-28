import React from 'react'
import casual from '/casualCategory.jpg'
import formal from '/formalCategory.jpg'
import party from '/partyCategory.jpg'
import gym from '/gymCategory.jpg'

const DressStyle = () => {
  return (
    <section className='mt-[50px] mx-[10px] rounded-[10px] bg-[#f0f0f0] max-w-[]'>
      <h1 className='component-title max-w-[300px]'>BROWSE BY DRESS STYLE</h1>
      <div className='grid grid-cols-1 gap-5 w-fit mx-auto'>
        <img src={casual} alt="casual category" className='rounded-[10px]'/>
        <img src={formal} alt=" formal category" className='rounded-[10px]'/>
        <img src={party} alt="party category" className='rounded-[10px]'/>
        <img src={gym} alt="gym category" className='rounded-[10px]' />
      </div>
    </section>
  )
}

export default DressStyle
