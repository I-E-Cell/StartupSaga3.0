
import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

import Team from "../assets/team.webp"
import Img1 from "../assets/img1.webp"
import Img2 from "../assets/img2.webp"
import Img3 from "../assets/img3.webp"
import Img4 from "../assets/img4.webp"
import Img5 from "../assets/img5.webp"
import Img6 from "../assets/img6.webp"




export const Data = [
    {
      id: 1,
      src: Team,
    },
    {
      id: 2,
      src:Img1 ,
    },
    {
      id: 3,
      src: Img2,
    },
    {
        id: 4,
        src: Img3,
      },
      {
        id: 5,
        src: Img4,
      },
      {
        id: 6,
        src: Img5,
      },
      {
        id: 7,
        src: Img6,
      },
      {
        id: 8,
        src: Team,
      },
      {
        id: 9,
        src: Img1,
      },
      {
        id: 10,
        src: Img2,
      },
      {
        id: 11,
        src: Img3,
      },
  ];
  

  

const Carouselright = () => {
  return (
    <><div className='  pb-3 pt-3  mb-3 mt-3 justify-center bg-[#241303]'>
      
      <ScrollCarousel
        autoplay
        autoplaySpeed={2}
        speed={6}
        direction={'rtl'}
        onReady={() => console.log("Carousel")}
      >
        {Data.map((image, id) => (
          <div key={id} className='  rounded h-[12em] w-[12em] md:h-[15em] md:w-[15em]  mx-auto justify-center'>
            <img src={image.src} alt="" className="carousel-image" loading='lazy' />
          </div>
        ))}
      </ScrollCarousel>
    </div></>
  );
}

export default Carouselright;

