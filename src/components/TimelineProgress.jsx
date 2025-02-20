import React from 'react';
import { motion } from 'framer-motion';

const TimelineProgress = ({ height, heightTransform, opacityTransform }) => {
  return (
    <div
      style={{ height: `${height}px` }}
      className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] 
        bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
        from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 
        to-transparent to-[99%] 
        [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
    >
      <motion.div
        style={{
          height: heightTransform,
          opacity: opacityTransform,
        }}
        className="absolute inset-x-0 top-0 w-[2px] 
          bg-gradient-to-t from-purple-500 via-blue-500 to-transparent 
          from-[0%] via-[10%] rounded-full"
      />
    </div>
  );
};

export default React.memo(TimelineProgress);
