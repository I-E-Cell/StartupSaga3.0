
import React from "react";
import logo from "../assets/sslogo.svg";
import darrow from "../assets/darrow.svg";

const Footer = () => {
  return (
    <div id="foot" className=" max-w-[99%] mx-auto w-screen  h-full flex justify-center  gap-4 md:rounded-2xl rounded-md py-4">
      <div>
        <div className="h-full px-8 inline-flex flex-col bg-[#ffe1ad] justify-center  md:rounded-2xl rounded-md  overflow-hidden">
          <div className="w-full h-full p-4 flex justify-center items-center">
            <img className=" md:w-[70%] w-full" src={logo} alt="" />
          </div>
          <div>
            <div class="flex  h-full justify-evenly lg:px-4 ">
              <a
                target="_blank"
                href="https://www.facebook.com/ecellait"
                class=" hover:scale-110 duration-200 p-2 bg-transparent rounded-full"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="mx-auto "
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/ecell_ait/"
                class="hover:scale-110 duration-200 p-2 bg-wtransparentrounded-full"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  class="mx-auto"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                href="https://twitter.com/ecell_aitpune"
                class="hover:scale-110 duration-200 p-2 bg-wtransparentrounded-full"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="mx-auto"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/innovation-entrepreneurship-cell/"
                class="hover:scale-110 duration-200 p-2 bg-wtransparentrounded-full"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  class="mx-auto"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@aitecell"
                class="hover:scale-110 duration-200 p-2 bg-wtransparentrounded-full"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 576 512"
                  class="mx-auto "
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[60%] h-[100%] flex flex-col gap-2 md:rounded-2xl rounded-md justify-between ">
        <div className=" w-[100%] hidden sm:grid sm:grid-flow-col md:grid-rows-1 sm:grid-rows-2 grid-rows-3 justify-evenly md:rounded-2xl p-1 rounded-md bg-[#6F4E37] md:p-4">
          <h4 className=" text-white md:text-[14px] text-[10px]"> Home </h4>
          <h4 className=" text-white md:text-[14px] text-[10px]"> Events </h4>
          <h4 className=" text-white md:text-[14px] text-[10px]"> Timeline </h4>
          <h4 className=" text-white md:text-[14px] text-[10px]"> Memories </h4>
          <h4 className=" text-white md:text-[14px] text-[10px]"> Team </h4>
          <h4 className=" text-white md:text-[14px] text-[10px] sm:block lg:hidden hidden ">
            {" "}
            Locate us{" "}
          </h4>
        </div>
        <div className=" w-full flex sm:flex-row flex-col gap-4 h-full md:rounded-2xl rounded-md justify-center">
          <div className="flex flex-col justify-center items-center w-full bg-[#C4A484] md:p-4 p-1 gap-4 md:rounded-2xl rounded-md">
            <div className=" flex flex-col gap-2 w-full justify-center  bg-transparent ">
              <h4 className=" text-center md:text-sm text-[10px] max-w-sm  mx-auto">
                “If you look at history, innovation doesn’t come just from
                giving people incentives; it comes from creating environments
                where their ideas can connect.“
              </h4>
              <h4 className=" flex gap-1 md:text-sm text-[10px] font-bold justify-end mr-4">
                {" "}
                I&E Cell{" "}
                <span>
                  <img src={darrow} className=" h-[1em]" alt="" />
                </span>
              </h4>
            </div>
            <div className=" w-full flex flex-col justify-start gap-0 md:gap-2 lg:gap-0 h-auto ">
              <h2 className=" w-full font-bold md:text-[20px] text-xs text-center pb-2  ">
                {" "}
                Contact
              </h2>
              <div className=" w-full flex md:flex-row flex-col md:justify-between justify-start items-center">
                <h4 className=" flex flex-col text-center gap-1 md:text-sm text-[10px]">
                  {" "}
                  <span className=" font-bold">Ayush Kumar, Secretary</span>
                  <span>9898xxxxxxx</span>
                </h4>
                <h4 className=" flex flex-col text-center gap-1 md:text-sm text-[10px]">
                  {" "}
                  <span className=" font-bold">Jyoti Yadav, Secretary</span>
                  <span>9898xxxxxxx</span>
                </h4>
              </div>
            </div>
          </div>
          <div className=" w-full  bg-[#988558] sm:p-4 flex flex-col justify-center gap-2 md:rounded-2xl rounded-xl lg:block md:hidden">
            <iframe
              class="rounded-xl w-full   sm:mb-4 mx-auto "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.64883570219!2d73.87434400449611!3d18.607325966357873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c70090000001%3A0x160a20f3d0273495!2sArmy%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1700741837638!5m2!1sen!2sin"
            ></iframe>
            <h4 className="text-center w-full sm:block hidden ">
              {" "}
              Army Institute of Technology,Pune
              <br />
              Dighi Hills Pune 411015
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;


