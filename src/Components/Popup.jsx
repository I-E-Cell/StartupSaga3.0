import React, {useState} from 'react'
import ss from '../assets/ssb.svg'
import wapp from '../assets/wapp.png'

function Popup (){
    const [popup, setPopup]=useState(true)
    function pressed(){
        setPopup(!popup);
        
        
    };
  return (
    <> { popup?
    <div className='w-[100%] h-[100vh]  z-40 backdrop-filter text-[#3E3126] backdrop-blur-sm  top-[0%] fixed flex justify-center items-center'>
        <div className='w-[20em] md:w-[22em] h-[15em] rounded-2xl bg-[#D2AD93]'>
            
            <img className='relative left-[4.5em] md:left-[5.5em] overflow-hidden border-[#3E3126] rounded-2xl border-[2px] -top-[4em] h-[11em]' src={wapp} alt="" />
            {/* <h1 className='relative text-center text-3xl font-bold '>Note !</h1> */}
            <h1 className='relative text-center text-lg w-[90%] mx-auto bottom-[3em]'> Scan to join our <span className=' font-semibold'>WhatsApp Group</span> for all the Updates !</h1>
            <button onClick={pressed} className='relative  -top-12 w-[80%] flex justify-center rounded-md mx-auto text-white py-2 bg-[#3E3126]'>Close</button>
        </div>
    </div>: null
    }
    
    
    </>
  )
}

export default Popup