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
  { id: 1, src: Team },
  { id: 2, src: Img1 },
  { id: 3, src: Img2 },
  { id: 4, src: Img3 },
  { id: 5, src: Img4 },
  { id: 6, src: Img5 },
  { id: 7, src: Img6 },
  { id: 8, src: Team },
  { id: 9, src: Img1 },
  { id: 10, src: Img2 },
  { id: 11, src: Img3 },
];

const Carouselright = () => {
  return (
    <div className='py-1 md:my-12 bg-black'>
      <ScrollCarousel
        autoplay
        autoplaySpeed={2}
        speed={6}
        margin={20}
        direction={'rtl'}
        onReady={() => console.log("Carousel")}
      >
        {Data.map((image, id) => (
          <div key={id} className='rounded h-[12em] w-[12em] md:h-[19em] md:w-[19em] mx-auto justify-center'>
            <div className="inline-flex w-full justify-between">
              <div className="bg-white h-3 w-6 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
              <div className="bg-white h-3 w-6 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
              <div className="bg-white h-3 w-6 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
              <div className="bg-white h-3 w-6 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
              <div className="bg-white h-3 w-6 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
              <div className="  bg-white h-3 w-6 md:h-4 md:w-8 md:mt-4 "></div>
            </div>
            <img src={image.src} alt="" className="carousel-image" loading='lazy' />
            <div className=" relative top-[73%]">
            <div className="inline-flex w-full justify-between">
              <div className="bg-white h-3 w-6 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
              <div className="bg-white h-3 w-6 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
              <div className="bg-white h-3 w-6 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
              <div className="bg-white h-3 w-6 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
              <div className="bg-white h-3 w-6 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
              <div className="  bg-white h-3 w-6 md:h-4 md:w-8 md:mt-4  rounded-sm"></div>
            </div>
          </div>
          </div>
        ))}
      </ScrollCarousel>
    </div>
  );
}

export default Carouselright;
