import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images
import Team3 from "/images/team3.webp";
import Team2 from "/images/team2.webp";
import Team from "/images/team.webp";
import Stand from "/images/stand.webp";
import Ss from "/images/ss.webp";
import Secs from "/images/secs.webp";
import Prize from "/images/prize.webp";
import Pm2 from "/images/pm2.webp";
import Fe from "/images/fes.webp";
import Pm from "/images/pm.webp";
import Eval2 from "/images/eval2.webp";
import Chill from "/images/chill.webp";
import Eval from "/images/eval.webp";
import Be from "/images/bes.webp";
import Arya from "/images/arya.webp";
import Dig from "/images/dig.webp";
import Febe from "/images/febe.webp";

// Define images array inside the component
const images = [
  Team3, Team2, Team, Stand, Ss, Secs, Prize, Pm2, Fe, Pm, Eval2,
  Chill, Eval, Be, Arya, Dig, Febe, Team3, Team2, Team, Stand, Ss, Secs
];

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = images.length;

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
    }, 2000); 

    return () => clearInterval(interval);
  }, [totalPages]);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
  };

  return (
    <div className="flex flex-col items-center space-y-4 w-full h-full">
      {/* Image Display */}
      <div className="relative w-full h-full overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              currentPage === index + 1 ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Pagination;
