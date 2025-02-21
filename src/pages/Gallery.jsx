import React from "react";
import GridMotion from "../sections/GridMotion";
import Overlay from "../sections/Overlay";
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

const items = [
  <img src={Team3} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Team2} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Team} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Stand} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Ss} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Secs} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Prize} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Pm2} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Fe} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Pm} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Eval2} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Chill} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Eval} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Be} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Arya} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Dig} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Febe} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Team3} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Team2} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Team} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Stand} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Ss} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Secs} alt="meet1" className="h-full w-full object-fill" />,
];

const Gallery = () => {
  return (
    <div id="memories" className="relative min-h-[100vh] overflow-hidden w-full">
      <div className="absolute z-0 top-1/4 translate-y-0 opacity-20">
        <GridMotion items={items} />
      </div>

      <div className="relative z-10 flex flex-col gap-72 md:gap-56 lg:gap-40 justify-center items-center">
        <div className="uppercase text-center text-5xl md:text-6xl lg:text-9xl font-['shakuro'] text-white">
          Memories
        </div>
        <Overlay />
      </div>
    </div>
  );
};

export default Gallery;
