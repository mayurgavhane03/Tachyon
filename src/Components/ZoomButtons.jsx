import React from "react";
import { FaPlus,FaMinus  } from "react-icons/fa";

const ZoomButtons = ({ onZoomIn, onZoomOut }) => {
  return (
    <div className="mt-8 grid absolute top-0 right-10 space-y-4">
      <button
        className="bg-blue-500 text-white px-4 w-12 h-12 rounded-full hover:bg-blue-600"
        onClick={onZoomIn}
      >
      <FaPlus />
      </button>
      <button
        className="bg-blue-500 text-white px-4  w-12 h-12 rounded-full hover:bg-blue-600"
        onClick={onZoomOut}
      >
        <FaMinus />
      </button>
    </div>
  );
};

export default ZoomButtons;
