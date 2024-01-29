import React from "react";
import about from "../assets/about.svg";
import abtpn from "../assets/abtpn.svg";
import ait from "../assets/AitPune.svg";
import ss from "../assets/ss.svg";
import Abouttext from "./Abouttext.jsx";
import horse from "../assets/horse.svg";
import horse2 from "../assets/horse2.svg";
import Abouttext1 from "./Abouttext1.jsx";


export const About = () => {
  return (
    <>
      <div className="mt-[3.5em] ">
        <div className=" mt-3 mb-3 pt-y">
          <p className="text-center text-[1.5em] md:text-[3.4em] text-black font-extrabold about-us  ">About Us</p>
        </div>
        <div className="relative mx-auto flex flex-col gap-5">
          <div className="relative    mx-auto w-[90%] max-w-[72em]  ">
            <div className=" absolute text-center about-text w-[55em]">
              
                      <Abouttext/>
                  
            
            </div>
            <img className="w-[100%] hidden md:block " src={about} alt=""></img>
            <img className="w-[100%] md:hidden block" src={abtpn} alt=""></img>

            <img
              className="absolute w-[7em] lg:w-[11em] hidden md:block ait"
              src={ait}
              alt=""
            />
            <img
              className="absolute w-[3.3em] lg:w-[6.5em]  hidden md:block horse"
              src={horse}
              alt=""
            />
            
            <img className="absolute w-[5em] md:hidden block aitpn    " src={ait} alt="" />
            <img className="absolute w-[2.3em] md:hidden block horsepn" src={horse} alt="" />
          </div>
          <div className="relative mx-auto w-[90%] max-w-[72em] ">
            <div className="absolute text-center about-text">
              
                 <Abouttext1/>    
                
            </div>

            <img className="w-[100%] hidden md:block" src={about} alt=""></img>
            <img className="w-[100%] md:hidden block" src={abtpn} alt=""></img>

            <img
              className="absolute hidden md:block w-[3.3em] lg:w-[6.5em]  ait"
              src={horse2}
              alt=""
            />
            <img
              className="absolute hidden md:block w-[8em] lg:w-[15em]  ss2"
              src={ss}
              alt=""
            />
            <img
              className="absolute md:hidden block w-[2.3em] horse2 ait "
              src={horse2}
              alt=""
            />
            <img className="absolute md:hidden block w-[7.2em]  ss " src={ss} alt="" />
           
            
          </div>
          
        </div>
      </div>
    </>
  );
};
