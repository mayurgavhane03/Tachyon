import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { MdFunctions } from "react-icons/md";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";
import Tooltip from "./constants/Tooltip";

const Node = ({details }) => {
  const [hover, setHover] = useState(false);
  const getIcon = (type) => {
    switch (type) {
      case "user":
        return <FaUserTie />;
      case "api":
        return <PiPlugsConnectedBold />;
      case "function":
        return <MdFunctions />;
      case "database":
        return <FaDatabase />;
      default:
        return <IoSettings />;
    }
  };

  return (
    <div
      className="flex flex-col items-center relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex flex-col items-center justify-center h-32 w-32 rounded-full shadow-lg bg-white border-2 border-gray-300 ">
        <span className="text-4xl text-blue-500">{getIcon(details.type)}</span>
        <span className="font-semibold text-center text-sm mt-2">
          {details.name}
        </span>
      </div>
      {hover && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
          <Tooltip details={details.details} />
        </div>
      )}
    </div>
  );
};

export default Node;
