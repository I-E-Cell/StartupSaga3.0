// ------------------------------Footer----------------------------------//

import React from 'react'
import { FaInstagram, FaLinkedinIn, FaFacebook, FaTwitter, FaYoutube, FaHeart, } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const Footer = () => {
    return (<>
        <div className='w-[100%] bg-[#241303] mx-auto'>
            <div id='top' className=' max-w-[98%] w-[90em] mx-auto h-[31em] sm:h-[34em] md:h-[21em] flex  flex-col md:flex-row md:mt-[8em] mt-[6em]'>

                <div className='w-[100%] align-centre justify-center md:w-[30%]'>
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}

                    >
                        <div className='text-white  mx-auto w-[80%] justify-center rounded-xl'>

                            <div className="mx-auto rounded-xl overflow-x-hidden justify-center pt-3">
                                <iframe className='rounded-xl  mb-6 mx-auto ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.64883570219!2d73.87434400449611!3d18.607325966357873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c70090000001%3A0x160a20f3d0273495!2sArmy%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1700741837638!5m2!1sen!2sin"></iframe>
                            
                            </div>
                            <h1 className='w-[80%]  mx-auto text-center textt '>Army Institute of Technology,Pune
                                Dighi Hills Pune 411015</h1>
                        </div>
                        <div className='flex  justify-evenly lg:px-16 my-5  '>
                            <a target='_blank' href='https://www.facebook.com/ecellait' className=' hover:scale-110 duration-200 p-2 bg-white rounded-full'>
                                <FaFacebook size={22} className='mx-auto ' />
                            </a>
                            <a target='_blank' href='https://www.instagram.com/ecell_ait/' className='hover:scale-110 duration-200 p-2 bg-white rounded-full'>
                                <FaInstagram size={22} className='mx-auto' />
                            </a>
                            <a target='_blank' href='https://twitter.com/ecell_aitpune' className='hover:scale-110 duration-200 p-2 bg-white rounded-full'>
                                <FaTwitter size={22} className='mx-auto' />
                            </a>
                            <a target='_blank' href='https://www.linkedin.com/company/innovation-entrepreneurship-cell/' className='hover:scale-110 duration-200 p-2 bg-white rounded-full'>
                                <FaLinkedinIn size={22} className='mx-auto' />
                            </a>
                            <a target='_blank' href='https://www.youtube.com/@aitecell' className='hover:scale-110 duration-200 p-2 bg-white rounded-full'>
                                <FaYoutube size={22} className='mx-auto ' />
                            </a>

                        </div>
                    </motion.div>


                </div>
                <div className='w-[100%] flex-col relative mx-auto right-0 md:w-[70%]'>
                    <div className='flex    md:gap-16 md:justify-end relative mx-auto  md:-left-32'>

                     
                        <div className='textt text-white mx-auto md:mx-0 relative rounded-xl p-2 px-2 border-white border-[1px] top-4 ' >

                            <p className='text-xs mb-2 max-w-[180px] '>“If you look at history, innovation doesn’t come just from giving people incentives; it comes from creating environments where their ideas can connect.“</p>

                            <a href='/' className='flex justify-end gap-2 text-[#B8BFFF]'  >I & E Cell <BsArrowUpRight color='#B8BFFF' size={15} /></a>

                        </div>


                    </div>

                    <div className='text-[30px] relative   textt sm:text-[65px] md:text-[70px] lg:text-[97px] mx-[10%]   top-[40px]   text-[#DA6625] hidden sm:flex justify-center md:justify-start font-bold text-wrap'>
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}

                        >
                            <h1 className=' my-0'>Startup Saga </h1>
                        </motion.div>

                    </div>

                </div>
                {/* FOOTER  */}
            </div>
            <div className='h-6 mx-auto flex align-middle items-center  bg-[#B8BFFF]'>
                
                <h1 className='flex text-[sm] mx-auto justify-center '> Made with  <FaHeart color='red' className=' mt-1 mx-2' />   by I&E Cell</h1>
                

            </div>
        </div>
    </>)
}

export default Footer