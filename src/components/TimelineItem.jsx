import React from 'react';
import { motion } from 'framer-motion';
import TimelinePoint from './TimelinePoint';
import TimelineContent from './TimelineContent';
import TimelineTitle from './TimelineTitle';

const TimelineItem = ({ title, content, isFirst }) => {
  return (
    <motion.div
      className="flex justify-start pt-10 md:pt-40 md:gap-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <TimelinePoint />
        <TimelineTitle title={title} />
      </div>
      <TimelineContent title={title} content={content} />
    </motion.div>
  );
};

export default React.memo(TimelineItem);