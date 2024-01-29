import React from 'react'
import { GoDotFill } from "react-icons/go";
import ss from '../assets/ssb.svg'
import skull from '../assets/skull.svg'


const SponUS = () => {
    return (
        <div className='max-w-[90%] w-[87em] mx-auto mt-16 flex flex-col gap-11'>
            <div className='flex flex-col '>
                <h1 className='text-[1.6em] md:text-[3.6em] mx-auto text-center font-extrabold text-[#241303]'>WANT TO SPONSOR US?</h1>

                <div className='w-[90%] mx-auto flex gap-3 justify-evenly items-center'>
                    <hr className='w-[45%] h-[3px] bg-[#241303] mx-auto' />
                    <GoDotFill size={10} />
                    <GoDotFill size={10} />
                    <GoDotFill size={10} />
                    <hr className='w-[45%] h-[3px] bg-[#241303]  mx-auto' />
                </div>
            </div>
            <div className='flex flex-col justify-evenly gap-6'>
                <div className='flex flex-col gap-6 md:flex-row justify-between w-[90%] mx-auto'>
                    <div className='flex  md:gap-[2px] w-full'>
                        <h1 className='px-3 py-2 bg-[#1F1401]  text-sm md:text-md lg:text-xl font-semibold text-nowrap rounded-lg text-white'>COMPANY NAME</h1>
                        <input className='bg-transparent border-[2px] w-[100%] md:w-[60%] border-[#1F1401] rounded-r-lg border-l-0'></input>
                    </div>
                    <div className='flex gap-[2px] w-full'>
                        <h1 className='px-6 py-2 border-[#1F1401] border-[1.5px] text-sm md:text-md lg:text-xl font-semibold rounded-lg text-[#1F1401]'>EMAIL</h1>
                        <input className='bg-transparent border-[2px] w-[100%] md:w-[60%] border-[#1F1401] rounded-r-lg border-l-0'></input>
                    </div>
                    <div className='hidden md:flex gap-[2px] items-center  rounded border-[#1F1401] border-[1.5px] px-4 py-2 '>
                        {/* <h1 className='px-6 py-2 border-[#1F1401] border-[1.5px] text-xl font-semibold rounded-lg text-[#1F1401]'></h1> */}
                        <GoDotFill size={15} />
                    </div>
                </div>
                <div className='flex flex-col items-center  gap-4 md:flex-row justify-between w-[90%] mx-auto'>
                    <div className='flex gap-[2px] w-full'>
                        <h1 className='px-3 py-2 bg-[#1F1401] text-sm md:text-md lg:text-xl font-semibold text-nowrap rounded-lg text-white'>PHONE</h1>
                        <input className='bg-transparent border-[2px] w-[100%] md:w-[60%] border-[#1F1401] rounded-r-lg border-l-0'></input>
                    </div>
                    <div className='hidden md:flex gap-[2px]  items-center  rounded border-[#1F1401] border-[1.5px] px-4 py-[.9em] '>
                        <GoDotFill size={15} />
                    </div>
                    <div className='flex gap-[2px] w-full'>
                        <h1 className='px-6 py-2 border-[#1F1401] border-[1.5px] text-sm md:text-md lg:text-xl font-semibold rounded-lg text-[#1F1401]'>LINKEDIN</h1>
                        <input className='bg-transparent border-[2px] w-[100%] md:w-[60%] border-[#1F1401] rounded-r-lg border-l-0'></input>
                    </div>
                    <hr className=' hidden md:flex w-[6em] h-1 rounded bg-[#1F1401]' />  <GoDotFill className='hidden md:flex' size={25} />
                    <div className='hidden md:flex gap-[2px] items-center  rounded border-[#1F1401] border-[1.5px] px-4 py-2 '>
                        {/* <h1 className='px-6 py-2 border-[#1F1401] border-[1.5px] text-xl font-semibold rounded-lg text-[#1F1401]'></h1> */}
                        <GoDotFill size={15} />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row  justify-between w-[90%] gap-10 md:gap-0 mx-auto mt-8'>
                    <div className='hidden md:flex flex-col gap-2 justify-center items-center'>

                        <hr className='w-[1.6px] rounded-3xl h-[5em] bg-[#1F1401]' />
                        <GoDotFill size={9} />
                        <GoDotFill size={9} />

                        <hr className='w-[1.6px] rounded-3xl h-[5em] bg-[#1F1401]' />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-7'>
                        <div className='relative'>
                            <div className='w-[5%] h-[21%] bg-[#FFF4E7] absolute rounded-br-full'></div>
                            <div className='w-[9px] left-[95%] h-[9px] flex justify-end bg-[#FFF4E7] rounded-bl-full absolute '></div>
                            <div className='w-[9px] top-[79.5%] left-[95%] h-[9px] flex justify-end bg-[#FFF4E7] rounded-tl-full absolute '></div>
                            <div className='w-[9px] top-[79.5%]  h-[9px] flex justify-end bg-[#FFF4E7] rounded-tr-full absolute '></div>

                            <button className=' px-8 text-lg py-2 -rounded-[2em] font-semibold text-white bg-[#1F1401] '>Visit I&E Cell</button>
                        </div>
                        <div className='relative'>
                            <div className='w-[5%] h-[21%] bg-[#FFF4E7] absolute rounded-br-full'></div>
                            <div className='w-[9px] left-[95%] h-[9px] flex justify-end bg-[#FFF4E7] rounded-bl-full absolute '></div>
                            <div className='w-[9px] top-[79.5%] left-[95%] h-[9px] flex justify-end bg-[#FFF4E7] rounded-tl-full absolute '></div>
                            <div className='w-[9px] top-[79.5%]  h-[9px] flex justify-end bg-[#FFF4E7] rounded-tr-full absolute '></div>

                            <button className=' px-8 text-lg py-2 -rounded-[2em] font-semibold text-white bg-[#1F1401] '>BROCHURE</button>
                        </div>

                    </div>
                    <div className='hidden md:flex flex-col gap-2 justify-center items-center'>

                        <hr className='w-[1.6px] rounded-3xl h-[5em] bg-[#1F1401]' />
                        <GoDotFill size={9} />
                        <GoDotFill size={9} />

                        <hr className='w-[1.6px] rounded-3xl h-[5em] bg-[#1F1401]' />

                    </div>
                    <div className='hidden md:flex'>

                        <img className=' w-[11em]' src={ss} alt="" />

                    </div>
                    <div className='hidden md:flex flex-col gap-2 justify-center items-center'>

                        <hr className='w-[1.6px] rounded-3xl h-[5em] bg-[#1F1401]' />
                        <GoDotFill size={9} />
                        <GoDotFill size={9} />

                        <hr className='w-[1.6px] rounded-3xl h-[5em] bg-[#1F1401]' />
                    </div>
                    <div className='flex   flex-col justify-center items-center'>

                        <img className='w-[5.5em]' src={skull} alt="" />
                        <div className='flex justify-center items-center -gap-[60px] '>
                            <GoDotFill size={9} />

                            <hr className='w-[10em] bg-[#1F1401] border-none h-[2.4px]' />
                            <GoDotFill size={9} />

                        </div>
                        <h1 className='text-[#1F1401] text-2xl font-bold'>SPONSORSHIP HEAD</h1>
                        <h1 className='text-[#1F1401]  font-semibold'>UMANG SINGH</h1>
                        <div className='relative mt-2 '>
                            <div className='w-[5%] h-[21%] bg-[#FFF4E7] absolute rounded-br-full'></div>
                            <div className='w-[9px] left-[95.5%] h-[9px] flex justify-end bg-[#FFF4E7] rounded-bl-full absolute '></div>
                            <div className='w-[9px] top-[79%] left-[95.5%] h-[9px] flex justify-end bg-[#FFF4E7] rounded-tl-full absolute '></div>
                            <div className='w-[9px] top-[79%]  h-[9px] flex justify-end bg-[#FFF4E7] rounded-tr-full absolute '></div>

                            <div className=' px-9 text-lg py-[6px] -rounded-[2em]  font-semibold text-white bg-[#1F1401] '>+91 9064099186</div>
                        </div>

                    </div>
                    <div className='hidden md:flex flex-col gap-2 justify-center items-center'>

                        <hr className='w-[1.6px] rounded-3xl h-[5em] bg-[#1F1401]' />
                        <GoDotFill size={9} />
                        <GoDotFill size={9} />

                        <hr className='w-[1.6px] rounded-3xl h-[5em] bg-[#1F1401]' />

                    </div>
                </div>
            </div>
        </div>

    )
}

export default SponUS