import React, {useState} from 'react'
import crack from '../assets/crack.svg'
import tracks from '../assets/track.svg'
import train from '../assets/train.svg'
import Modal from './Modal'
const Events = () => {
  
  const [trainPosition, setTrainPosition] = useState({ top: '-1.25em', left: '-10.5em' });
  const moveTrain = (stationPosition) => {
    setTrainPosition(stationPosition);
  };
 const [showModal, setShowModal] =useState(false)
 const [display, setDisplay] = useState(' ')
 const displaymodal=(event)=>{
 setDisplay(event);
 setShowModal(true)
 }
  const [position, SetPosition] = useState('')
  const closeModal = () => {
    setShowModal(prevShowModal => !prevShowModal); 
  };
  
  return (
    
      <div className='max-w-[90%] crack hidden md:flex crack  items-center w-[87em] gap-7 relative overflow-hidden crack border-[3px] my-14 mx-auto border-broq md:h-[36em] rounded-2xl bg-gradient-to-b from-[#FCD7B5] to-[#F8EBD5]  '>
        {/* <img className='absolute z-0  opacity-70 w-[100em] ' src={crack} alt="" /> */}
        {showModal && <Modal EventName={display} closeModal={closeModal} />}
        <div className='flex flex-col z-10 gap-7 w-[100%]   items-center'>


          <div className=' w-full flex justify-evenly'>
            <div className=' w-[7.5em] rounded-lg  text-center flex flex-col gap-5'>
              <h2 className='text-lg font-semibold text-center'> Event A

              </h2>
              <h3 className=' font-bold'>
                28/3/2004
              </h3>
            </div>
            <div onClick={() => displaymodal('Niveshathon 1')} onMouseEnter={() => moveTrain({ top: '-1.25em', left: '11%' })} className='w-[7.5em] rounded-lg h-[7.5em] border-[1px] border-[#210D00] bg-[#9E4D16]'>

            </div>
            <div className=' w-[7.5em] rounded-lg  text-center flex flex-col gap-5'>
              <h2 className='text-lg font-semibold text-center'> Event B

              </h2>
              <h3 className=' font-bold'>
                28/3/2004
              </h3>
            </div>
            <div onClick={() => displaymodal('Niveshathon 3')} onMouseEnter={() => moveTrain({ top: '-1.25em', left: '42%' })} className='w-[7.5em] rounded-lg h-[7.5em] border-[1px] border-[#210D00] bg-[#9E4D16]'>

            </div>
            <div className=' w-[7.5em] rounded-lg  text-center flex flex-col gap-5'>
              <h2 className='text-lg font-semibold text-center'> Event c

              </h2>
              <h3 className=' font-bold'>
                28/3/2004
              </h3>
            </div>
            <div onClick={() => displaymodal('Niveshathon 2')} onMouseEnter={() => moveTrain({ top: '-1.25em', left: '75%' })} className='w-[7.5em] rounded-lg h-[7.5em] border-[1px] border-[#210D00] bg-[#9E4D16]'>

            </div>
          </div>
          <img className='' src={tracks} alt="" />
          <div className=' w-full flex justify-evenly'>
            <div onClick={() => displaymodal('Niveshathon 4')}  onMouseEnter={() => moveTrain({ top: '-1.25em', left: '-6%' })} className='w-[7.5em] rounded-lg h-[7.5em] border-[1px] border-[#210D00] bg-[#9E4D16]'>

            </div>
            <div className=' w-[7.5em] rounded-lg  text-center flex flex-col gap-5'>
              <h2 className='text-lg font-semibold text-center'> Event c

              </h2>
              <h3 className=' font-bold'>
                28/3/2004
              </h3>
            </div>
            <div onClick={() => displaymodal('Niveshathon 5')} onMouseEnter={() => moveTrain({ top: '-1.25em', left: '26%' })} className='w-[7.5em] h-[7.5em] rounded-lg  border-[1px] border-[#210D00] bg-[#9E4D16]'>

            </div>
            <div className=' w-[7.5em] rounded-lg  text-center flex flex-col gap-5'>
              <h2 className='text-lg font-semibold text-center'> Event y
              </h2>
              <h3 className=' font-bold'>
                28/3/2004
              </h3>
            </div>
            <div onClick={() => displaymodal('Niveshathon 6')} onMouseEnter={() => moveTrain({ top: '-1.25em', left: '58%' })} className='w-[7.5em] rounded-lg h-[7.5em] border-[1px] border-[#210D00] bg-[#9E4D16]'>

            </div>
            <div className=' w-[7.5em] rounded-lg  text-center flex flex-col gap-5'>
              <h2 className='text-lg font-semibold text-center'> Event x
              </h2>
              <h3 className=' font-bold'>
                28/3/2004
              </h3>
            </div>
          </div>
        </div>
        <div className='absolute  z-10  w-[85%] lg:w-full' >
            <img className='imgg w-[16em] relative' style={{ top: trainPosition.top, left: trainPosition.left }} src={train} alt="" />
        </div>

      </div>
    
  )
}

export default Events