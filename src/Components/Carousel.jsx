import React from 'react'
import Carouselright from './Carouselright'
import Carouselleft from './Carouselleft'
import Horsegame from './Horsegame'
import { GoDotFill } from "react-icons/go";

const Carousel = () => {
  return (
    <>
    <div className="mt-14 md:mt-16 py-3 ">
    <div className=" text-center">
    <h1 className='text-[1.6em] md:text-[3.6em] mx-auto text-center font-extrabold text-[#241303]'>Glimpses</h1>

<div className='w-[90%] mx-auto flex gap-3 justify-evenly items-center'>
    <hr className='w-[45%] h-[3px] bg-[#241303] mx-auto' />
    <GoDotFill size={10} />
    <GoDotFill size={10} />
    <GoDotFill size={10} />
    <hr className='w-[45%] h-[3px] bg-[#241303]  mx-auto' />
</div>
</div>
    </div>
    <div className=''>

          <Carouselright />

          <Horsegame />
          <Carouselleft />
      </div>
      </>
  )
}

export default Carousel
