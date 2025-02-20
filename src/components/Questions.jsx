import  { useState } from 'react';

// SVGs for plus and minus signs
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m-7-7h14"/>
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"/>
  </svg>
);

const faqs = [
  {
    id: 1,
    question: "Who can participate in Startup Saga?",
    answer: "Students, aspiring entrepreneurs, and startup enthusiasts from all disciplines and colleges are welcome to participate."
  },
  {
    id: 2,
    question: "How can I stay updated on event details?",
    answer: "Follow Startup Saga’s social media pages or check the official website for updates."
  },
  {
    id: 3,
    question: "Can we get funding for our startup at SharkTank AIT?",
    answer: "Yes! If your pitch impresses the investors, you may receive funding, mentorship, or incubation offers."
  },
  {
    id: 4,
    question: "Can non-technical students participate in the hackathon?",
    answer: "Yes!"
  },
  {
    id: 5,
    question: "Will there be accommodation for outstation participants?",
    answer: "Yes, accommodation will be provided for participants residing outside Pune."
  },
  {
    id: 6,
    question: "Will there be any networking opportunities?",
    answer: "Absolutely! Events like the E-Cell Meet and Startup Expo provide great opportunities to connect with peers, mentors, and investors."
  }
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='w-full'>
      <section className='text-white rounded-lg'>
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className='w-full relative cursor-pointer p-4 rounded-lg'
              onClick={() => handleClick(index)}
            >
              <div className='flex md:items-center justify-between'>
                <p className='font-bold text-[0.9em] md:text-[32px] text-white'>{String(faq.id).padStart(2, '0')}.</p>
                <div className='flex-1 ml-3 w-[4em] justify-around gap-2'>
                  <p className= ' text-[0.9em] md:text-[1.2em]'>{faq.question}</p>
                </div>
                <div className='absolute  top-4 right-0 md:top-6 md:right-2 flex items-center justify-center text-white transition-transform duration-300'>
                  {activeIndex === index ? <MinusIcon /> : <PlusIcon />}
                </div>
              </div>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className='mt-4 text-[13px] md:text-[16px]'>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Questions;