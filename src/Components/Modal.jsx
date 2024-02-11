import React from 'react'
import ss from '../assets/ssb.svg'
import { motion } from 'framer-motion'


const EventData = [
    {
        logo: '',
        EventName: 'Niveshathon',
        discription: ' Feel the pulse of the market without risking a dime in Niveshathon: Dive in. Beyond Monopoly money, board games. It is a game where you can trade without any real money with real-time market data. ',
        date: '27 Mar 2024',
        button: 'www.google.com',
        prize: "₹20,000",
    },
    {
        logo: '',
        EventName: 'Speaker Session',
        discription: 'Discover funding hacks, growth strategies, and get insider tips from our experienced entrepreneurs to ensure a smooth and successful launch that sets you on the path to success',
        date: '28 Mar 2024',
        button: 'www.google.com',
        prize: "₹10,000",
    },
    {
        logo: '',
        EventName: 'Ecell Meet',
        discription: 'The gathering of key stakeholders of E-cell from the various colleges across Pune to connect is not just a boring party but it’s like engaging in discussions and sharing insights. This gathering is a creative melting pot where like-minded people come to collaborate.',
        date: '29 Mar 2024',
        button: 'www.google.com',
        prize: "₹20,000",
    },
    {
        logo: '',
        EventName: 'Mini Event',
        discription: 'Get your brain buzzing with mind-bending puzzles, test your agility in high-octane competitions, and ignite your competitive spirit like never before. Stay tuned for updates on our electrifying games and get ready to redefine what it means to be a champion! ',
        date: '29 Mar 2024',
        button: 'www.google.com',
        prize: "₹30,000",

    },
    {
        logo: '',
        EventName: 'NextNiche',
        discription: 'Join us at NextNiche a business hackathon for a transformative experience! In 24 hours come up with an innovative startup with your  unique product and prototype idea. Gain helpful connections, guidance, and rewards to kickstart business journey',
        date: '30 Mar 2024',
        button: 'www.google.com',
        prize: "₹1 lakh",
    },
    {
        logo: '',
        EventName: 'Shark Tank',
        discription: 'Shark Tank is an inter college event which provides an opportunity for students to showcase their Startup ideas in front of a panel of judges, taking inspiration from the popular TV show Shark Tank. The judges will also invest in the startups if they deem it worthy and the negotiation will happen on the spot.   ',
        date: '30 Mar 2024',
        button: 'www.google.com',
        prize: "₹1 lakh",

    },
]

function Modal(props) {
    const eventData = EventData.find(event => event.EventName === props.EventName);


    return (
        <a onClick={props.closeModal}>
            {eventData && (
                <div key={eventData.EventName} className="overflow-y-auto overflow-x-hidden  flex fixed top-0 right-0 left-0 z-50 justify-center bg-orange-200/30 backdrop-blur-sm items-center h-[100vh] w-full md:inset-0 max-h-full">
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
                                <button type="button"  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center " data-modal-toggle="select-modal">
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
                            <div className="p-4 md:p-5 text-center flex mx-auto justify-center">
                                <p className='max-w-[90%]  font-normal text-[0.95em] text-justify'>
                                    {eventData.discription}
                                </p>
                            </div>
                            <div className="p-4 md:p-5 ">
                                <a  href="#" target='_blank'><motion.button disabled  onClick={props.closeModal} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }} className='mb-2 md:mb-0  w-full text-lg py-1 -rounded-[2em] rounded-lg text-white bg-[#1F1401] disabled:bg-[#7d7a74]  '>
                                    Coming Soon...
                                </motion.button></a>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </a>




    )
}

export default Modal