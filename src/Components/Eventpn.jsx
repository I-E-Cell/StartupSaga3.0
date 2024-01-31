import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ss from '../assets/ssnew.svg'
import Modal from './Modal'
import nivesh from '../assets/nivesh.svg'
import meet from '../assets/meet.svg'
import escape from '../assets/escape.svg'
import theme from '../assets/theme.svg'

import sharktank from '../assets/sharktank.svg'

const Eventpn = () => {


  const [showModal, setShowModal] = useState(false)
  const [display, setDisplay] = useState(' ')
  const displaymodal = (event) => {
    setDisplay(event);
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <div class=" crack  max-w-[90%] rounded-xl mx-auto bg-gradient-to-b from-[#FCD7B5] to-[#F8EBD5]  md:hidden flex flex-col justify-center py-12 mt-12">
      {showModal && <Modal EventName={display} closeModal={closeModal} />}
      <div class="py-3 max-w-md mx-auto w-full px-2 sm:px-0">

        <div class="relative text-[#410C00] antialiased text-sm font-semibold">


          <div class="block w-1 bg-[#410C00] absolute h-full left-1/2 transform -translate-x-1/2"></div>


          <motion.div initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} class="mt-6  mb-12">
            <div class="flex flex-row items-center">
              <div class="flex justify-start  mx-auto items-center">
                <div onClick={() => displaymodal('Niveshathon')} class="w-[8.5em] h-[8.5em] ">
                  <div class="p-4 border-[1px] gap-5  text-[#F0D6B8]  flex flex-col justify-center items-center border-[#210D00] bg-[#9E4D16] w-[8.5em] h-[8.5em] rounded shadow">
                    <img className='w-[70%] ' src={nivesh} alt="" />
                    <h1 className=' whitespace-nowrap'>Register Here!</h1>
                  </div>
                </div>
              </div>
              <div class="rounded-full bg-[#E89553] border-white border-4 w-8 h-8 absolute left-1/2 translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <img src={ss} class="h-5 w-5 text-white">

                </img>
              </div>
              <div class="flex justify-end  mx-auto items-center">
                <div class="w-[8.5em]">
                  <div class=" w-[8.5em] h-[8.5em] flex items-center justify-center rounded ">
                    Niveshathon
                    27/03/2024
                  </div>
                </div>
              </div>
            </div>
          </motion.div>


          <motion.div initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} class="mt-6  mb-12">
            <div class="flex flex-row items-center">
              <div class="flex justify-start  mx-auto items-center">
                <div class="w-[8.5em] h-[8.5em]">
                  <div class=" w-[8.5em] h-[8.5em] flex items-center justify-center rounded ">
                    Speaker Session
                    28/03/2024
                  </div>
                </div>
              </div>
              <div class="rounded-full bg-[#E89553] border-white border-4 w-8 h-8 absolute left-1/2 translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <img src={ss} class="h-5 w-5 text-white">

                </img>
              </div>
              <div class="flex justify-end  mx-auto items-center">
                <div class="w-[8.5em]">
                  <div onClick={() => displaymodal('Speaker Session')} class="p-4 w-[8.5em] h-[8.5em] border-[1px] gap-5  text-[#F0D6B8] flex flex-col justify-center items-center border-[#210D00] bg-[#9E4D16] rounded shadow">
                    <img className='w-[40%] ' src={sharktank} alt="" />
                    <h1 className=' whitespace-nowrap'>Register Here !</h1>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>



          <motion.div initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} class="mt-6  mb-12">
            <div class="flex flex-row items-center">
              <div class="flex justify-start  mx-auto items-center">
                <div onClick={() => displaymodal('Ecell Meet')} class="w-[8.5em] h-[8.5em]">
                  <div class="p-4 border-[1px]  flex flex-col justify-center items-center gap-5  text-[#F0D6B8] border-[#210D00] bg-[#9E4D16] w-[8.5em] h-[8.5em] rounded shadow">
                    <img className='w-[40%] ' src={sharktank} alt="" />
                    <h1 className=' whitespace-nowrap'>Register Here !</h1>

                  </div>
                </div>
              </div>
              <div class="rounded-full bg-[#E89553] border-white border-4 w-8 h-8 absolute left-1/2 translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <img src={ss} class="h-5 w-5 text-white">

                </img>
              </div>
              <div class="flex justify-end  mx-auto items-center">
                <div class="w-[8.5em]">
                  <div class=" w-[8.5em] h-[8.5em] flex items-center justify-center rounded ">
                    Shark Tank AIT
                    29/03/2024
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} class="mt-6  mb-12">
            <div class="flex flex-row items-center">
              <div class="flex justify-start  mx-auto items-center">
                <div class="w-[8.5em] h-[8.5em]">
                  <div class=" w-[8.5em] h-[8.5em] flex items-center justify-center rounded ">
                    Ecell Meet
                    29/03/2024
                  </div>
                </div>
              </div>
              <div class="rounded-full bg-[#E89553] border-white border-4 w-8 h-8 absolute left-1/2 translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <img src={ss} class="h-5 w-5 text-white">

                </img>
              </div>
              <div class="flex justify-end  mx-auto items-center">
                <div class="w-[8.5em]">
                  <div onClick={() => displaymodal('Shark Tank AIT')} class="p-4 w-[8.5em] gap-5  text-[#F0D6B8] h-[8.5em] border-[1px] border-[#210D00]  flex flex-col justify-center items-center bg-[#9E4D16] rounded shadow">
                    <img className='w-[60%] ' src={meet} alt="" />
                    <h1 className=' whitespace-nowrap'>Register Here !</h1>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>


          <motion.div initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} class="mt-6  mb-12">
            <div class="flex flex-row items-center">
              <div class="flex justify-start  mx-auto items-center">
                <div onClick={() => displaymodal('Escape Room')} class="w-[8.5em] h-[8.5em]">
                  <div class="p-4  flex flex-col justify-center items-center border-[1px] gap-5  text-[#F0D6B8] border-[#210D00] bg-[#9E4D16] w-[8.5em] h-[8.5em] rounded shadow">
                    <img className='w-[45%] ' src={escape} alt="" />
                    <h1 className=' whitespace-nowrap'>Register Here !</h1>

                  </div>
                </div>
              </div>
              <div class="rounded-full bg-[#E89553] border-white border-4 w-8 h-8 absolute left-1/2 translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <img src={ss} class="h-5 w-5 text-white">

                </img>
              </div>
              <div class="flex justify-end  mx-auto items-center">
                <div class="w-[8.5em]">
                  <div class=" w-[8.5em] h-[8.5em] flex items-center justify-center rounded ">
                    Escape Room
                    30/03/2024
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} class="mt-6  mb-12">
            <div class="flex flex-row items-center">
              <div class="flex justify-start  mx-auto items-center">
                <div class="w-[8.5em] h-[8.5em]">
                  <div class=" w-[8.5em] h-[8.5em] flex items-center justify-center rounded ">
                    Startup Competition
                    30/03/2024
                  </div>
                </div>
              </div>
              <div class="rounded-full bg-[#E89553] border-white border-4 w-8 h-8 absolute left-1/2 translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <img src={ss} class="h-5 w-5 text-white">

                </img>
              </div>
              <div class="flex justify-end  mx-auto items-center">
                <div class="w-[8.5em]">
                  <div onClick={() => displaymodal('Theme-based Hackathon')} class="p-4 w-[8.5em] h-[8.5em] border-[1px] border-[#210D00] bg-[#9E4D16] gap-5  text-[#F0D6B8]  flex flex-col justify-center items-center rounded shadow">
                    <img className='w-[45%] ' src={theme} alt="" />
                    <h1  className=' whitespace-nowrap text-semibold'>Register Here !</h1>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>









        </div>

      </div>
    </div>
  )
}

export default Eventpn