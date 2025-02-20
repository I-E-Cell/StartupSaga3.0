import React from "react";
import { motion, useMotionValue, useTransform, useSpring, useAnimationFrame } from "framer-motion";
import "../styles/GridMotion.css";

const GridMotion = ({ items = [] }) => {
  const mouseX = useMotionValue(window.innerWidth / 2);
  const rowMotionValues = Array(4).fill(null).map(() => useMotionValue(0));
  
  const totalItems = 28;
  const defaultItems = Array.from(
    { length: totalItems }, 
    (_, index) => `Item ${index + 1}`
  );
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  // Create spring configurations for each row
  const rowSprings = rowMotionValues.map((_, index) => {
    const baseConfig = {
      stiffness: 400,
      damping: 30,
      mass: 1
    };
    
    // Adjust spring parameters based on row position
    return useSpring(0, {
      ...baseConfig,
      damping: baseConfig.damping + (index * 5),
      mass: baseConfig.mass + (index * 0.2)
    });
  });

  // Set up transforms for each row
  const rowTransforms = rowSprings.map((spring, index) => {
    const maxMoveAmount = 300;
    const direction = index % 2 === 0 ? 1 : -1;
    
    return useTransform(spring, (value) => {
      return ((value / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction;
    });
  });

  // Handle mouse movement
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  // Update row positions based on mouse movement
  useAnimationFrame(() => {
    const mouseXValue = mouseX.get();
    rowSprings.forEach((spring, index) => {
      spring.set(mouseXValue);
    });
  });

  const renderContent = (content) => {
    if (React.isValidElement(content) && content.type === "img") {
      return (
        <div
          className="row__item-img"
          style={{
            backgroundImage: `url(${content.props.src})`,
          }}
        />
      );
    }
    return <div className="row__item-content">{content}</div>;
  };

  return (
    <div className="noscroll loading">
      <section className="intro">
        <div className="gridMotion-container">
          {[...Array(4)].map((_, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="row"
              style={{ x: rowTransforms[rowIndex] }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: rowIndex * 0.1,
                ease: "easeOut"
              }}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                return (
                  <motion.div
                    key={itemIndex}
                    className="row__item"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 } 
                    }}
                  >
                    <motion.div 
                      className="row__item-inner"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4,
                        delay: (rowIndex * 7 + itemIndex) * 0.03
                      }}
                    >
                      {renderContent(content)}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </div>
        <div className="fullview" />
      </section>
    </div>
  );
};

export default GridMotion;