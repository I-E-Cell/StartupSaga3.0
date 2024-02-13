import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { GoDotFill } from "react-icons/go";
import ss from '../assets/ssb.svg';
import skull from '../assets/skull.svg';
import { motion } from 'framer-motion';
import mixpanel from 'mixpanel-browser';
mixpanel.init('92a875811535e823719809b9e6df97ea', {debug: true, track_pageview: true, persistence: 'localStorage'});

const SponUS = () => {
    const initialFormData = {
        company_name: "",
        company_email: "",
        company_tel: "",
        company_linkedin: "",
        isValid: false,
    };

    const [send, setSend] = useState("SUBMIT FORM");
    const [formData, setFormData] = useState(initialFormData);

    const form = useRef();

    const validateForm = () => {
        const isValid = formData.company_name && formData.company_email && formData.company_tel && formData.company_linkedin;
        setFormData({ ...formData, isValid });
        return isValid;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        emailjs.sendForm('service_l11ol83', 'template_h7jms4m', form.current, 'n1vwbvfesg3bNbUu0')
            .then((result) => {
                alert("Your details have been registered successfully!");
                setFormData(initialFormData); // Reset form fields after successful submission
                setSend("SUBMIT FORM"); // Optionally reset button text
            }, (error) => {
                alert("Failed to send. Please try again!");
            });
    };

    return (
        <div id='sponc' className='max-w-[90%]  sponus py-12 rounded-xl w-[87em] mx-auto mt-16 flex flex-col gap-11'>

            <div className='flex flex-col '>
                <h1 className='text-[1.6em] md:text-[3.6em] mx-auto text-center font-extrabold text-[#241303]'>WANT TO SPONSOR US?</h1>

                <div className='w-[90%] mx-auto flex gap-3 justify-evenly items-center'>
                    <hr className='w-[45%] h-[3px] bg-[#241303] mx-auto' />
                    <GoDotFill size={10} />
                    <GoDotFill size={10} />
                    <GoDotFill size={10} />
                    <hr className='w-[45%] h-[3px] bg-[#241303]  mx-auto' />
                </div>
            </div>
            <div className='flex flex-col justify-evenly gap-6'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-evenly gap-6'>


                    <div className='flex flex-col gap-6 md:flex-row justify-between w-[90%] mx-auto'>
                        <div className='flex  md:gap-[2px] w-full'>
                            <h1 className='px-3 py-2 bg-[#1F1401]  text-sm md:text-md lg:text-xl font-semibold text-nowrap rounded-lg text-white'>COMPANY NAME</h1>
                            <input required type='text' id='input' name='company_name' onChange={handleInputChange} value={formData.company_name} className='bg-transparent border-[2px] w-[100%] md:w-[60%] border-[#1F1401] rounded-r-lg border-l-0'></input>
                        </div>
                        <div className='flex gap-[2px] w-full'>
                            <h1 className='px-6 py-2 border-[#1F1401] border-[1.5px] text-sm md:text-md lg:text-xl font-semibold rounded-lg text-[#1F1401]'>EMAIL</h1>
                            <input required type='email' id='input' name='company_email' onChange={handleInputChange} value={formData.company_email} className='bg-transparent border-[2px] w-[100%] md:w-[60%] border-[#1F1401] rounded-r-lg border-l-0'></input>
                        </div>
                        <div className='hidden md:flex gap-[2px] items-center  rounded border-[#1F1401] border-[1.5px] px-4 py-2 '>
                            {/* <h1 className='px-6 py-2 border-[#1F1401] border-[1.5px] text-xl font-semibold rounded-lg text-[#1F1401]'></h1> */}
                            <GoDotFill size={15} />
                        </div>
                    </div>
                    <div className='flex flex-col items-center  gap-4 md:flex-row justify-between w-[90%] mx-auto'>
                        <div className='flex gap-[2px] w-full'>
                            <h1 className='px-3 py-2 bg-[#1F1401] text-sm md:text-md lg:text-xl font-semibold text-nowrap rounded-lg text-white'>PHONE</h1>
                            <input required type='tel' id='input' name='company_tel' onChange={handleInputChange} value={formData.company_tel} className='bg-transparent border-[2px] w-[100%] md:w-[60%] border-[#1F1401] rounded-r-lg border-l-0'></input>
                        </div>
                        <div className='hidden md:flex gap-[2px]  items-center  rounded border-[#1F1401] border-[1.5px] px-4 py-[.9em] '>
                            <GoDotFill size={15} />
                        </div>
                        <div className='flex gap-[2px] w-full'>
                            <h1 className='px-6 py-2 border-[#1F1401] border-[1.5px] text-sm md:text-md lg:text-xl font-semibold rounded-lg text-[#1F1401]'>LINKEDIN</h1>
                            <input required type='link' id='input' name='company_linkedin' onChange={handleInputChange} value={formData.company_linkedin} className='bg-transparent focus:ring-0 focus:ring-offset-0 border-[2px] w-[100%] md:w-[60%] border-[#1F1401] rounded-r-lg border-l-0' />
                        </div>
                        <hr className=' hidden md:flex w-[6em] h-1 rounded bg-[#1F1401]' />  <GoDotFill className='hidden md:flex' size={25} />
                        <div className='hidden md:flex gap-[2px] items-center  rounded border-[#1F1401] border-[1.5px] px-4 py-2 '>
                            {/* <h1 className='px-6 py-2 border-[#1F1401] border-[1.5px] text-xl font-semibold rounded-lg text-[#1F1401]'></h1> */}
                            <GoDotFill size={15} />
                        </div>
                    </div>
                    <div className='  mx-auto items-center justify-center mt-5'>
                        <div className='relative mx-auto'>
                            <div className='w-[5%] h-[21%] bg-[#EADBB0] absolute rounded-br-full'></div>
                            <div className='w-[9px] left-[95%] h-[9px] flex justify-end bg-[#EADBB0] rounded-bl-full absolute '></div>
                            <div className='w-[9px] top-[79.5%] left-[95%] h-[9px] flex justify-end bg-[#EADBB0] rounded-tl-full absolute '></div>
                            <div className='w-[9px] top-[79.5%]  h-[9px] flex justify-end bg-[#EADBB0] rounded-tr-full absolute '></div>

                            <motion.button onClick={() => { {input.value != "" ? pressed() : null ; mixpanel.track('SpeakerSession button Clicked')} }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }} className=' rounded-lg px-8 text-lg py-2 -rounded-[2em] font-semibold text-white bg-[#1F1401] '>{send}</motion.button>
                        </div>
                    </div>
                </form>

                <div className='flex flex-col md:flex-row  justify-between w-[90%] gap-10 md:gap-0 mx-auto mt-8'>
                    <div className='hidden md:flex flex-col gap-2 justify-center items-center'>

                        <hr className='w-[1.6px] rounded-3xl h-[5em] bg-[#1F1401]' />
                        <GoDotFill size={9} />
                        <GoDotFill size={9} />

                        <hr className='w-[1.6px] rounded-3xl h-[5em] bg-[#1F1401]' />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-7'>
                        <div className='relative'>
                            <div className='w-[5%] h-[21%] bg-[#EADBB0] absolute rounded-br-full'></div>
                            <div className='w-[9px] left-[95%] h-[9px] flex justify-end bg-[#EADBB0] rounded-bl-full absolute '></div>
                            <div className='w-[9px] top-[79.5%] left-[95%] h-[9px] flex justify-end bg-[#EADBB0] rounded-tl-full absolute '></div>
                            <div className='w-[9px] top-[79.5%]  h-[9px] flex justify-end bg-[#EADBB0] rounded-tr-full absolute '></div>

                            <a href="https://www.aitecell.in/" target='_blank'><motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }} className=' rounded-lg px-8 text-lg py-2 -rounded-[2em] font-semibold text-white bg-[#1F1401] '>Visit I&E Cell</motion.button></a>
                        </div>
                        <div className='relative'>
                            <div className='w-[5%] h-[21%] bg-[#EADBB0] absolute rounded-br-full'></div>
                            <div className='w-[9px] left-[95%] h-[9px] flex justify-end bg-[#EADBB0] rounded-bl-full absolute '></div>
                            <div className='w-[9px] top-[79.5%] left-[95%] h-[9px] flex justify-end bg-[#EADBB0] rounded-tl-full absolute '></div>
                            <div className='w-[9px] top-[79.5%]  h-[9px] flex justify-end bg-[#EADBB0] rounded-tr-full absolute '></div>

                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }} className=' px-8 text-lg py-2 -rounded-[2em] font-semibold rounded-lg text-white bg-[#1F1401] '>BROCHURE</motion.button>
                        </div>

                    </div>
                    <div className='hidden md:flex flex-col gap-2 justify-center items-center'>

                        <hr className='w-[1.6px] rounded-3xl h-[5em] bg-[#1F1401]' />
                        <GoDotFill size={9} />
                        <GoDotFill size={9} />

                        <hr className='w-[1.6px] rounded-3xl h-[5em] bg-[#1F1401]' />

                    </div>
                    <div className='hidden md:flex'>

                        <img className=' w-[11em]' src={ss} alt="" />

                    </div>
                    <div className='hidden md:flex flex-col gap-2 justify-center items-center'>

                        <hr className='w-[1.6px] rounded-3xl h-[5em] bg-[#1F1401]' />
                        <GoDotFill size={9} />
                        <GoDotFill size={9} />

                        <hr className='w-[1.6px] rounded-3xl h-[5em] bg-[#1F1401]' />
                    </div>
                    <div className='flex   flex-col justify-center items-center'>

                        <img className='w-[5.5em]' src={skull} alt="" />
                        <div className='flex justify-center items-center -gap-[60px] '>
                            <GoDotFill size={9} />

                            <hr className='w-[10em] bg-[#1F1401] border-none h-[2.4px]' />
                            <GoDotFill size={9} />

                        </div>
                        <h1 className='text-[#1F1401] text-2xl font-bold'>SPONSORSHIP HEAD</h1>
                        <h1 className='text-[#1F1401]  font-semibold'>UMANG SINGH</h1>
                        <div className='relative mt-2 '>
                            <div className='w-[5%] h-[21%] bg-[#EADBB0] absolute rounded-br-full'></div>
                            <div className='w-[9px] left-[95.5%] h-[9px] flex justify-end bg-[#EADBB0] rounded-bl-full absolute '></div>
                            <div className='w-[9px] top-[79%] left-[95.5%] h-[9px] flex justify-end bg-[#EADBB0] rounded-tl-full absolute '></div>
                            <div className='w-[9px] top-[79%]  h-[9px] flex justify-end bg-[#EADBB0] rounded-tr-full absolute '></div>

                            <div className=' px-9 text-lg py-[6px] -rounded-[2em]  font-semibold text-white bg-[#1F1401] '>+91 7294918347</div>
                        </div>

                    </div>
                    <div className='hidden md:flex flex-col gap-2 justify-center items-center'>

                        <hr className='w-[1.6px] rounded-3xl h-[5em] bg-[#1F1401]' />
                        <GoDotFill size={9} />
                        <GoDotFill size={9} />

                        <hr className='w-[1.6px] rounded-3xl h-[5em] bg-[#1F1401]' />

                    </div>
                </div>
            </div>
        </div>

    )
}

export default SponUS