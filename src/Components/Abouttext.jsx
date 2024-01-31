import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function App() {
  const text =
    "Our mission is to support the Government's vision of achieving a 5 trillion economy by fostering startups founded by AIT students, and we remain committed to this objective. The Innovation and Entrepreneurship Cell aims to promote the entrepreneurship culture in and around the campus by providing multiple platforms for budding entrepreneurs.".split(
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
    <div className="App">
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
