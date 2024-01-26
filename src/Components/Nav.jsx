import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaHome } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoIosContacts } from "react-icons/io";
import { RiGalleryLine } from "react-icons/ri";
import { IoIosLaptop } from "react-icons/io";
import { PiTargetBold } from "react-icons/pi";


const Nav = () => {
    const [nav, setNav] = useState(true)

    const haldleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='mx-auto  bg-transparent shadow-lg md:my-4 fixed w-[100%] h-[70px] z-50'>

            <div className='bg-transparent my-auto h-[70px] flex text sticky z-50 justify-between px-8'>
                <img className='h-[40px] my-auto  bg-transparent ' src={logo} alt="ait_logo" />
                <div className='hidden bg-white/[13%] brightness-75 border-[1px] border-white/40 font-semibold  px-6 py-3 rounded-2xl md:flex my-auto lg:gap-16 md:gap-5  backdrop-blur-md'>
                    <a className='bg-transparent hover:-translate-y-1  md:text-sm  lg:text-[15px] duration-300 ' href="#">Home</a>
                    <a className='bg-transparent hover:-translate-y-1  md:text-sm  lg:text-[15px] duration-300 ' href="#">About</a>

                    <a className='bg-transparent hover:-translate-y-1 md:text-sm lg:text-[15px] duration-300 ' href="#">Timeline</a>
                    <a className='bg-transparent hover:-translate-y-1 md:text-sm lg:text-[15px] duration-300 ' href="#">Events</a>
                    <a className='bg-transparent hover:-translate-y-1 md:text-sm lg:text-[15px] duration-300 ' href="#r">Sponsors</a>



                    <a className='bg-transparent hover:-translate-y-1 md:text-sm lg:text-[15px] duration-300' href="#">FAQ</a>

                    <a className='bg-transparent hover:-translate-y-1 md:text-sm lg:text-[15px] duration-300' href="" >Contact</a>



                </div>

                <button className='bg-[#FC8824]  rounded-xl relative  h-10 w-[9em] my-3 text-white hidden md:block'>Register Now!</button>

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
                    <div className=' overflow-hidden gap-8 text-white font-normal text-base flex flex-col '>
                        <div className='w-[100%] h-[19em] absolute    bg-[#FF9B31]/50 skew-y-[30deg]'>
                        </div>
                        <div className='flex pl-4 items-center relative text-black/80 flex-row '>
                            <FaHome size={23} /><a className='pl-4  flex   ' href="">Home<br /> </a>
                        </div>

                        <div className='flex pl-4 items-center relative text-black/80 flex-row gap-'>

                            <RiTeamFill size={23} /><a className='pl-4 ' href="">About<br /></a>
                        </div>

                        <div className='flex pl-4 items-center relative text-black/80 flex-row gap-'>

                            <IoIosContacts size={23} /><a className='pl-4 ' href="">Timeline<br /></a>
                        </div>

                        <div className='flex pl-4 items-center relative text-black/80 flex-row gap-'>

                            <RiGalleryLine size={23} /><a className='pl-4' href="">Events<br /></a>
                        </div>
                        <div className='flex pl-4 items-center relative text-black/80 flex-row gap-'>

                            <PiTargetBold size={23} /><a className='pl-4 b' href="">Sponsors<br /></a>
                        </div>

                        <div className='flex pl-4 items-center relative text-white/80 flex-row gap-'>

                            <IoIosLaptop size={23} /><a className='pl-4' href="">FAQ<br /></a>
                        </div>
                        <div className='flex pl-4 items-center relative text-white/80 flex-row gap-'>

                            <IoIosLaptop size={23} /><a className='pl-4' href="">Contact<br /></a>
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