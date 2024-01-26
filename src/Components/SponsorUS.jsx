import React from "react";
import background from "../assets/sponsorus/background.png";
import title from "../assets/sponsorus/title.png";
import subtitle from "../assets/sponsorus/subtitle.png";

const SponsorUS = () => {
  return (
    <div className="flex flex-col gap-8  w-screen  px-1 justify-center items-center overflow-hidden">
      <div className="flex flex-col gap-4  lg:w-[98%] md:w-[130vw] w-[150vw] px-1 justify-center items-center overflow-hidden">
        <div className=" w-[90%] flex items-center justify-center  max-w-[1400px] rounded-3xl overflow-hidden">
          <img src={title} className=" w-3/5" alt="" />
        </div>
        <div className="w-[95%] max-w-[1400px]  bg-orange-200 rounded-3xl overflow-hidden relative">
          <img
            src={subtitle}
            className="absolute w-[28%]  left-[35%] top-[14%]"
            alt=""
          />
          <img src={background} className="w-full object-cover z-10" alt="" />
          <div className="w-[80%] min-h-[65%] h-auto py-2 absolute left-[10%] top-[23%] flex flex-col gap-4 justify-center items-center bg-[#fcb87c] backdrop-blur-[10px] bg-opacity-60  border-solid border-2 border-[#fb9842] rounded-2xl ">
            <h2 className="w-full text-center font-bodyFont text-[120%] lg:text-[200%] font-semibold ">
              Fill the form to reach out to us!!
            </h2>
            <div className="w-full flex flex-col  gap-6 text-[100%] text-[#4e171f] font-medium px-20 md:px-4">
              <div className="flex w-full items-center justify-center">
                <div className="input-container">
                  <input
                    placeholder="Name"
                    className="input-field"
                    name="name"
                    type="text"
                  />
                  <label htmlFor="input-field" className="input-label">
                    Company Name
                  </label>
                  <span className="input-highlight"></span>
                </div>
              </div>
              <div className="flex w-full items-center justify-center">
                <div className="input-container">
                  <input
                    placeholder="Contact No."
                    className="input-field"
                    name="contact"
                    type="text"
                  />
                  <label htmlFor="input-field" className="input-label">
                    Contact No.
                  </label>
                  <span className="input-highlight"></span>
                </div>
              </div>
              <div className="flex w-full items-center justify-center">
                <div className="input-container">
                  <input
                    placeholder="Email"
                    className="input-field"
                    name="email"
                    type="text"
                  />
                  <label htmlFor="input-field" className="input-label">
                    Email
                  </label>
                  <span className="input-highlight"></span>
                </div>
              </div>
              <div className="flex w-full items-center justify-center">
                <div className="input-container">
                  <input
                    placeholder="Message"
                    className="input-field"
                    name="message"
                    type="text"
                  />
                  <label htmlFor="input-field" className="input-label">
                    Message
                  </label>
                  <span className="input-highlight"></span>
                </div>
              </div>
              <div className=" w-full flex justify-center col-span-2 px-8">
                <button className="bg-[#FC8824] rounded-xl relative h-[2rem] w-[40%] sm:my-1 text-white text-[80%]">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorUS;
