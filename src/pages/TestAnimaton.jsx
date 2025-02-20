import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TestAnimation = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: section1Ref,
    offset: ["start 80%", "start 30%"]
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: section2Ref,
    offset: ["start 80%", "start 10%"]
  });

  // Transform values for section1
  const section1Scale = useTransform(scrollYProgress1, [0, 1], [1.5, 1]);
  const section1Opacity = useTransform(scrollYProgress1, [0, 1], [0, 1]);

  // Transform values for section2
  const section2Scale = useTransform(scrollYProgress2, [0, 1], [1.5, 1]);
  const section2Opacity = useTransform(scrollYProgress2, [0, 1], [0, 1]);

  return (
    <div>
      <motion.div
        ref={section1Ref}
        style={{
          scale: section1Scale,
          opacity: section1Opacity,
          height: "100vh",
          background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#fff",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        }}
        initial={{ scale: 1.5, opacity: 0 }}
      >
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          ROBO
        </motion.h2>
      </motion.div>

      <motion.div
        ref={section2Ref}
        style={{
          scale: section2Scale,
          opacity: section2Opacity,
          height: "100vh",
          background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#333",
          textShadow: "1px 1px 5px rgba(255, 255, 255, 0.5)",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        }}
        initial={{ scale: 1.5, opacity: 0 }}
      >
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Hello world...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default TestAnimation;