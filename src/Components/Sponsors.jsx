import React from 'react'
import { IoStar } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import devfolio from '../assets/Sponc/Devfolio_Logo-Black.png'
import ETHindia from '../assets/Sponc/ethindia-dark.png'
import polygon from '../assets/Sponc/Polygon_Logo-Dark.png'
import TheDopeStore from '../assets/Sponc/TheDopeStore.svg'
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
            {/* <div className='w-[90%] mx-auto flex gap-3 justify-evenly items-center'>
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
                <div className='w-[90%] mx-auto border-[.2em] py-12 border-[#241303] rounded-xl flex'>

                </div>
            </div> */}
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
                        <IoStar size={32}  color='#FFD700'/><IoStar size={32} color='#FFD700'/>
                        <h1 className='text-[1.5em] md:text-[3em] font-extrabold text-[#FFD700]'>GOLD</h1>
                        <IoStar size={32} color='#FFD700'/><IoStar size={32} color='#FFD700'/>
                    </div>
                </div>
                <div className='w-[90%]  justify-center gap-5 md:gap-14 border-[.2em] py-8 mx-auto border-[#241303] rounded-xl flex'>
                <a href="https://devfolio.co" target='_blank' ><img className='w-[8em] md:w-[11em]' src={devfolio} alt="DEVFOLIO LOGO" /></a>

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
                        <IoStar size={32}  color='#C0C0C0'/>
                        <h1 className='text-[1.5em] md:text-[3em] font-extrabold text-[#C0C0C0]'>SILVER</h1>
                        <IoStar size={32}  color='#C0C0C0'/>
                    </div>
                </div>
                <div className='w-[90%] mx-auto border-[.2em] justify-center gap-5 md:gap-14 py-8 border-[#241303] rounded-xl flex'>
                <a href="https://ethindia.co" target='_blank' ><img className='w-[8em] md:w-[11em]' src={ETHindia} alt="ETHINDIA LOGO" /></a>
                <a href="https://polygon.technology/" target='_blank'  ><img className='w-[8em] md:w-[11em]' src={polygon} alt="POLYGON LOGO" /></a>
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
                        <TbTie size={33}  color='#C0C0C0'/>
                        <h1 className='text-[1.3em] md:text-[2.7em] font-extrabold text-[#ffffff]'>APPAREL</h1>
                        <TbTie size={33}  color='#C0C0C0'/>
                    </div>
                </div>
                <div className='w-[90%] mx-auto border-[.2em] justify-center gap-5 md:gap-14 py-8 border-[#241303] rounded-xl flex'>
                <a href="https://thedopestore.tech/" target='_blank'  ><img className='w-[9em] md:w-[13em]' src={TheDopeStore} alt="POLYGON LOGO" /></a>

                </div>
            </div>

        </div>
    )
}

export default Sponsors