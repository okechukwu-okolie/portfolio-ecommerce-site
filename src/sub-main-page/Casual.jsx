import React from 'react'
import shirt1 from '/shirt1.jpg'
import { FilterIcon } from 'lucide-react'
import fiveStar from '/fiveStars.svg'

const casualClothings = [
   {
      id:1,
      image:shirt1,
      title:'Skinny Fit Jeans',
      rating:'4/5',
       price:'$240',
      canceled:'$260',
      percentOff:'-20%',
    },
     {
      id:2,
      image:shirt1,
      title:'Skinny Fit Jeans',
      rating:'4/5',
       price:'$240',
      canceled:'$260',
      percentOff:'-20%',
    },
     {
      id:3,
      image:shirt1,
      title:'Skinny Fit Jeans',
      rating:'4/5',
       price:'$240',
      canceled:'$260',
      percentOff:'-20%',
    },
     {
      id:4,
      image:shirt1,
      title:'Skinny Fit Jeans',
      rating:'4/5',
       price:'$240',
      canceled:'$260',
      percentOff:'-20%',
    },
     {
      id:5,
      image:shirt1,
      title:'Skinny Fit Jeans',
      rating:'4/5',
       price:'$240',
      canceled:'$260',
      percentOff:'-20%',
    },
     {
      id:6,
      image:shirt1,
      title:'Skinny Fit Jeans',
      rating:'4/5',
       price:'$240',
      canceled:'$260',
      percentOff:'-20%',
    },
]
const Casual = () => {
  return (
    <section className=''>
      <div>
        <div className='flex justify-between'>
          <div className='flex'>
            <h1>Casuals</h1>
            <p>Showing 1-10 of 100 Products</p>
          </div>
          <div><FilterIcon/></div>
        </div>
        <div className='grid grid-cols-2'>
           {casualClothings.map((card)=>(
                        <div key={card.id} className='col-span-1'>
                          <img src={card.image} alt='card image' className='w-[95%] mb-[10px] '/>
                          <h1 className='text-[15px]  font-semibold mb-[5px]'>{card.title}</h1>
                          <img src={fiveStar } />
                          <h1 className='mr-[10px]  text-[18px] font-semibold mb-[20px] flex gap-3'><span>{card.price}</span><span className='line-through text-slate-500'>{card.canceled}</span><span className='text-red-600'>{card.percentOff}</span></h1>
                        </div>
                  ))}

        </div>
      </div>
    </section>
  )
}

export default Casual
