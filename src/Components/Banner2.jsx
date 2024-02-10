import React, { useState } from "react";

const Banner = ({ images, speed = 100000 }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="inner mt-6 md:pt-2   md:h-[19rem] h-[14rem]">
      <div className="wrapper">
        {Array.from({ length: 3 }).map((_, index) => (
          <section
            key={index}
            className={`section2 ${isPaused ? "paused" : ""}`}
            style={{ "--speed": `${speed}ms` }}
          >
            {images.map(({ id, image }) => (
              <div
                className="image"
                key={id}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="inline-flex w-full justify-evenly">
                  <div className="bg-white h-3 w-5 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
                  <div className="bg-white h-3 w-5 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
                  <div className="bg-white h-3 w-5 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
                  <div className="bg-white h-3 w-5 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
                  <div className="bg-white h-3 w-5 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
                  <div className="  bg-white h-3 w-5 md:h-4 md:w-8 md:mt-4 "></div>
                </div>
                <div className=" relative top-[95%] md:top-[71%] flex w-full justify-evenly md:pb-4">
                  <div className="bg-white h-3 w-6 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
                  <div className="bg-white h-3 w-6 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
                  <div className="bg-white h-3 w-6 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
                  <div className="bg-white h-3 w-6 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
                  <div className="bg-white h-3 w-6 md:h-4 md:w-8 md:mt-4 rounded-sm"></div>
                  <div className="  bg-white h-3 w-6 md:h-4 md:w-8 md:mt-4 "></div>
                </div>
                <img className="img" src={image} alt={`Image ${id}`}  />
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export { Banner };
