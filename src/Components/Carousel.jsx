import React from 'react'
import Carouselright from './Carouselright'
import Carouselleft from './Carouselleft'
import Horsegame from './Horsegame'

const Carousel = () => {
  return (
    <>
    <div className="mt-4 md:mt-8 py-3">
    <div className=" text-center">
        <p className="text-black font-extrabold text-2xl md:text-6xl">Glimpses</p>
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
