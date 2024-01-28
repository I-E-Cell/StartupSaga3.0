import React from 'react'
import { IoStar } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

const Sponsors = () => {
    return (
        <div className='max-w-[90%] w-[87em] mx-auto pt-[5em] flex flex-col gap-4'>
            <div className='w-[100%] md:w-[90%] mx-auto border-[.4em] md:border-[.8em] border-[#241303] rounded-xl flex'>
                <div className=' flex w-full items-center justify-center py-2 gap-2 md:gap-8'>
                    <IoStar size={32} /><IoStar size={32} /><IoStar size={32} />
                    <h1 className=' text-[1.4em] text-nowrap md:text-[3.4em] font-extrabold text-[#241303]'>OUR SPONSORS</h1>
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
                    <div className=' flex w-full items-center justify-center py-2 gap-2 md:gap-8'>
                        <IoStar size={32} /><IoStar size={32} /><IoStar size={32} />
                        <h1 className='text-[1.5em] md:text-[3.4em] font-extrabold text-white'>PLATINUM</h1>
                        <IoStar size={32} /><IoStar size={32} /><IoStar size={32} />
                    </div>
                </div>
                <div className='w-[90%] mx-auto border-[.2em] py-12 border-[#241303] rounded-xl flex'>

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
                    <div className=' flex w-full items-center justify-center py-2 gap-2 md:gap-8'>
                        <IoStar size={32}  color='#FFD700'/><IoStar size={32} color='#FFD700'/><IoStar size={32} color='#FFD700'/>
                        <h1 className='text-[1.5em] md:text-[3.4em] font-extrabold text-[#FFD700]'>GOLD</h1>
                        <IoStar size={32} color='#FFD700'/><IoStar size={32} color='#FFD700'/><IoStar size={32} color='#FFD700'/>
                    </div>
                </div>
                <div className='w-[90%] mx-auto border-[.2em] py-12 border-[#241303] rounded-xl flex'>

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
                    <div className=' flex w-full items-center justify-center py-2 gap-2 md:gap-8'>
                        <IoStar size={32} color='#C0C0C0'/><IoStar size={32}  color='#C0C0C0'/><IoStar size={32}  color='#C0C0C0'/>
                        <h1 className='text-[1.5em] md:text-[3.4em] font-extrabold text-[#C0C0C0]'>SILVER</h1>
                        <IoStar size={32}  color='#C0C0C0'/><IoStar size={32} color='#C0C0C0' /><IoStar size={32}  color='#C0C0C0'/>
                    </div>
                </div>
                <div className='w-[90%] mx-auto border-[.2em] py-12 border-[#241303] rounded-xl flex'>

                </div>
            </div>
        </div>
    )
}

export default Sponsors