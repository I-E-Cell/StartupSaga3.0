import React, {useState} from 'react'
import ss from '../assets/ssb.svg'
function Popup (){
    const [popup, setPopup]=useState(true)
    function pressed(){
        setPopup(!popup);
        
        
    };
  return (
    <> { popup?
    <div className='w-[100%] h-[100vh]  z-40 backdrop-filter text-[#3E3126] backdrop-blur-sm  top-[0%] fixed flex justify-center items-center'>
        <div className='w-[20em] md:w-[22em] h-[15em] rounded-2xl bg-[#D2AD93]'>
            
            <img className='relative left-[9em] overflow-hidden -top-6 h-14' src={ss} alt="" />
            <h1 className='relative text-center text-3xl font-bold '>Note !</h1>
            <h1 className='relative text-center text-lg w-[90%] mx-auto top-[10px]'> Startup Saga has been postponed to <span className=' font-semibold'>11th - 14th April !</span></h1>
            <button onClick={pressed} className='relative top-[30px] w-[80%] flex justify-center rounded-md mx-auto text-white py-2 bg-[#3E3126]'>OK</button>
        </div>
    </div>: null
    }
    
    { popup?  null :
    <div className='hidden md:block z-40 backdrop-filter text-[#3E3126] bottom-[1%] right-3 fixed  '>
        <div className='w-[21em] md:w-[24em] h-[2.5em] flex flex-row rounded-lg bg-[#D2AD93]'>
            
            <img className=' relative  overflow-hidden top-[6px] left-1 h-[1.7em]' src={ss} alt="" />
            <h1 className='relative text-center w-[90%] mx-auto text-sm top-[10px] left-1'> Startup Saga has been postponed to <span className=' font-semibold'>11th - 14th April !</span></h1>
        </div>
    </div>
    }
    </>
  )
}

export default Popup