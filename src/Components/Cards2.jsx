import {Banner} from "./Banner2.jsx";
import "./Reel.css";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";

const images = [img1, img2, img3, img4, img5, img6].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));

export default function Cards() {
  return (
    <div className="">
      <Banner images={images} speed={10000} />
    </div>
  );
}
