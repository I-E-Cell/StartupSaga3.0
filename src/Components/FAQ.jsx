import React from 'react'
import Accordion from './Accordian'
import Faq from '../assets/FAQS.svg'
import questionmark from '../assets/questionmark.svg'
import asd from '../assets/asd.svg'
import asd2 from '../assets/asd2.svg'


const FAQ = () => {
  return (
    <div className=' mt-7 md:mt-[6em] max-w-[87em] relative overflow-hidden gradi w-[91%] mx-auto flex flex-col lg:gap-8 gap:2 px-6 border-[#A46B3A] pb-[3.50em] border-[3.5px] rounded-2xl'>
      <div className='absolute gradii h-[100%] w-[30em] skew-x-[60deg] bg-[#FF9B31]'>

      </div>
      <img className='absolute w-[30em] -left-[5em] top-[26%] md:top-[26%] lg:top-[24%] ' src={asd} alt="" />
      <img className='absolute w-[80em] hidden md:block left-[20em] top-[25%] lg:top-[23%]' src={asd2} alt="" />

      <img className='w-[9em] mx-auto relative z-10 py-6 mb-[5em]' src={Faq} alt="" />
      <div className='flex flex-col relative -left-7 sm:left-0 lg:gap-10  z-10'>
        <div className='flex flex-col lg:flex-row gap:3 lg:gap-0 justify-around '>
          <Accordion title='Do team members need to be of same year?' answer='No' />
          <Accordion title='Will there be accomodation for theme based hackathon?' answer='Yes, but it will be paid' />

        </div>
        <div className='flex flex-col lg:flex-row gap:3 lg:gap-0  justify-around '>
          <Accordion title='What is team size in theme based hackathon?' answer='1-3' />
          <Accordion title='Is there any registration cost for events?' answer='No' />

        </div>
        <div className='flex flex-col lg:flex-row gap:3 lg:gap-0  justify-around '>
          
          <Accordion title='Is Shark Tank AIT an inter-college event?' answer='No,it is only for students of AIT'/>
          <Accordion title='Is Niveshathon offline or online event?' answer='Niveshathon is a online event' />

        </div>

      </div>
      <img className='  w-[0em] md:w-[15em] absolute question' src={questionmark} alt="" />






    </div>
  )
}

export default FAQ