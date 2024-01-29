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
      {[1, 2, 3, 4, 5, 6, 7,8,9,10,11,12].map((item) => (

       <><div className=" bg-black border-blue-300 w-64 h-44">
       <img src={react} key={item} alt="" className="" /></div></>
      ))}
    </ScrollCarousel>
  </div>

  
</div>

     
    
    
  );
};

export default MyComponent;