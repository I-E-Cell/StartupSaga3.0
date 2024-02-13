import React, { useState } from 'react'
import tracks from '../assets/track.svg'
import train from '../assets/train.svg'
import Modal from './Modal'
import nivesh from '../assets/nivesh.svg'
import meet from '../assets/meet.svg'
import escape from '../assets/escape.svg'
import theme from '../assets/theme.svg'
import { GoDotFill } from "react-icons/go";

import sharktank from '../assets/sharktank.svg'
import mixpanel from 'mixpanel-browser';
mixpanel.init('92a875811535e823719809b9e6df97ea', {debug: true, track_pageview: true, persistence: 'localStorage'});

const Events = () => {
  const [trainPosition, setTrainPosition] = useState({
    top: "-1.25em",
    left: "-10.5em",
  });
  const moveTrain = (stationPosition) => {
    setTrainPosition(stationPosition);
  };
  const [showModal, setShowModal] = useState(false);
  const [display, setDisplay] = useState(" ");
  const displaymodal = (event) => {
    setDisplay(event);
    setShowModal(true);
  };
  const [position, SetPosition] = useState("");
  const closeModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    < div className='relative' >

      <div className=" text-center">
        <h1 className='text-[1.6em] md:text-[3.6em] mx-auto text-center font-extrabold text-[#241303] mt-14'>Timeline</h1>

        <div className='w-[90%] mx-auto flex gap-3 justify-evenly items-center'>
          <hr className='w-[45%] h-[3px] bg-[#241303] mx-auto' />
          <GoDotFill size={10} />
          <GoDotFill size={10} />
          <GoDotFill size={10} />
          <hr className='w-[45%] h-[3px] bg-[#241303]  mx-auto' />
        </div>
      </div>

      <div className="max-w-[90%] crack hidden md:flex crack  items-center w-[87em]  relative overflow-hidden crack border-[3px] my-9 mx-auto border-broq md:h-[36em] rounded-2xl bg-gradient-to-b from-[#FCD7B5] to-[#F8EBD5]  ">
        {/* <img className='absolute z-0  opacity-70 w-[100em] ' src={crack} alt="" /> */}
        {showModal && <Modal EventName={display} closeModal={closeModal} />}

        <div className="flex relative flex-col z-10 gap-0 w-[100%]   items-center">
          <div className=" w-full flex justify-evenly">
            <div className=" w-[7.5em] rounded-lg  text-center flex flex-col gap-5">
              
            </div>
            <div
              onClick={() => displaymodal("Speaker Session")}
              onMouseEnter={() => moveTrain({ top: "-1.25em", left: "11%" })}
              className="w-[7.5em]  pl-7 relative flex flex-col  items-center  border-dashed  border-l-[3px] h-[9em] gap-1  text-[#F0D6B8]  border-[#210D00] "
            >
              <div className='absolute w-3 h-3 rounded-full -top-1 -left-[7px] bg-black' ></div>
              <h1 className='text-[1.1em] whitespace-nowrap text-[#210D00] font-bold'>Speaker Session</h1>
              <h1 className='text-[0.9em] whitespace-nowrap text-[#210D00] font-semibold'>28 March</h1>

              <button onClick={()=>mixpanel.track('SpeakerSession button Clicked')} className='font-semibold whitespace-nowrap px-3 py-[2px] rounded-lg border-[2px] bg-[#9E4D16] border-[#210D00]'>View Details</button>
            </div>
            <div className=" w-[7.5em] rounded-lg  text-center flex flex-col gap-5">
              
            </div>
            <div
              onClick={() => displaymodal("Mini Event")}
              onMouseEnter={() => moveTrain({ top: "-1.25em", left: "42%" })}
              className="w-[7.5em]  pl-7 relative flex flex-col  items-center  border-dashed  border-l-[3px] h-[9em] gap-1  text-[#F0D6B8]  border-[#210D00]"
            >
              <div className='absolute w-3 h-3 rounded-full -top-1 -left-[7px] bg-black' ></div>

              <h1 className='text-[1.1em] whitespace-nowrap text-[#210D00] font-bold'>Mini Event</h1>
              <h1 className='text-[0.9em] whitespace-nowrap text-[#210D00] font-semibold'>29 March</h1>

              <button onClick={()=>mixpanel.track('MiniEvent button Clicked')} className='font-semibold whitespace-nowrap px-3 py-[2px] rounded-lg border-[2px] bg-[#9E4D16] border-[#210D00]'>View Details</button>
            </div>
            <div className=" w-[7.5em] rounded-lg  text-center flex flex-col gap-5">
            
            </div>
            <div
              onClick={() => displaymodal("Shark Tank")}
              onMouseEnter={() => moveTrain({ top: "-1.25em", left: "75%" })}
              className="w-[9em]  pl-14 relative flex flex-col  items-center  border-dashed  border-l-[3px] h-[9em] gap-1  text-[#F0D6B8]  border-[#210D00]"
            >
              <div className='absolute w-3 h-3 rounded-full -top-1 -left-[7px] bg-black' ></div>

              <h1 className='text-[1.1em] whitespace-nowrap text-[#210D00] font-bold'>Shark Tank</h1>
              <h1 className='text-[0.9em] whitespace-nowrap text-[#210D00] font-semibold'>31 March</h1>

              <button onClick={()=>mixpanel.track('Sharktank button Clicked')} className='font-semibold whitespace-nowrap px-3 py-[2px] rounded-lg border-[2px] bg-[#9E4D16] border-[#210D00]'>View Details</button>
            </div>
          </div>
          <img className="" src={tracks} alt="" />
          <div className=" w-full flex justify-evenly">
            <div
              onClick={() => displaymodal("Niveshathon")}
              onMouseEnter={() => moveTrain({ top: "-1.25em", left: "-6%" })}
              className="w-[7.5em]  pl-7 relative flex flex-col  items-center  justify-end border-dashed  border-l-[3px] h-[9em] gap-1  text-[#F0D6B8]  border-[#210D00]"
            >
              <div className='absolute w-3 h-3 rounded-full -bottom-1 -left-[7px] bg-black' ></div>

              
              <h1 className='text-[1.1em] whitespace-nowrap text-[#210D00] font-bold'>Niveshathon</h1>
              <h1 className='text-[0.9em] whitespace-nowrap text-[#210D00] font-semibold'>27 March</h1>

              <button onClick={()=>mixpanel.track('Niveshathon button Clicked')} className='font-semibold whitespace-nowrap  px-3 py-[2px] rounded-lg border-[2px] bg-[#9E4D16] border-[#210D00]'>View Details</button>
            </div>
            <div className=" w-[7.5em] rounded-lg  text-center flex flex-col gap-5">
             
            </div>
            <div
              onClick={() => displaymodal("Ecell Meet")}
              onMouseEnter={() => moveTrain({ top: "-1.25em", left: "26%" })}
              className="w-[7.5em]  pl-7 relative flex flex-col  items-center justify-end   border-dashed  border-l-[3px] h-[9em] gap-1  text-[#F0D6B8]  border-[#210D00]"
            >
              <div className='absolute w-3 h-3 rounded-full -bottom-1 -left-[7px] bg-black' ></div>

              <h1 className='text-[1.1em] whitespace-nowrap text-[#210D00] font-bold'>Ecell Meet</h1>
              <h1 className='text-[0.9em] whitespace-nowrap text-[#210D00] font-semibold'>29 March</h1>

              <button onClick={()=>mixpanel.track('Ecell Meet button Clicked')} className='font-semibold whitespace-nowrap  px-3 py-[2px] rounded-lg border-[2px] bg-[#9E4D16] border-[#210D00]'>View Details</button>
            </div>
            <div className=" w-[7.5em] rounded-lg  text-center flex flex-col gap-5">
             
            </div>
            <div
              onClick={() => displaymodal("NextNiche")}
              onMouseEnter={() => moveTrain({ top: "-1.25em", left: "58%" })}
              className="w-[7.5em]  pl-7 relative flex flex-col  items-center  justify-end  border-dashed  border-l-[3px] h-[9em] gap-1  text-[#F0D6B8]  border-[#210D00]"
            >
              <div className='absolute w-3 h-3 rounded-full -bottom-1 -left-[7px] bg-black' ></div>

              <h1 className='text-[1.1em] whitespace-nowrap text-[#210D00] font-bold'>NextNiche</h1>
              <h1 className='text-[0.9em] whitespace-nowrap text-[#210D00] font-semibold'>30 March</h1>

              <button onClick={()=>mixpanel.track('NextNiche button Clicked')} className='font-semibold whitespace-nowrap  px-3 py-[2px] rounded-lg border-[2px] bg-[#9E4D16] border-[#210D00]'>View Details</button>
            </div>
            <div className=" w-[7.5em] rounded-lg  text-center flex flex-col gap-5">
              
            </div>
          </div>
        </div>
        <div className="absolute  z-10  w-[85%] lg:w-full">
          <img
            className="imgg w-[16em] relative"
            style={{ top: trainPosition.top, left: trainPosition.left }}
            src={train}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
