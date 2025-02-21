import React from "react";
import Slab from "/images/Slab.svg";

const SponsorSlab = ({ sponsorImage, logoWidth = "w-2/3", sponsorLink = "#" }) => {
  return (
    <div className="relative w-[70%] md:w-auto flex justify-center items-center">
      <img src={Slab} alt="slab" />
      <a 
        href={sponsorLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 ${logoWidth}`}
      >
        <img 
          src={sponsorImage} 
          alt="sponsor" 
        />
      </a>
    </div>
  );
};

export default SponsorSlab;