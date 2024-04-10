import React from 'react'
import { IoStar } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import devfolio from '../assets/Sponc/Devfolio_Logo-Black.png'
import ETHindia from '../assets/Sponc/ethindia-dark.png'
import polygon from '../assets/Sponc/Polygon_Logo-Dark.png'
import nurserylive from '../assets/Sponc/nurserylive.png'
import { GiGreenhouse, GiUbisoftSun } from "react-icons/gi";
import TheDopeStore from '../assets/Sponc/TheDopeStore.svg'
import BhadePay from '../assets/Sponc/BhadePay.svg'
import Bhau from '../assets/Sponc/bhau.svg'
import TE from '../assets/Sponc/TE.png'
import dusa from '../assets/Sponc/dusa.svg'

import soda from '../assets/Sponc/soda.svg'
import spindia from '../assets/Sponc/indias.svg'




import { TbTie } from "react-icons/tb";

const Sponsors = () => {
    return (
        <div id='sponc' className='max-w-[90%] w-[87em] mx-auto pt-[5em] flex flex-col gap-4'>
            <div className='w-[100%] mb-6 md:w-[90%] mx-auto border-[.4em] md:border-[.8em] border-[#241303] rounded-xl flex'>
                <div className=' flex w-full items-center justify-center  gap-2 md:gap-8'>
                    <IoStar size={32} /><IoStar size={32} /><IoStar size={32} />
                    <h1 className=' text-[1.4em] text-nowrap md:text-[3em] font-extrabold text-[#241303]'>OUR SPONSORS</h1>
                    <IoStar size={32} /><IoStar size={32} /><IoStar size={32} />
                </div>
            </div>
            <div className='w-[90%] mx-auto flex gap-3 justify-evenly items-center'>
                <hr className='w-[45%] h-[3px] bg-[#241303] mx-auto' />
                <GoDotFill size={10} />
                <GoDotFill size={10} />
                <GoDotFill size={10} />
                <hr className='w-[45%] h-[3px] bg-[#241303]  mx-auto' />
            </div>

            <div>
                <div className='w-[90%] mx-auto border-[.8em] bg-[#241303]  text-white border-[#241303] rounded-xl flex'>
                    <div className=' flex w-full items-center justify-center  gap-2 md:gap-8'>
                        <IoStar size={32} /><IoStar size={32} /><IoStar size={32} />
                        <h1 className='text-[1.5em] md:text-[3em] font-extrabold text-white'>PLATINUM</h1>
                        <IoStar size={32} /><IoStar size={32} /><IoStar size={32} />
                    </div>
                </div>
                <div className='w-[90%] mx-auto border-[.2em] justify-center py-4 border-[#241303] rounded-xl flex'>
                <a href="/" target='_blank' ><img className='w-[8em] md:w-[11em]' src={dusa} alt="Dusa LOGO" /></a>

                </div>
            </div>
            <div className='w-[90%] mx-auto flex gap-3 justify-evenly items-center'>
                <hr className='w-[45%] h-[3px] bg-[#241303] mx-auto' />
                <GoDotFill size={10} />
                <GoDotFill size={10} />
                <GoDotFill size={10} />
                <hr className='w-[45%] h-[3px] bg-[#241303]  mx-auto' />
            </div>

            <div>
                <div className='w-[90%] mx-auto border-[.8em] bg-[#241303]  text-white border-[#241303] rounded-xl flex'>
                    <div className=' flex w-full items-center justify-center  gap-2 md:gap-8'>
                        <IoStar size={32} color='#FFD700' /><IoStar size={32} color='#FFD700' />
                        <h1 className='text-[1.5em] md:text-[3em] font-extrabold text-[#FFD700]'>GOLD</h1>
                        <IoStar size={32} color='#FFD700' /><IoStar size={32} color='#FFD700' />
                    </div>
                </div>
                <div className='w-[90%]  justify-center gap-5 md:gap-14 items-center border-[.2em] py-4 mx-auto border-[#241303] rounded-xl flex'>
                    <a href="https://devfolio.co" target='_blank' ><img className='w-[8em] md:w-[11em]' src={devfolio} alt="DEVFOLIO LOGO" /></a>
                    <a href="https://bhau.org/" target='_blank' ><img className='w-[4em] md:w-[5em] relative ' src={Bhau} alt="" /></a>
                    <a href="https://thestartupindia.org" target='_blank' ><img className='w-[8em] md:w-[11em]' src={spindia} alt="Startup India LOGO" /></a>

                </div>
            </div>

            <div className='w-[90%] mx-auto flex gap-3 justify-evenly items-center'>
                <hr className='w-[45%] h-[3px] bg-[#241303] mx-auto' />
                <GoDotFill size={10} />
                <GoDotFill size={10} />
                <GoDotFill size={10} />
                <hr className='w-[45%] h-[3px] bg-[#241303]  mx-auto' />
            </div>

            <div>
                <div className='w-[90%] mx-auto border-[.8em] bg-[#241303]  text-white border-[#241303] rounded-xl flex'>
                    <div className=' flex w-full items-center justify-center  gap-2 md:gap-8'>
                        <IoStar size={32} color='#C0C0C0' />
                        <h1 className='text-[1.5em] md:text-[3em] font-extrabold text-[#C0C0C0]'>SILVER</h1>
                        <IoStar size={32} color='#C0C0C0' />
                    </div>
                </div>
                <div className='w-[90%] mx-auto border-[.2em] justify-center py-8 gap-5 md:gap-14  border-[#241303] rounded-xl flex '>
                    <a href="https://www.bhadepay.com/" target='_blank'  ><img className='w-[8em] mx-auto md:w-[11em]' src={BhadePay} alt="BhadePay LOGO" /></a>
                    <a href="https://nurserylive.com/" target='_blank'  ><img className='w-[8em] mx-auto md:w-[11em]' src={nurserylive} alt="NurseryLive LOGO" /></a>

                </div>


            </div>
            <div className='w-[90%] mx-auto flex gap-3 justify-evenly items-center'>
                <hr className='w-[45%] h-[3px] bg-[#241303] mx-auto' />
                <GoDotFill size={10} />
                <GoDotFill size={10} />
                <GoDotFill size={10} />
                <hr className='w-[45%] h-[3px] bg-[#241303]  mx-auto' />
            </div>

            <div>
                <div className='w-[90%] mx-auto border-[.8em] bg-[#241303]  text-white border-[#241303] rounded-xl flex'>
                    <div className=' flex w-full items-center justify-center  gap-2 md:gap-8'>
                        {/* <IoStar size={32} color='#C0C0C0' /> */}
                        <h1 className='text-[1.3em] md:text-[3em] font-extrabold text-[#C0C0C0]'>PLATFORM SPONSOR</h1>
                        {/* <IoStar size={32} color='#C0C0C0' /> */}
                    </div>
                </div>
                <div className='w-[90%] mx-auto border-[.2em] py-8 justify-center gap-5 md:gap-14  border-[#241303] rounded-xl flex '>
                    <a href="https://ethindia.co" target='_blank' ><img className='w-[8em] mx-auto md:w-[11em]' src={ETHindia} alt="ETHINDIA LOGO" /></a>
                    <a href="https://polygon.technology/" target='_blank'  ><img className='w-[8em] mx-auto md:w-[11em]' src={polygon} alt="POLYGON LOGO" /></a>

                </div>


            </div>
            <div className='w-[90%] mx-auto flex gap-3 justify-evenly items-center'>
                <hr className='w-[45%] h-[3px] bg-[#241303] mx-auto' />
                <GoDotFill size={10} />
                <GoDotFill size={10} />
                <GoDotFill size={10} />
                <hr className='w-[45%] h-[3px] bg-[#241303]  mx-auto' />
            </div>

            <div>
                <div className='w-[90%] mx-auto border-[.8em] bg-[#241303]  text-white border-[#241303] rounded-xl flex'>
                    <div className=' flex w-full items-center justify-center  gap-2 md:gap-8'>
                        {/* <IoStar size={32} color='#C0C0C0' /> */}
                        <h1 className='text-[1em] md:text-[3em] whitespace-nowrap font-extrabold text-[#C0C0C0]'>FOOD SPONSOR</h1>
                        {/* <IoStar size={32} color='#C0C0C0' /> */}
                    </div>
                </div>
                <div className='w-[90%] mx-auto border-[.2em] justify-center gap-5 md:gap-14  border-[#241303] rounded-xl flex '>
                    <a href="https://true-elements.com/" target='_blank'  ><img className='w-[5.5em] mx-auto md:w-[7em]' src={TE} alt="True Elements LOGO" /></a>
                    <a href="/" target='_blank' className=' bg-blend-lighten'  ><img className='w-[5.5em] mx-auto md:w-[7em]' src={soda} alt="True Elements LOGO" /></a>


                </div>


            </div>

            <div className='w-[90%] mx-auto flex gap-3 justify-evenly items-center'>
                <hr className='w-[45%] h-[3px] bg-[#241303] mx-auto' />
                <GoDotFill size={10} />
                <GoDotFill size={10} />
                <GoDotFill size={10} />
                <hr className='w-[45%] h-[3px] bg-[#241303]  mx-auto' />
            </div>

            <div>
                <div className='w-[90%] mx-auto border-[.8em] bg-[#241303]  text-white border-[#241303] rounded-xl flex'>
                    <div className=' flex w-full items-center justify-center  gap-2 md:gap-8'>
                        <TbTie size={33} color='#C0C0C0' />
                        <h1 className='text-[1.3em] md:text-[2.7em] font-extrabold text-[#ffffff]'>APPAREL</h1>
                        <TbTie size={33} color='#C0C0C0' />
                    </div>
                </div>
                <div className='w-[90%] mx-auto border-[.2em] justify-center gap-5 md:gap-14 py-8 border-[#241303] rounded-xl flex'>
                    <a href="https://thedopestore.tech/" target='_blank'  ><img className='w-[9em] md:w-[13em]' src={TheDopeStore} alt="DopeStore LOGO" /></a>

                </div>
            </div>
            

        </div>
    )
}

export default Sponsors