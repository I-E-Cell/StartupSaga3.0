import React from "react";
import SponsorSlab from "./SponsorSlab";

const platinumSponsors = [
  {
    image: "/images/BlueBricks.svg",
    website: "https://www.blue-bricks.com/"
  },
  {
    image: "/images/ProGrowth.svg",
    website: "https://progrowthpeople.com/"
  }
];

const PlatinumSponsors = () => {
  return (
    <div className="flex w-full flex-col gap-8 justify-center items-center">
      <div className="text-2xl md:text-5xl font-['shakuro'] text-white uppercase">
        Platinum sponsors
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-36 w-full">
        {platinumSponsors.map((sponsor, index) => (
          <SponsorSlab 
            key={index} 
            sponsorImage={sponsor.image}
            sponsorLink={sponsor.website}
          />
        ))}
      </div>
    </div>
  );
};

export default PlatinumSponsors;