import React from "react";
import SponsorSlab from "./SponsorSlab";

const platformSponsors = [
  {
    image: "/images/ethindia.png",
    website: "https://ethindia2024.devfolio.co/",
  },
  {
    image: "/images/devfolio.svg",
    website: "https://devfolio.co/discover",
  },
  {
    image: "/images/polygon.png",
    website: "https://polygon.technology/",
  },
];

const PlatformSponsors = () => {
  return (
    <div className="flex w-full flex-col gap-8 justify-center items-center">
      <div className="text-2xl md:text-5xl font-['shakuro'] text-white uppercase">
        Platform sponsors
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-36 w-full">
        {platformSponsors.map((sponsor, index) => (
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

export default PlatformSponsors;
