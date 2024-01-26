import React from "react";
import kalyani from "../assets/sponsors/kalyani.png";
import background from "../assets/sponsors/background.png";
import background2 from "../assets/sponsors/bg3.png";
import { motion } from "framer-motion";

const Sponsers = () => {
  return (
    <div className="flex flex-col gap-8  w-screen  px-1 justify-center items-center">
      <div className="flex flex-col gap-8  lg:w-[97%] md:w-[130vw] w-[150vw] p-6 rounded-3xl justify-center items-center  bg-[url('../assets/sponsors/background.png')] overflow-hidden relative">
        <img src={background2} className="" alt="" />
        <div className=" w-[90%] absolute top-[16%] flex items-center justify-center  max-w-[1400px] overflow-hidden">
          <h1 className="text-5xl font-titleFont text-[#483429]">
            Meet our Sponsors
          </h1>
        </div>
        <div className=" w-[75%] absolute top-[25%] flex flex-col gap-2 items-center justify-center  max-w-[1400px]  overflow-hidden">
          <h1 className="text-xl font-bodyFont font-bold text-[#4e171f]">
            Platinum Sponsors
          </h1>
          <div className=" w-full ml-20 flex gap-10 items-center justify-center">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="w-[6em] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="w-[6em] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
          </div>
        </div>
        <div className=" w-[75%] absolute top-[40%] flex flex-col gap-2 items-center justify-center  max-w-[1400px]  overflow-hidden">
          <h1 className="text-xl font-bodyFont font-bold text-[#4e171f]">
            Gold Sponsors
          </h1>
          <div className=" w-full ml-20 flex gap-10 items-center justify-center">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="w-[6em] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="w-[6em] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="w-[6em] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
          </div>
        </div>
        <div className=" w-[75%] absolute top-[55%] flex flex-col gap-2 items-center justify-center  max-w-[1400px]  overflow-hidden">
          <h1 className="text-xl font-bodyFont font-bold text-[#4e171f]">
            Bronze Sponsors
          </h1>
          <div className=" w-full ml-20 flex gap-10 items-center justify-center">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="w-[6em] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="w-[6em] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="w-[6em] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="w-[6em] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="w-[6em] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="w-[6em] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
          </div>
        </div>
        <div className=" w-[75%] absolute top-[70%] flex flex-col gap-2 items-center justify-center  max-w-[1400px]  overflow-hidden">
          <h1 className="text-xl font-bodyFont font-bold text-[#4e171f]">
            Food Sponsors
          </h1>
          <div className=" w-full ml-20 flex gap-10 items-center justify-center">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="w-[6em] rounded-lg translate-x-[-50%] sss"
              src={kalyani}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="w-[6em] rounded-lg translate-x-[-50%] sss"
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
