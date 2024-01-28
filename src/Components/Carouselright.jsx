import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';
const Carouselright = () => {
  return (
    <div>
      <ScrollCarousel
        autoplay
        autoplaySpeed={1}
        speed={2}
        direction={'ltr'}
        onReady={() => console.log("Carousel")}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <div key={item} className='bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48'>
             
             
          </div>
        ))}
      </ScrollCarousel>
    </div>
  )
}

export default Carouselright
