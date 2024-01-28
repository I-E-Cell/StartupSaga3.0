import React from 'react'
import aitlogo from "../assets/home/aitlogo.svg"
import ecelllogo from "../assets/home/ecelllogo.svg"
import { FaInstagram, FaLinkedinIn, FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <section className='bg-[#3A281E] flex justify-center w-full overflow-x-hidden mt-12'>


    <div className="container bg-[#3A281E] max-w-[87em] mx-auto mt-3">
        <div className="py-14 px-4 md:px-20 flex flex-col-reverse md:flex-row justify-between items-center w-full">
            <div className="mb-6 md:mb-0 relative z-10">
                <div className="flex flex-row justify-center gap-6 items-center relative mt-4">
                    <div className="bg-[#483429]/60 flex justify-center items-center p-4 rounded-xl ">
                        <img src={aitlogo} alt="" />
                    </div>
                    <div className="h-20 md:w-[2px] bg-[#483429]/60 "></div>
                    <div className="bg-[#483429]/60 flex justify-center items-center p-4 rounded-xl">
                        <img src={ecelllogo} alt="" />
                    </div>
                </div>
                <div className='text-[16px] mt-4 text-center md:text-left text-white'>Designed and Developed by <span className='text-[#F4AB2E]'>Team I & E Cell</span></div>
            </div>
            <div className="flex gap-2 relative top-0 right-0   md:flex-row md:items-center">
                <div className='w-[40px] h-[40px] md:w-[45px] md:h-[45px] bg-[#FFFFFF] rounded-full '>
                    <FaFacebook size={25} color={'#3A281E'} className='mx-auto my-[25%]'/>
                </div>
                <div className='w-[40px] h-[40px] md:w-[45px] md:h-[45px] bg-[#FFFFFF] rounded-full'>
                    <FaInstagram size={25} color={'#3A281E'} className='mx-auto my-[25%]'/>
                </div>
                <div className='w-[40px] h-[40px] md:w-[45px] md:h-[45px] bg-[#FFFFFF] rounded-full'>
                    <FaTwitter size={25} color={'#3A281E'} className='mx-auto my-[25%]'/>
                </div>
                <div className='w-[40px] h-[40px] md:w-[45px] md:h-[45px] bg-[#FFFFFF] rounded-full'>
                    <FaLinkedinIn size={25} color={'#3A281E'} className='mx-auto my-[25%]'/>
                </div>
                <div className='w-[40px] h-[40px] md:w-[45px] md:h-[45px] bg-[#FFFFFF] rounded-full'>
                    <FaYoutube size={25} color={'#3A281E'} className='mx-auto my-[25%]'/>
                </div>
            </div>
        </div>
    </div>
    </section>
</>



  )
}

export default Footer
