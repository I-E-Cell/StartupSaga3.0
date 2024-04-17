import React from "react";
import { motion } from "framer-motion";
import cloud1 from "../assets/home/cloud1.svg";
import cloud2 from "../assets/home/cloud2.svg";
import cloud3 from "../assets/home/cloud3.svg";
import mount1 from "../assets/home/mount1.svg";
import mount2 from "../assets/home/mount2.svg";
import sss from "../assets/home/sss.svg";
import sun from "../assets/home/sun.svg";
import chain from "../assets/home/chain.svg";
import { GoDotFill } from "react-icons/go";

import baseboard from "../assets/home/baseboard.svg";
import cacleft from "../assets/home/cacleft.svg";
import cacright from "../assets/home/cacright.svg";
import log from "../assets/log.svg";
import logmb from "../assets/logmb.svg";


import Countdown from "./Countdown";


const Home = () => {
  return (
    <>
      <div id="home" className="flex justify-center top-[5em] md:top-[7em]  mx-[2%] relative z-10">
        <div className="relative pt-[8em] bg-[#85C19C] px-12  overflow-hidden rounded-2xl w-[87em] h-[36em] md:h-[43em]">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ x: 100 }}
            transition={{ delay: 1.7, duration: 1.3 }}
            className="w-[18em] md:w-[32em] lg:w-[36em] absolute top-[4.8em] z-10 md:top-[3em] left-[50%] translate-x-[-50%] sss"
            src={sss}
            alt=""
          />
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ x: 100 }}
            transition={{ delay: 2.1, duration: 0.7 }}
            className="text-[17px] md:text-[22px]  text-white text-center font-semibold"
          >
            "The Saga of Innovation"
          </motion.h1>
          <motion.img
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mx-auto w-[48em]"
            src={sun}
            alt=""
          />
          <motion.img
            initial={{ x: 160 }}
            whileInView={{ x: 0 }}
            exit={{ x: 100 }}
            transition={{ duration: 0.6 }}
            className="w-[35em] lg:w-[65em] absolute cloud1"
            src={cloud1}
            alt=""
          />

          <motion.img
            initial={{ x: -160 }}
            whileInView={{ x: 0 }}
            exit={{ x: 100 }}
            transition={{ duration: 0.6 }}
            className="w-[35em] lg:w-[42em] absolute hidden md:block cloud2"
            src={cloud2}
            alt=""
          />
          <motion.img
            initial={{ x: -60 }}
            whileInView={{ x: 0 }}
            exit={{ x: 100 }}
            transition={{ duration: 0.6 }}
            className="w-[16em] md:w-[28em] absolute cloud3"
            src={cloud3}
            alt=""
          />
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            src={mount1}
            loading="eager"
            className="w-[25em] lg:w-[36em] absolute hidden md:block mount1"
            alt=""
          />
          <motion.img
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            src={mount2}
            loading="eager"
            className="md:w-[25em] lg:w-[36em] sm:w-[36em] absolute  mount2"
            alt=""
          />

          <div className="w-[110%] h-[8em] rounded-xl absolute bg-[#280C05] base">
            <img
              className="w-[9.5em] md:w-[12em] absolute baseboard"
              src={baseboard}
              alt=""
            />
            <img
              className="w-[17em] md:w-[22em]   absolute cacleft"
              src={cacleft}
              alt=""
            />
            <img
              className="w-[22em] hidden md:block absolute cacright"
              src={cacright}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" crack   lg:w-[58em] w-[20em] md:w-[45em] relative top-[3em] md:top-[4em]  lg:top-[2.9em]  mx-auto   justify-center bg-white shadow-black  rounded-2xl shadow-lg z-20 ">


        <div className="  ">
          <div className="py-4 h-[4.8em] flex justify-center items-center md:h-[7.2em] rounded-2xl ">

            {/* <Countdown /> */}
            <h1 className="text-2xl md:text-3xl font-bold md:font-extrabold">Time Up</h1>
          </div>
        </div>
      </div>

      <div className="mt-[4.5em] lg:w-[58em] max-w-[95%] w-[25em] md:w-[45em] relative md:top-[4em]  lg:top-[2.9em]  mx-auto   justify-center bg-transparent z-10 ">

        <div className="absolute hidden md:block ladki z-10">
          <img className="relative" src={log} alt="" />
        </div>
        <div className="absolute block md:hidden ladki z-10">
          <img className="relative" src={logmb} alt="" />
        </div>
        <div className="relative w-full h-[5em] md:h-[6em] lg:h-[7.5em]  items-center flex justify-center  ladki z-10">
          <div className=" text-center  flex  ">
            <div className="flex gap-4">
              <div className="flex flex-col pt-2   justify-center ">
                <h1 className='text-[1.2em] md:text-[1.6em]   font-semibold text-left text-[#241303]'>PRIZES</h1>
                <h1 className='text-[1.2em] md:text-[1.6em] mx-auto -mt-3 text-center  font-semibold text-[#241303]'>WORTH</h1>

              </div>
              <div className="flex items-center">
                <h1 className="text-[1.8em] md:text-[4em] whitespace-nowrap mx-auto text-center font-bold text-[#241303]">INR 6+ LAKHS</h1>
              </div>
            </div>

          </div>
        </div>
        <div className="absolute bottom-[4em] right-6 md:right-4 z-0">
          <img className=" w-[6.5em] md:w-[10em]" src={chain} alt="" />
        </div>
        <div className="absolute bottom-[4em] left-5 md:left-0 z-0">
          <img className="  w-[6.5em] md:w-[10em]" src={chain} alt="" />
        </div>
        <div className="   ">
          <div className="py-4 h-[6em] flex justify-center items-center md:h-[7.2em] rounded-2xl ">


          </div>
        </div>
        <div id="about"></div>
      </div>
    </>
  );
};

export default Home;
