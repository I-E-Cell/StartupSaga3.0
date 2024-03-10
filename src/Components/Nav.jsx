import React, { useState } from 'react'
import logo from '../assets/ssnew.svg'
import logo2 from '../assets/ssb.svg'

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaHome } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoIosContacts } from "react-icons/io";
import { RiGalleryLine } from "react-icons/ri";
import { IoIosLaptop } from "react-icons/io";
import { PiTargetBold } from "react-icons/pi";
import { TbTimelineEventText } from "react-icons/tb";
import { SiGithubsponsors } from "react-icons/si";
import { FaQuestion } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";


const Nav = () => {
    const [nav, setNav] = useState(true)

    const haldleNav = () => {
        setNav(!nav)
    }

    return (
        <div  className='mx-auto  bg-white shadow-lg fixed w-[100%]  z-50'>

            <div className='bg-transparent mt-1 h-[70px] flex text sticky z-50 justify-between px-8'>
                <a className='my-auto' href="/"><img className='h-[40px] my-auto md:pr-[6.3em]  bg-transparent ' src={logo2} alt="ait_logo" /></a>
                <div className='hidden bg-white/[13%] brightness-75 border-[1px] border-white/40 font-semibold  px-6 py-3 rounded-2xl md:flex my-auto lg:gap-16 md:gap-5  backdrop-blur-md'>
                    <a className='bg-transparent hover:-translate-y-1  md:text-sm  lg:text-[15px] duration-300 ' href="#home">Home</a>
                    <a className='bg-transparent hover:-translate-y-1  md:text-sm  lg:text-[15px] duration-300 ' href="#about">About</a>

                    <a className='bg-transparent hover:-translate-y-1 md:text-sm lg:text-[15px] duration-300 ' href="#timeline">Timeline</a>
                    {/* <a className='bg-transparent hover:-translate-y-1 md:text-sm lg:text-[15px] duration-300 ' href="#events">Events</a> */}
                    <a className='bg-transparent hover:-translate-y-1 md:text-sm lg:text-[15px] duration-300 ' href="#sponc">Sponsors</a>



                    <a className='bg-transparent hover:-translate-y-1 md:text-sm lg:text-[15px] duration-300' href="#faq">FAQ</a>

                    <a className='bg-transparent hover:-translate-y-1 md:text-sm lg:text-[15px] duration-300' href="#foot" >Contact</a>



                </div>

                <a href="#timeline"><button className='bg-[#FC8824]  rounded-xl relative  h-10 w-[9em] my-3 text-white hidden md:block'>Register Now!</button></a>

                <div onClick={haldleNav} className='block bg-transparent md:hidden my-auto'>
                    {!nav ? <AiOutlineClose size={20} color='#906ED6' /> : <AiOutlineMenu size={20} className=' bg-transparent' color='#906ED6' />}

                </div>
                <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-[100%] border-r border-r-gray-900  backdrop-blur-md bg-[black]/70 ease-in-out duration-500' : 'fixed left-[-100%]'}>

                    <div className='flex w-[4.7em] border border-gray-400 rounded-full my-10 mx-auto h-[4.7em]'>
                        <img className='h-[40px] m-4   relative  border-grey mx-auto' src={logo} alt="ait_logo" />
                    </div>
                    <div className='mx-auto relative -top-8  text-gray-300 text-center '>
                        <h1 className=' font-semibold text-md'>I & E Cell </h1>
                        <h1 className=' font-normal text-xs'>AIT Pune </h1>

                    </div>
                    <div className=' overflow-hidden gap-7  text-white font-normal text-base flex flex-col '>
                        <div className='w-[100%] h-[21em] absolute    bg-[#FF9B31]/50 skew-y-[30deg]'>
                        </div>
                        <div className='flex pl-4 items-center relative text-black/80 flex-row '>
                            <FaHome size={23} /><a className='pl-4  flex   ' href="#home">Home<br /> </a>
                        </div>

                        <div className='flex pl-4 items-center relative text-black/80 flex-row gap-'>

                            <RiTeamFill size={23} /><a className='pl-4 ' href="#about">About<br /></a>
                        </div>

                        <div className='flex pl-4 items-center relative text-black/80 flex-row gap-'>

                            <TbTimelineEventText size={23} /><a className='pl-4 ' href="#timeline">Timeline<br /></a>
                        </div>

                        {/* <div className='flex pl-4 items-center relative text-black/80 flex-row gap-'>

                            <RiGalleryLine size={23} /><a className='pl-4' href="">Events<br /></a>
                        </div> */}
                        <div className='flex pl-4 items-center relative text-black/80 flex-row gap-'>

                            <SiGithubsponsors size={19} /><a className='pl-4 b' href="#sponc">Sponsors<br /></a>
                        </div>

                        <div className='flex pl-4 items-center relative text-black/80 flex-row gap-'>

                            <FaQuestion size={20} /><a className='pl-4' href="#faq">FAQ<br /></a>
                        </div>
                        <div className='flex pl-4 items-center relative text-black/80 flex-row gap-'>

                            <MdOutlineContactPhone size={23} /><a className='pl-4' href="#foot">Contact<br /></a>
                        </div>
                    </div>

                            <div className='absolute  text-white/10 left-[50%] translate-x-[-50%] top-[88%] rotate-[-90deg]  text-xl font-extrabold'>
                                <h1>STARTUP</h1>
                                <h1>SAGA</h1>

                            </div>
                </div>
            </div>

        </div>
    )
}
export default Nav