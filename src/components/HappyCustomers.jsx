import React,{useState,useEffect} from 'react'
import left from '/leftArrow.svg'
import right from '/rightArrow.svg'
import fiveStar from '/fiveStars.svg'
import correct from '/correct.svg'

const slideContent = [
  {
    id: 1,
    name: 'Sarah M',
    desc: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    id: 2,
    name: 'John D',
    desc: "Shop.co has transformed my wardrobe! Their collection is trendy, comfortable, and truly high-quality. I always get compliments when I wear their pieces."
  },
  {
    id: 3,
    name: 'Emily R',
    desc: "The shopping experience at Shop.co is fantastic. Easy to navigate, quick delivery, and the clothes are even better in person. Highly recommend!"
  },
  {
    id: 4,
    name: 'Michael B',
    desc: "I was skeptical about buying clothes online, but Shop.co exceeded all my expectations. The fit is perfect, and the materials are top-notch."
  },
  {
    id: 5,
    name: 'Jessica L',
    desc: "Amazing customer service and even more amazing clothes! Shop.co is now my go-to for all my fashion needs. So many unique and stylish options."
  },
  {
    id: 6,
    name: 'David C',
    desc: "Finally, a clothing brand that understands comfort and style. Shop.co delivers on both. I'm a happy customer and will definitely be buying more."
  },
];



    

const HappyCustomers = () => {


  const [currentIndex, setCurrentindex] = useState(0)
    const slideNumber = slideContent.length
    const time = 3000

    useEffect(()=>{

        const interval  = setInterval(() => {
            setCurrentindex((prevIndex)=>(prevIndex+1) % slideNumber)
        },time );

        return ()=>clearInterval(interval)

    },[time, slideNumber])


    const previous = () =>{
        setCurrentindex((prevIndex)=>prevIndex === 0 ? slideNumber - 1 : prevIndex - 1 )
    }

    const next = () =>{
        setCurrentindex((prev)=>(prev + 1)% slideNumber)
    }




  return (
    <section className='w-[90%] mx-auto z-[-1] '>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-4xl pt-[40px] pb-[20px] font-extrabold text-left mx-[10px]'>OUR HAPPY CUSTOMERS</h1>
        <div className='flex space-x-4'>
          <img src={left} alt="" onClick={previous} className='cursor-pointer'/>
          <img src={right} alt="" onClick={next} className='cursor-pointer'/>
        </div>
      </div>
      <div className='carousel-container relative w-[100%] overflow-hidden'>
        <div className="carousel-slides flex transition-transform duration-[0.5] ease-in-out "
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

          {slideContent.map((card)=>(
            <div key={card.id} className='min-w-[100%]  border-[0.2px] border-slate-300 rounded-[20px] p-7'>
              <div className=''><img src={fiveStar}/></div>
              <div className='flex items-center mt-2 gap-3'><div className='font-semibold text-[18px] '>{card.name}</div> <img src={correct}/></div>
              <p className='text-sm text-slate-500'>{card.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default HappyCustomers
