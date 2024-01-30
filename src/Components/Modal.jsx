import React from 'react'
import ss from '../assets/ssnew.svg'

const EventData = [
    {
        logo: '',
        EventName: 'Niveshathon',
        discription: 'Hone your trading skills using virtual currency and achieve the highest profit to conquer your way through others.',
        date: '28 Jan 2024',
        button: 'www.google.com',
    },
    {
        logo: '',
        EventName: 'Shark Tank AIT',
        discription: 'Pitch your best ideas to a panel of expert judges for a chance to secure big funding opportunities.',
        date: '27 Jan 2024',
        button: 'www.google.com',
    },
    {
        logo: '',
        EventName: 'Niveshathon 3',
        discription: 'This is a paper trading competition where participants test their trading skills in a real-time platform eliminating the natural fear of losing money and competing with others for the highest final portfolio valuation.',
        date: '27 Jan 2024',
        button: 'www.google.com',
    },
    {
        logo: '',
        EventName: 'Niveshathon 4',
        discription: 'This is a paper trading competition where participants test their trading skills in a real-time platform eliminating the natural fear of losing money and competing with others for the highest final portfolio valuation.',
        date: '27 Jan 2024',
        button: 'www.google.com',
    },
    
]

function Modal(props) {
    const eventData = EventData.find(event => event.EventName === props.EventName);
   

    return (
        <>
            {eventData && (
                <div key={eventData.EventName} className="overflow-y-auto overflow-x-hidden flex fixed top-0 right-0 left-0 z-50 justify-center bg-orange-200/30 backdrop-blur-sm items-center h-[100vh] w-full md:inset-0 max-h-full">
                    <div className="relative p-4 max-w-lg ">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-600">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-700">
                                <div className='flex items-center gap-5'>
                                    <div className='w-12 flex justify-center items-center h-12 bg-[#ffc0cb]/60 rounded-lg rotate-45'>
                                        <img className='w-5 -rotate-45' src={ss} alt="" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {eventData.EventName}
                                    </h3>
                                </div>
                                <button type="button" onClick={props.closeModal}  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="select-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only"  >Close modal</span>
                                </button>
                            </div>
                            <div className='w-[90%] mx-auto font-semibold text-amber-200'>
                                {eventData.date}
                            </div>
                            <div className="p-4 md:p-5 text-j">
                                <p className='max-w-[90%] text-white font-light text-sm text-justify'>
                                    {eventData.discription}
                                </p>
                            </div>
                            <div className="p-4 md:p-5">
                                <button className="text-white inline-flex w-full justify-center bg-[#1F1401] hover:bg-[#1f140169] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    Register Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </>




    )
}

export default Modal