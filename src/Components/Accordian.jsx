import React, { useState } from "react";
import cactusopen from '../assets/cactusopen.svg'
import cactusclose from '../assets/cactusclose.svg'
import mixpanel from 'mixpanel-browser';
mixpanel.init('92a875811535e823719809b9e6df97ea', {debug: true, track_pageview: true, persistence: 'localStorage'}); 

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 w-[100%]  sm:w-[90%] lg:w-[30em] mx-auto relative   md:bottom-3 mt-[1em]">
      <button
        onClick={() => {setAccordionOpen(!accordionOpen); mixpanel.track('FAQ accessed')}}
        className="flex  justify-start gap-3 sm:gap-8 items-center w-full"
      >
        {accordionOpen ? <img
          className="w-9 sm:w-11 shrink-0 ml-8"

          src={cactusclose}

        /> : <img
          className="w-9 sm:w-11 shrink-0 ml-8"

          src={cactusopen} />}

        <span className="text-left text-[1.1em]   ">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out  font-medium mb-4 mt-2 text-sm md:text-sm ${accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden  left-[5.8em] sm:left-[8.2em]  absolute  text-left ">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;