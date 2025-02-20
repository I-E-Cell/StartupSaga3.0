import React from "react";
import { motion } from "framer-motion";
import TimelineDemo from "../components/TimelineDemo";
import { EventData } from "../data/Events";

const Timeline = () => {
  return (
    <div id="timeline" className="mt-16 relative w-screen flex flex-col justify-start items-center md:min-h-screen text-white overflow-x-hidden">
      <motion.div 
        className="uppercase text-center text-5xl md:text-6xl lg:text-9xl font-['shakuro'] text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Timeline
      </motion.div>

      <TimelineDemo data={EventData} />
    </div>
  );
};

export default Timeline;
