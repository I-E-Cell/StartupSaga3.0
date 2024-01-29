import React, { useState, useEffect } from 'react';
import FlipCountdown from "@rumess/react-flip-countdown";

function Countdown() {
  const [clocksize, setClockSize] = useState(window.innerWidth < 768 ? "small" : "medium");

  useEffect(() => {
    const handleResize = () => {
      setClockSize(window.innerWidth < 768 ? "small" : "medium");
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <div className="text-black countdown-text ">
      <FlipCountdown
        hideYear
        
        theme="dark"
        size={clocksize}
        titlePosition="bottom"
        endAt={new Date(
         "2024-03-29"
        ).toUTCString()}
        monthTitle="MONTHS"
        dayTitle="DAYS"
        hourTitle="HOURS"
        minuteTitle="MINUTES"
        secondTitle="SECONDS"
        
      />
    </div>
  );
}

export default Countdown;
