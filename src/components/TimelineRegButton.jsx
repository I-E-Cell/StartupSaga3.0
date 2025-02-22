import React from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useDevfolioInit } from "../hooks/useDevfolioInit";

const TimelineRegisterButton = ({ eventType, link }) => {
  const { isLoading } = useDevfolioInit();

  if (eventType === "hackathon") {
    return (
      <div className="flex justify-start items-center mt-4">
        {isLoading ? (
          <div className="bg-gray-200 animate-pulse h-10 w-40 rounded"></div>
        ) : (
          <div
            class="apply-button"
            data-hackathon-slug="YOUR-HACKATHON-SLUG"
            data-button-theme="light"
            style={{ height: "44px", width: "312px" }}
          ></div>
        )}
      </div>
    );
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button
        title={"Register Now"}
        bg={"bg-violet-50"}
        rightIcon={<TiLocationArrow />}
        containerClass={"flex mt-6 gap-2"}
      />
    </a>
  );
};

export default TimelineRegisterButton;
