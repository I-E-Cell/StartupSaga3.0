import React, { useState } from 'react'
import crack from '../assets/crack.svg'
import tracks from '../assets/track.svg'
import train from '../assets/train.svg'
import Modal from './Modal'
import nivesh from '../assets/nivesh.svg'
import meet from '../assets/meet.svg'
import escape from '../assets/escape.svg'
import theme from '../assets/theme.svg'

import sharktank from '../assets/sharktank.svg'

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
    <div id='events' className="max-w-[90%] crack hidden md:flex crack  items-center w-[87em]  relative overflow-hidden crack border-[3px] my-14 mx-auto border-broq md:h-[36em] rounded-2xl bg-gradient-to-b from-[#FCD7B5] to-[#F8EBD5]  ">
      {/* <img className='absolute z-0  opacity-70 w-[100em] ' src={crack} alt="" /> */}
      {showModal && <Modal EventName={display} closeModal={closeModal} />}
      <div className="flex flex-col z-10 gap-8 w-[100%]   items-center">
        <div className=" w-full flex justify-evenly">
          <div className=" w-[7.5em] rounded-lg  text-center flex flex-col gap-5">
            <h2 className="text-lg font-semibold text-center"> Niveshathon</h2>
            <h3 className=" font-bold">27/03/2024</h3>
          </div>
          <div
            onClick={() => displaymodal("Speaker Session")}
            onMouseEnter={() => moveTrain({ top: "-1.25em", left: "11%" })}
            className="w-[7.5em] flex flex-col justify-center items-center rounded-lg h-[7.5em] gap-5  text-[#F0D6B8] border-[1px] border-[#210D00] bg-[#9E4D16]"
          >
            <img className='w-[70%] ' src={nivesh} alt="" />
            <h1 className='font-semibold'>Register Here !</h1>
          </div>
          <div className=" w-[7.5em] rounded-lg  text-center flex flex-col gap-5">
            <h2 className="text-lg font-semibold text-center">
              Shark Tank AIT
            </h2>
            <h3 className=" font-bold">29/03/2024</h3>
          </div>
          <div
            onClick={() => displaymodal("Ecell Meet")}
            onMouseEnter={() => moveTrain({ top: "-1.25em", left: "42%" })}
            className="w-[7.5em] flex flex-col justify-center items-center rounded-lg h-[7.5em] gap-5  text-[#F0D6B8] border-[1px] border-[#210D00] bg-[#9E4D16]"
          >
            <img className='w-[60%] ' src={meet} alt="" />
            <h1 className='font-semibold'>Register Here !</h1>
          </div>
          <div className=" w-[7.5em] rounded-lg  text-center flex flex-col gap-5">
            <h2 className="text-lg font-semibold text-center"> Escape Room</h2>
            <h3 className=" font-bold">30/03/2024</h3>
          </div>
          <div
            onClick={() => displaymodal("Theme-based Hackathon")}
            onMouseEnter={() => moveTrain({ top: "-1.25em", left: "75%" })}
            className="w-[7.5em] flex flex-col justify-center items-center rounded-lg h-[7.5em] gap-5  text-[#F0D6B8] border-[1px] border-[#210D00] bg-[#9E4D16]"
          >
            <img className='w-[45%] ' src={theme} alt="" />
            <h1 className='font-semibold'>Register Here !</h1>
          </div>
        </div>
        <img className="" src={tracks} alt="" />
        <div className=" w-full flex justify-evenly">
          <div
            onClick={() => displaymodal("Niveshathon")}
            onMouseEnter={() => moveTrain({ top: "-1.25em", left: "-6%" })}
            className="w-[7.5em]  flex flex-col justify-center items-center font-semibold gap-5  text-[#F0D6B8] rounded-lg h-[7.5em] border-[1px] border-[#210D00] bg-[#9E4D16]"
          >
            <img className='w-[70%] ' src={nivesh} alt="" />
            <h1 className='font-semibold'>Register Here !</h1>
          </div>
          <div className=" w-[7.5em] rounded-lg  text-center flex flex-col gap-5">
            <h2 className="text-lg font-semibold text-center">
              {" "}
              Speaker Session
            </h2>
            <h3 className=" font-bold">28/03/2024</h3>
          </div>
          <div
            onClick={() => displaymodal("Shark Tank AIT")}
            onMouseEnter={() => moveTrain({ top: "-1.25em", left: "26%" })}
            className="w-[7.5em] flex flex-col justify-center items-center h-[7.5em] rounded-lg  gap-5  text-[#F0D6B8] border-[1px] border-[#210D00] bg-[#9E4D16]"
          >
            <img className='w-[40%] ' src={sharktank} alt="" />
            <h1 className='font-semibold'>Register Here !</h1>
          </div>
          <div className=" w-[7.5em] rounded-lg  text-center flex flex-col gap-5">
            <h2 className="text-lg font-semibold text-center"> Ecell Meet</h2>
            <h3 className=" font-bold">29/03/2024</h3>
          </div>
          <div
            onClick={() => displaymodal("Escape Room")}
            onMouseEnter={() => moveTrain({ top: "-1.25em", left: "58%" })}
            className="w-[7.5em] flex flex-col justify-center items-center rounded-lg h-[7.5em] gap-5  text-[#F0D6B8] border-[1px] border-[#210D00] bg-[#9E4D16]"
          >
            <img className='w-[45%] ' src={escape} alt="" />
            <h1 className='font-semibold'>Register Here !</h1>
          </div>
          <div className=" w-[7.5em] rounded-lg  text-center flex flex-col gap-5">
            <h2 className="text-lg font-semibold text-center">
              {" "}
              Startup Competition 
            </h2>
            <h3 className=" font-bold">30/03/2024</h3>
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
  );
};

export default Events;
