import React, { useState } from 'react'
import {Star} from 'lucide-react'
import shirt1 from '/shirt1.jpg'
import fiveStar from '/fiveStars.svg'


const topSelling =[
  {
    id:1,
    image:shirt1,
    title:'T-shirt with Tape Details',
    rating:'4/5',
    price:'$120',
    canceled:'',
    percentOff:'',
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
    title:'T-shirt with Tape Details',
    rating:'4/5',
    price:'$120',
    canceled:'',
    percentOff:'',
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
    title:'T-shirt with Tape Details',
    rating:'4/5',
    price:'$120',
    canceled:'',
    percentOff:'',
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
   {
    id:7,
    image:shirt1,
    title:'T-shirt with Tape Details',
    rating:'4/5',
    price:'$120',
    canceled:'',
    percentOff:'',
  },
  {
    id:8,
    image:shirt1,
    title:'Skinny Fit Jeans',
    rating:'4/5',
     price:'$240',
    canceled:'$260',
    percentOff:'-20%',
  },
]

const TopSelling = () => {

  const [viewAll, setViewAll] = useState(false)

  const openViewAll = ()=>{
    setViewAll(!viewAll)
  }



  return (
    <section>
      <h1 className='component-title'> TOP SELLING</h1>
      <div className={!viewAll ? 'topSelling-component-card':'topSelling-component-card-viewAll'}>
        {topSelling.map((card)=>(
              <div key={card.id} className='col-span-1'>
                <img src={card.image} alt='card image' className='w-[95%] mb-[10px] '/>
                <h1 className='text-[16px] font-bold mb-[5px]'>{card.title}</h1>
                <div><img src={fiveStar} alt='this is the star rating image'/> <span>{card.rating}</span></div>
                <h1 className='mr-[10px]  text-[18px] font-semibold mb-[20px] flex gap-3'><span>{card.price}</span><span className='line-through text-slate-500'>{card.canceled}</span><span className='text-red-600'>{card.percentOff}</span></h1>
              </div>
        ))}
      </div>
        <button className="mobile-button-white my-[30px]  " onClick={openViewAll}>View All</button>
    </section>
  )
}

export default TopSelling
