import React from "react";
import Slab from "/images/Slab.svg";

const SponsorSlab = ({ sponsorImage, sponsorAlt = "sponsor", logoWidth = "w-2/3", sponsorLink = "#" }) => {
  return (
    <div className="relative md:w-auto flex justify-center items-center">
      <img src={Slab} alt="slab" className="w-[70%] md:w-[80%]" />
      <a 
        href={sponsorLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 flex justify-center ${logoWidth}`}
      >
        <img 
          src={sponsorImage} 
          alt={sponsorAlt} 
          className="w-[70%] md:w-[80%]"
        />
      </a>
    </div>
  );
};

export default SponsorSlab;
