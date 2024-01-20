import React from "react";
import background from "../assets/sponsorus/background.png";
import title from "../assets/sponsorus/title.png";
import subtitle from "../assets/sponsorus/subtitle.png";

const SponsorUS = () => {
  return (
    <div className="flex flex-col gap-8  w-screen  px-1 justify-center items-center overflow-hidden">
      <div className="flex flex-col gap-8 w-[90%]  px-1 justify-center items-center overflow-hidden">
        <div className=" w-[90%] flex items-center justify-center  max-w-[1400px] rounded-3xl overflow-hidden">
          <img src={title} className=" w-4/5" alt="" />
        </div>
        <div className="w-[95%] max-w-[1400px]  bg-orange-200 rounded-3xl overflow-hidden relative">
          <img
            src={subtitle}
            className="absolute w-[28%]  left-[35%] top-[14%]"
            alt=""
          />
          <img src={background} className="w-full object-cover z-10" alt="" />
          <div className="w-[80%] h-[20%] absolute left-[10%] top-[68%] flex flex-col gap-2 justify-between items-center">
            <h2 className="w-full text-center font-bodyFont text-[120%] font-semibold ">
              Fill the form to reach out to us!!
            </h2>
            <div className="w-full grid grid-cols-2 gap-2 text-[80%] px-4">
              <div class="flex w-full items-center justify-center">
                <div class="relative w-full">
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    class="border-b-2 border-[#fcb87c] w-full py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                  />
                  <label
                    for="companyName"
                    class="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                  >
                    Company Name
                  </label>
                </div>
              </div>
              <div class="flex w-full items-center justify-center">
                <div class="relative w-full">
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    class="border-b-2 border-[#fcb87c] w-full py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                  />
                  <label
                    for="contact"
                    class="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                  >
                    Contact no.
                  </label>
                </div>
              </div>
              <div class="flex w-full items-center justify-center">
                <div class="relative w-full">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    class="border-b-2 border-[#fcb87c]  w-full py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                  />
                  <label
                    for="email"
                    class="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div class="flex w-full items-center justify-center">
                <div class="relative w-full">
                  <input
                    id="message"
                    name="message"
                    type="text"
                    class="border-b-2 border-[#fcb87c] w-full py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                  />
                  <label
                    for="message"
                    class="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                  >
                    Message
                  </label>
                </div>
              </div>
              <div className=" w-full flex justify-center col-span-2 px-8">
                <button className="bg-[#FC8824] rounded-xl relative h-[2rem] w-[40%] my-3 text-white">
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
