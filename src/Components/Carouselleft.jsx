import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';
import react from "../assets/react.svg";

const MyComponent = () => {
  return (
  <div className="mt-3 md:mt-4">
  <div className="carousel-container-left">
    <ScrollCarousel
      autoplay
      direction={'rtl'}
      onReady={() => console.log("Carousel left")}
    >
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <div key={item} className='bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48'>
        </div>
      ))}
    </ScrollCarousel>
  </div>

  
</div>

     
    
    
  );
};

export default MyComponent;