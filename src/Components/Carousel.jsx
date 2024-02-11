import React from 'react'
import Cards1 from './Cards1';
import Cards2 from './Cards2';
import { GoDotFill } from "react-icons/go";

const Carousel = () => {
  return (
    <div>
      <div className="mt-4  mb-7 md:mb-11 md:mt-6 z-0 ">
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
      <Cards1 />
      <div className="md:h-4"></div>
      <Cards2 />
      <div id='faq'></div>
    </div>
  )
}

export default Carousel
