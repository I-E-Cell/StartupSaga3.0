import React from "react";
import about from "../assets/about.svg";
import abtpn from "../assets/abtpn.svg";
import ait from "../assets/AitPune.svg";
import ss from "../assets/ss.svg";
import Abouttext from "./Abouttext.jsx";
import horse from "../assets/horse.svg";
import horse2 from "../assets/horse2.svg";
import Abouttext1 from "./Abouttext1.jsx";
import { motion } from "framer-motion";


export const About = () => {
  return (
    <>
      <div className=" mt-[2.5em] md:mt-[3.5em] ">
        <div className=" mt-2 mb-2 md:nt-3 md:mb-3">
          <p className="text-center text-[1.5em] md:text-[3.4em] text-black font-extrabold about-us  ">About Us</p>
        </div>
        <div className="relative mx-auto flex flex-col gap-5">
          <div className="relative    mx-auto w-[90%] max-w-[72em]  ">
            <div className=" absolute text-center about-text w-[55em]">
              
                      <Abouttext/>
                  
            
            </div>
            <img className="w-[100%] hidden md:block " src={about} alt=""></img>
            <img className="w-[100%] md:hidden block" src={abtpn} alt=""></img>

            <motion.img
            initial={{opacity:0,right:-30}}
            whileInView={{opacity:1,right:30}}
            transition={{duration:1}}
              className="absolute w-[7em] lg:w-[11em] hidden md:block ait"
              src={ait}
              alt=""
            />
            <motion.img
            initial={{opacity:0,left:-30}}
            whileInView={{opacity:1,left:30}}
            transition={{duration:1}}
              className="absolute w-[3.3em] lg:w-[6.5em]  hidden md:block horse"
              src={horse}
              alt=""
            />
            
            <motion.img
            initial={{opacity:0,right:-10}}
            whileInView={{opacity:1,right:10}}
            transition={{duration:1}}
            
            className="absolute w-[5em] md:hidden block aitpn    " src={ait} alt="" />
            <motion.img 
            initial={{opacity:0,left:-10}}
            whileInView={{opacity:1,left:10}}
            transition={{duration:1}}
            
            className="absolute w-[2.3em] md:hidden block horsepn" src={horse} alt="" />
          </div>
          <div className="relative mx-auto w-[90%] max-w-[72em] ">
            <div className="absolute text-center about-text">
              
                 <Abouttext1/>    
                
            </div>

            <img className="w-[100%] hidden md:block" src={about} alt=""/>
            <img className="w-[100%] md:hidden block" src={abtpn} alt=""/>

            <motion.img
              initial={{opacity:0,right:-30}}
              whileInView={{opacity:1,right:30}}
              transition={{duration:1}}
              className="absolute hidden md:block w-[3.3em] lg:w-[6.5em]  ait"
              src={horse2}
              alt=""
            />
            <motion.img
            initial={{opacity:0,left:-30}}
            whileInView={{opacity:1,left:30}}
            transition={{duration:1}}
              className="absolute hidden md:block w-[8em] lg:w-[15em]  ss2"
              src={ss}
              alt=""
            />
            <motion.img
            initial={{opacity:0,right:-10}}
            whileInView={{opacity:1,right:10}}
            transition={{duration:1}}
              className="absolute md:hidden block w-[2.3em] horse2 ait "
              src={horse2}
              alt=""
            />
            <motion.img 
            initial={{opacity:0,left:-10}}
            whileInView={{opacity:1,left:10}}
            transition={{duration:1}}

            className="absolute md:hidden block w-[7.2em]  ss " src={ss} alt="" />
           
            
          </div>
          
        </div>
      </div>
    </>
  );
};
