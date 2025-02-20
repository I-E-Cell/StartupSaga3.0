import React, { useState } from "react";
import { eventData } from "../data/EventData";
import Pagination from "../components/Pagination";

const Overlay = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = eventData.length;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentEvent = eventData[currentPage - 1];
  return (
    <div className="relative h-[40vh] w-[90vw] md:h-[65vh] md:w-[55vw] bg-red-400 overflow-hidden group">
      <div className="w-full h-full group-hover:scale-105 transition duration-400" >
<Pagination />
      </div>
    </div>
  );
};

export default Overlay;
