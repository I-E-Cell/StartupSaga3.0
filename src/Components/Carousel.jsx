import React from 'react'
import Carouselright from './Carouselright'
import Carouselleft from './Carouselleft'
import Horsegame from './Horsegame'

const Carousel = () => {
  return (
    <>
    <div className="mt-11 md:mt-12 py-3 ">
    <div className=" text-center">
        <p className="text-black font-extrabold text-4xl md:text-8xl">Glimpses</p>
    </div>
    <div className='mt-5 md:mt-4 pt-4'>

          <Carouselright />

          <Horsegame />
          <Carouselleft />
      </div>
      </div></>
  )
}

export default Carousel
