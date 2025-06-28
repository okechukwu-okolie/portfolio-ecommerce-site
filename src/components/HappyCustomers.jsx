import React from 'react'
import left from '/leftArrow.svg'
import right from '/rightArrow.svg'


const slideContent = [
  {
    id:1,
    stars:'stars',
    name: 'Sarah M',
    desc:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
   {
    id:2,
    stars:'stars',
    name: 'Sarah M',
    desc:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
   {
    
    stars:'stars',
    name: 'Sarah M',
    desc:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
   {
    stars:'stars',
    name: 'Sarah M',
    desc:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
]

const HappyCustomers = () => {
  return (
    <section className='w-[90%]'>
      <div className='flex justify-between'>
        <h1 className='text-4xl pt-[40px] pb-[20px] font-extrabold text-left mx-[10px]'>OUR HAPPY CUSTOMERS</h1>
        <div className='flex'>
          <img src={left} alt="" className='cursor-pointer'/>
          <img src={right} alt="" className='cursor-pointer'/>
        </div>
      </div>
      <div className='carousel-container'>
        <div className="carousel-slides">
          {slideContent.map((card)=>(
            <div>
              <div>{}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HappyCustomers
