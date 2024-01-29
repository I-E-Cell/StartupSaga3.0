
import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

import Team from "../assets/team.webp"



export const Data = [
    {
      id: 1,
      src: Team,
    },
    {
      id: 2,
      src:Team ,
    },
    {
      id: 3,
      src: Team,
    },
    {
        id: 4,
        src: Team,
      },
      {
        id: 5,
        src: Team,
      },
      {
        id: 6,
        src: Team,
      },
      {
        id: 7,
        src: Team,
      },
      {
        id: 8,
        src: Team,
      },
      {
        id: 9,
        src: Team,
      },
      {
        id: 10,
        src: Team,
      },
      {
        id: 11,
        src: Team,
      },
  ];
  

  

const Carouselright = () => {
  return (
    <div>
      <ScrollCarousel
        autoplay
        autoplaySpeed={2}
        speed={7}
        direction={'rtl'}
        onReady={() => console.log("Carousel")}
      >
        {Data.map((image,id) => ( 
          <div key={id} className=' border-2 border-blue-300/70 rounded h-36 w-48 mx-auto justify-center'>
            <img src={image.src} alt="" className="carousel-image" />
          </div>
        ))}
      </ScrollCarousel>
    </div>
  );
}

export default Carouselright;

