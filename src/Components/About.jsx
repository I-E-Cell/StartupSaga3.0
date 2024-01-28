import React from "react";
import about from "../assets/about.svg";
import abtpn from "../assets/abtpn.svg";
import ait from "../assets/AitPune.svg";
import ss from "../assets/ss.svg";

import horse from "../assets/horse.svg";
import horse2 from "../assets/horse2.svg";
import Typewriter from "typewriter-effect";

export const About = () => {
  return (
    <>
      <div className="mt-[3.5em] ">
        <div className="">
          <p className="text-center text-4xl ">About Us</p>
        </div>
        <div className="relative mx-auto flex flex-col gap-5">
          <div className="relative  hidden md:block  mx-auto w-[90%] max-w-[72em]  ">
            <div className=" absolute text-center about-text w-[55em]">
          <Typewriter
          
    onInit={(typewriter) => {
        typewriter
            .typeString("Our mission is to support the Government's vision of achieving a 5 trillion economy by fostering startups founded by AIT students, and we remain committed to this objective. The Innovation and Entrepreneurship Cell aims to promote the entrepreneurship culture in and around the campus by providing multiple platforms for budding entrepreneurs.")
            .changeDelay(0.1)
            .start();
    }}
/>
</div>
            <img className="w-[100%]" src={about} alt=""></img>

            <img
              className="absolute w-[7em] lg:w-[11em] ait"
              src={ait}
              alt=""
            />
            <img
              className="absolute w-[3.3em] lg:w-[6.5em] horse"
              src={horse}
              alt=""
            />
          </div>
          <div className="relative hidden md:block mx-auto w-[90%] max-w-[72em] ">
          <div className="absolute text-center about-text w-[55em]">
    <Typewriter
        onInit={(typewriter) => {
            typewriter
                .typeString("Startup Saga, our annual Pan-India event that focuses primarily on engineering students across the country. This event provides a platform for students to showcase their innovative ideas, entrepreneurial skills, and aptitude.")
                .start();
        }}
    />
</div>


            <img className="w-[100%]" src={about} alt=""></img>

            <img
              className="absolute w-[3.3em] lg:w-[6.5em]  ait"
              src={horse2}
              alt=""
            />
            <img
              className="absolute w-[8em] lg:w-[15em]  ss2"
              src={ss}
              alt=""
            />
          </div>
          <div className="relative block md:hidden mx-auto w-[90%] max-w-[72em] ">
          <div className=" absolute text-center about-text">
          <Typewriter
          
    onInit={(typewriter) => {
        typewriter
            .typeString("Our mission is to support the Government's vision of achieving a 5 trillion economy by fostering startups founded by AIT students, and we remain committed to this objective. The Innovation and Entrepreneurship Cell aims to promote the entrepreneurship culture in and around the campus by providing multiple platforms for budding entrepreneurs.")
            .changeDelay(0.1)
            .start();
    }}
/>
</div>
            <img className="w-[100%]" src={abtpn} alt=""></img>
            <img className="absolute w-[5em]  aitpn    " src={ait} alt="" />
            <img className="absolute w-[2.3em]  horsepn" src={horse} alt="" />
          </div>
          <div className="relative block md:hidden mx-auto w-[90%] max-w-[72em] ">
          <div className="absolute text-center about-text w-[55em]">
    <Typewriter
        onInit={(typewriter) => {
            typewriter
                .typeString("Startup Saga, our annual Pan-India event that focuses primarily on engineering students across the country. This event provides a platform for students to showcase their innovative ideas, entrepreneurial skills, and aptitude.")
                .start();
        }}
    />
</div>

            <img className="w-[100%]" src={abtpn} alt=""></img>
            <img
              className="absolute w-[2.3em] horse2 ait "
              src={horse2}
              alt=""
            />
            <img className="absolute w-[7.2em]  ss " src={ss} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
