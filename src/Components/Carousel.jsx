import React from 'react'
import Carouselright from './Carouselright'
import Carouselleft from './Carouselleft'
import Horsegame from './Horsegame'

const Carousel = () => {
  return (
    <div className='mt-5 md:mt-4'>
        
      <Carouselright/>
      <Horsegame/>
      <Carouselleft/>
    </div>
  )
}

export default Carousel
