import React from 'react'
import ss from '../assets/ssb.svg'
import { motion } from 'framer-motion'


const EventData = [
    {
        logo: '',
        EventName: 'Niveshathon',
        discription: 'Hone your trading skills using virtual currency and achieve the highest profit to conquer your way through others.',
        date: '27 Mar 2024',
        button: 'www.google.com',
        prize: "4 lakh",
    },
    {
        logo: '',
        EventName: 'Speaker Session',
        discription: 'Discover funding hacks, growth strategies, and tips to launch your dream  through our expert speaker sessions.',
        date: '28 Mar 2024',
        button: 'www.google.com',
        prize: "4 lakh",
    },
    {
        logo: '',
        EventName: 'Shark Tank AIT',
        discription: 'Pitch your best ideas to a panel of expert judges for a chance to secure big funding opportunities. A event exclusively for the students of AIT',
        date: '29 Mar 2024',
        button: 'www.google.com',
        prize: "4 lakh",
    },
    {
        logo: '',
        EventName: 'Ecell Meet',
        discription: 'An  opportunity for various entrepreneurship cells to meet and exchange knowledge to build connections and grow together.',
        date: '29 Mar 2024',
        button: 'www.google.com',
        prize: "4 lakh",

    },
    {
        logo: '',
        EventName: 'Escape Room',
        discription: 'A fun mini event for participants to get replenished and test their knowledge as well',
        date: '30 Mar 2024',
        button: 'www.google.com',
        prize: "4 lakh",
    },
    {
        logo: '',
        EventName: 'Theme-based Hackathon',
        discription: 'A theme-based 24 hour long hackathon ',
        date: '30 Mar 2024',
        button: 'www.google.com',
        prize: "4 lakh",

    },
]

function Modal(props) {
    const eventData = EventData.find(event => event.EventName === props.EventName);


    return (
        <a onClick={props.closeModal}>
            {eventData && (
                <div key={eventData.EventName} className="overflow-y-auto overflow-x-hidden flex fixed top-0 right-0 left-0 z-50 justify-center bg-orange-200/30 backdrop-blur-sm items-center h-[100vh] w-full md:inset-0 max-h-full">
                    <div className="relative p-4 max-w-lg  ">
                        <div className="relative  rounded-lg sponus shadow bg-[#FFF4E7] ">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-700">
                                <div className='flex items-center gap-5'>
                                    <div className='w-12 flex justify-center items-center h-12 bg-[#fff]/60 rounded-lg rotate-45'>
                                        <img className='w-7 -rotate-45' src={ss} alt="" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 d">
                                        {eventData.EventName}
                                    </h3>
                                </div>
                                <button type="button" onClick={props.closeModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center " data-modal-toggle="select-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only"  >Close modal</span>
                                </button>
                            </div>
                            <div className='w-[90%] mx-auto font-semibold text-amber-900'>
                                {eventData.date}
                            </div>
                            <div className='w-[90%] text-center  mt-4 font-bold text-xl mx-auto  text-amber-900'>
                                Prizes worth <span className='text-[1.5em]'>{eventData.prize}+</span>
                            </div>
                            <div className="p-4 md:p-5 text-center  mx-auto justify-center">
                                <p className='max-w-[90%]  font-normal text-[0.95em] text-justify'>
                                    {eventData.discription}
                                </p>
                            </div>
                            <div className="p-4 md:p-5">
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }} className='  w-full text-lg py-1 -rounded-[2em] rounded-lg text-white bg-[#1F1401] '>
                                    Register Now
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </a>




    )
}

export default Modal