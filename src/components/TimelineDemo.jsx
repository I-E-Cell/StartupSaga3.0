import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import TimelineItem from './TimelineItem';
import TimelineProgress from './TimelineProgress';

const TimelineDemo = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  if (!data?.length) {
    return (
      <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10 p-8">
        <p className="text-neutral-300">No timeline data available.</p>
      </div>
    );
  }

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <TimelineItem
            key={item.title}
            title={item.title}
            content={item.content}
            isFirst={index === 0}
          />
        ))}
        <TimelineProgress
          height={height}
          heightTransform={heightTransform}
          opacityTransform={opacityTransform}
        />
      </div>
    </div>
  );
};

export default React.memo(TimelineDemo);