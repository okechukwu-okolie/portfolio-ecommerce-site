import React, { useState } from 'react'
import {Star, StarHalf} from 'lucide-react'
import shirt1 from '/shirt1.jpg'


const topSelling =[
  {
    id:1,
    image:shirt1,
    title:'T-shirt with Tape Details',
    star:[<Star/>,<Star/>,<Star/>,<Star/>,<StarHalf/>, '4.5/5'],
    price:['$120'],
  },
  {
    id:2,
    image:shirt1,
    title:'Skinny Fit Jeans',
    star:[<Star/>,<Star/>,<Star/>,<StarHalf/>, '3.5/5'],
    price:['$240','$260','-20%'],
  },
   {
    id:3,
    image:shirt1,
    title:'T-shirt with Tape Details',
    star:[<Star/>,<Star/>,<Star/>,<Star/>,<StarHalf/>, '4.5/5'],
    price:['$120'],
  },
  {
    id:4,
    image:shirt1,
    title:'Skinny Fit Jeans',
    star:[<Star/>,<Star/>,<Star/>,<StarHalf/>, '3.5/5'],
    price:['$240','$260','-20%'],
  },
   {
    id:5,
    image:shirt1,
    title:'T-shirt with Tape Details',
    star:[<Star/>,<Star/>,<Star/>,<Star/>,<StarHalf/>, '4.5/5'],
    price:['$120'],
  },
  {
    id:6,
    image:shirt1,
    title:'Skinny Fit Jeans',
    star:[<Star/>,<Star/>,<Star/>,<StarHalf/>, '3.5/5'],
    price:['$240','$260','-20%'],
  },
   {
    id:7,
    image:shirt1,
    title:'T-shirt with Tape Details',
    star:[<Star/>,<Star/>,<Star/>,<Star/>,<StarHalf/>, '4.5/5'],
    price:['$120'],
  },
  {
    id:8,
    image:shirt1,
    title:'Skinny Fit Jeans',
    star:[<Star/>,<Star/>,<Star/>,<StarHalf/>, '3.5/5'],
    price:['$240','$260','-20%'],
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
                <span className='flex text-black mb-[5px]'>{card.star }</span>
                <h1>{card.half}</h1>
                <h1 className='mr-[10px] text-2xl font-bold mb-[20px] '>{card.price}</h1>
              </div>
        ))}
      </div>
        <button className="mobile-button-white my-[30px]  " onClick={openViewAll}>View All</button>
    </section>
  )
}

export default TopSelling
