import React from "react";
import kalyani from "../assets/sponsors/kalyani.png";

import background2 from "../assets/sponsors/bg3.webp";
import { motion } from "framer-motion";

const Sponsers = () => {
  return (
    <div className="flex flex-col gap-8  w-screen  px-1 justify-center items-center">
      <div className="flex flex-col gap-8  lg:w-[97%] sm:md:w-[1 w-[3rem]30vw] w-[150vw] p-6 rounded-3xl justify-center items-center  bg-[url('../assets/sponsors/background.png')] overflow-hidden relative">
        <img src={background2} className="" alt="" />
        <div className=" w-[90%] absolute xs:top-[18%] top-[16%] flex items-center justify-center  max-w-[1400px] overflow-hidden">
          <h1 className="md:text-5xl sm:text-4xl text-2xl text-center font-titleFont text-[#483429]">
            Meet our Sponsors
          </h1>
        </div>
        <div className=" w-[75%] absolute top-[25%] flex flex-col sm:gap-2 gap-0 items-center justify-center  max-w-[1400px]  overflow-hidden">
          <h1 className="sm:text-xl text-md font-bodyFont font-bold text-[#4e171f]">
            Platinum Sponsors
          </h1>
          <div className=" w-full md:ml-20 ml-10 flex md:gap-10 gap-2 items-center justify-center">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="md:w-[6em] sm:w-[4em] w-[3rem] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="md:w-[6em] sm:w-[4em] w-[3rem] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
          </div>
        </div>
        <div className=" w-[75%] absolute top-[40%] flex flex-col sm:gap-2 gap-0 items-center justify-center  max-w-[1400px]  overflow-hidden">
          <h1 className="sm:text-xl text-md font-bodyFont font-bold text-[#4e171f]">
            Gold Sponsors
          </h1>
          <div className=" w-full md:ml-20 ml-10 flex md:gap-10 gap-2 items-center justify-center">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="md:w-[6em] sm:w-[4em] w-[3rem] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="md:w-[6em] sm:w-[4em] w-[3rem] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="md:w-[6em] sm:w-[4em] w-[3rem] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
          </div>
        </div>
        <div className=" w-[75%] absolute top-[55%] flex flex-col sm:gap-2 gap-0 items-center justify-center  max-w-[1400px]  overflow-hidden">
          <h1 className="sm:text-xl text-mdfont-bodyFont font-bold text-[#4e171f]">
            Bronze Sponsors
          </h1>
          <div className=" w-full md:ml-20 ml-10 flex md:gap-10 gap-2 items-center justify-center">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="md:w-[6em] sm:w-[4em] w-[3rem] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="md:w-[6em] sm:w-[4em] w-[3rem] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="md:w-[6em] sm:w-[4em] w-[3rem] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="md:w-[6em] sm:w-[4em] w-[3rem] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="md:w-[6em] sm:w-[4em] w-[3rem] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="md:w-[6em] sm:w-[4em] w-[3rem] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
          </div>
        </div>
        <div className=" w-[75%] absolute top-[70%] flex flex-col sm:gap-2 gap-0 items-center justify-center  max-w-[1400px]  overflow-hidden">
          <h1 className="sm:text-xl text-md font-bodyFont font-bold text-[#4e171f]">
            Food Sponsors
          </h1>
          <div className=" w-full md:ml-20 ml-10 flex md:gap-10 gap-2 items-center justify-center">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="md:w-[6em] sm:w-[4em] w-[3rem] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="md:w-[6em] sm:w-[4em] w-[3rem] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
