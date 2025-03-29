import React from "react";
import SponsorSlab from "./SponsorSlab";

const foodSponsors = [
  {
    image: "/images/NoodlePlus.png",
    website: "#",
    logoWidth: "w-1/2"
  },
  {
    image: "/images/budhani.svg",
    website: "#",
    logoWidth: "w-1/3"
  },
];

const FoodSponsors = () => {
  return (
    <div className="flex w-full flex-col gap-8 justify-center items-center">
      <div className="text-2xl md:text-5xl font-['shakuro'] text-white uppercase">
        Food sponsors
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-36 w-full">
        {foodSponsors.map((sponsor, index) => (
          <SponsorSlab 
            key={index} 
            sponsorImage={sponsor.image}
            sponsorLink={sponsor.website}
            logoWidth={sponsor.logoWidth}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodSponsors;