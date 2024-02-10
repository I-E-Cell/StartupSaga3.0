import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function App() {
  const text =
  "Startup Saga, our annual Pan-India event that focuses primarily on engineering students across the country. This event provides a platform for students to showcase their innovative ideas, entrepreneurial skills, and aptitude.".split(
      " "
    );

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 0.9,
          delay: 0.1,
        },
      });
    }
  }, [controls, inView]);

  return (
    <div className="App h-full">
      {text.map((el, i) => (
        <motion.span
          ref={ref}
          initial={{ opacity: 0 }}
          animate={controls}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
}

export default App;
