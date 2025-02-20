import React from "react";
import TimelineDemo from "../components/TimelineDemo";

const Timeline = () => {
  return (
    <div id="timeline" className="mt-16 relative w-screen flex flex-col justify-start items-center md:min-h-screen text-white overflow-x-hidden">
      <div className="uppercase text-center text-5xl md:text-6xl lg:text-9xl font-['shakuro'] text-white">
        Timeline
      </div>

      <TimelineDemo />
    </div>
  );
};

export default Timeline;
