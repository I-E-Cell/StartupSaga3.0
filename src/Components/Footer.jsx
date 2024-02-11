import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPhone,
} from "react-icons/fa";

import { BsArrowUpRight } from "react-icons/bs";
import ssb from "../assets/ssnew.svg";
import fmount1 from "../assets/fmount1.svg";
import fmount from "../assets/fmount.svg";
import cacright from "../assets/home/cacright.svg";
import cacleft from "../assets/home/cacleft.svg";
import horserider from "../assets/horserider.svg";


const Footer = () => {
  return (
    <div className="relative mt-16 md:mt-32 pt-[6em] " id="foot">
      <img
        className="w-[4em] md:w-[7em] md:block absolute horserider"
        src={horserider}
        alt=""
      />
      <img
        className="w-[10em] -z-20 hidden md:block absolute  cacfr"
        src={cacleft}
        alt=""
      />

      <img
        className="w-[10em]  -z-20 hidden md:block absolute cacf"
        src={cacright}
        alt=""
      />
      <img

        className=" w-[6em] h-[8em] absolute top-0  left-0  mount-left fmount  "
        src={fmount1}
        alt=""
      />
      <img className="absolute w-[7em] h-[8em] top-0 right-0 fmount1 " src={fmount} alt="" />
      <img className="absolute w-[6em] h-[8em] top-0 fmount " src={fmount1} alt="" />

      <div className="">
        <div className=" gap-2  bg-[#3A281E] flex justify-center w-screen h-full overflow-x-hidden ">


          <div className="container  bg-[#3A281E] max-w-[87em] mx-auto mt-3 ">
            <div className=" py-4 md:py-8 px-2 md:px-20 flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="mb-3 md:mb-0 relative z-10">
                <div className="flex flex-col justify-center gap-6 items-center relative mt-4 md:mt-8 ">
                  <div className=" flex justify-center items-center">
                    <img
                      className=" object-contain  h-20 w-20  md:h-28  md:w-28 lg:h-32 lg:w-32"
                      src={ssb}
                      alt=""
                    />
                  </div>

                  <div className="flex gap-2 relative   md:flex-row md:items-center items-center">
                    <a target="_blank" href="https://www.facebook.com/ecellait"><div className=" p-2 md:p-3 bg-[#FFFFFF] rounded-full items-center">
                      <FaFacebook
                        md:size={25}
                        size={20}
                        color={"#3A281E"}
                        className="mx-auto "
                      />
                    </div></a>
                    <a target="_blank" href="https://www.instagram.com/ecell_ait/"><div className="p-2 md:p-3 bg-[#FFFFFF] rounded-full">
                      <FaInstagram
                        md:size={25}
                        size={20}
                        color={"#3A281E"}
                        className="mx-auto "
                      />
                    </div></a>
                    <a target="_blank" href="https://twitter.com/ecell_aitpune"><div className="p-2 md:p-3 bg-[#FFFFFF] rounded-full">
                      <FaTwitter
                        md:size={25}
                        size={20}
                        color={"#3A281E"}
                        className="mx-auto"
                      />
                    </div></a>
                    <a target="_blank" href="https://www.linkedin.com/company/innovation-entrepreneurship-cell/"><div className="p-2 md:p-3 bg-[#FFFFFF] rounded-full">
                      <FaLinkedinIn
                        md:size={25}
                        size={20}
                        color={"#3A281E"}
                        className="mx-auto"
                      />
                    </div></a>
                    <a target="_blank" href="https://www.youtube.com/@aitecell"><div className="p-2 md:p-3 bg-[#FFFFFF] rounded-full">
                      <FaYoutube
                        md:size={25}
                        size={20}
                        color={"#3A281E"}
                        className="mx-auto"
                      />
                    </div></a>
                  </div>
                </div>
              </div>
              <div className="h-[9em] w-[0.1em] bg-white hidden lg:block "></div>
              <div className="">
                <div className="mx-auto rounded-xl overflow-x-hidden justify-center pt-3 ">
                  <iframe
                    className="rounded-xl  mb-6 mx-auto "
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.64883570219!2d73.87434400449611!3d18.607325966357873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c70090000001%3A0x160a20f3d0273495!2sArmy%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1700741837638!5m2!1sen!2sin"
                  ></iframe>
                </div>


              </div>
              <div className="h-[9em] w-[0.1em] hidden lg:block bg-white  "></div>
              <div className=" flex-col">
                <div className=" text-white flex flex-col justify-center mx-auto md:mx-0 relative rounded-xl z-[10] p-2 px-2 border-white border-[1px] top-4 mb-4 w-[300px] ">
                  <p className="text-xs mb-2 text-justify  w-full   ">
                    “If you look at history, innovation doesn't come just from
                    giving people incentives; it comes from creating environments
                    where their ideas can connect.“
                  </p>

                  <a href="https://www.aitecell.in/" className="flex justify-end gap-2 text-[#B8BFFF]">
                    I & E Cell <BsArrowUpRight color="#B8BFFF" size={15} />
                  </a>
                </div>
                <div className=" flex text-center flex-row md:gap-6 gap-4 pt-3  px-2 justify-center">
                  <div className=" ">
                    <p className=" text-white "> Ayush Kumar</p>
                    <p className=" text-white text-[0.8em] "> (Secretary)</p>
                    <p className="text-white flex items-center gap-1 mt-3 "><FaPhone />7991151088</p>

                  </div>
                  <div className="">
                    <p className="text-white ">Jyoti Yadav</p>
                    <p className="text-white   text-[0.8em] ">(Secretary)</p>
                    <p className="text-white flex items-center gap-1 mt-3  "><FaPhone />9170564275</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.51/build/spline-viewer.js"></script>
      <spline-viewer url="https://prod.spline.design/eWevDHClbtyyVjEx/scene.splinecode"></spline-viewer>
    </div>
  );
};

export default Footer;
