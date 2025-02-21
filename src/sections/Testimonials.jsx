import React from "react";
import TestCard from "../components/TestCard";
import Stroke from "../components/Stroke";
import Stats from "../components/Stats";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="flex w-full flex-col gap-24 justify-center items-center min-h-[100vh] "
    >
      <div className="uppercase text-center text-5xl md:text-6xl lg:text-9xl font-['shakuro'] text-white">
        testimonials
      </div>
      <div className="flex flex-col md:flex-row gap-16 justify-center items-start ">
        <TestCard
          content={
            "Absolutely thrilled about the I&E cell's dedication to fostering entrepreneurship at AIT. Having started my journey in this ecosystem, I am genuinely happy with what I have achieved today. With a myriad of initiatives launched recently, I have no doubt that AITian startups will soon take the helm in the Indian startup ecosystem. Wishing the team all the best!"
          }
          person={"Mr. Sahil Uttekar"}
          designation={"Co-founder VIRBike"}
        />
        <TestCard
          content={
            "The I&E cell’s mission to build an ecosystem to promote entrepreneurship in AIT is certainly admirable. With so many initiatives launched over the last few years, I’m certain we’ll see many AITian startups leading the way in the Indian startup ecosystem soon. I wish you guys the best!"
          }
          person={"Mr. Ayush Agarwal"}
          designation={"Founder, Seniority.in"}
        />

        <TestCard
          content={
            "AIT's IEC, under the guidance of Prof Oza, ma'am, went above and beyond during the COVID lockdown, offering crucial support to Electrun Motors and highlighting their dedication to an inclusive entrepreneurial ecosystem.The pivotal role played by the IEC in fostering connections between student entrepreneurs and alumni entrepreneurs is instrumental in propelling startups to success at AIT."
          }
          person={"Mr. Piyush Sharma"}
          designation={"Design Engineer, Dassault Systèmes"}
        />
      </div>
      <Stroke />
      <Stats />
    </div>
  );
};

export default Testimonials;
