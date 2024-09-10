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
      className="flex flex-col items-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex flex-col items-center justify-center h-40 w-40 rounded-full shadow-lg bg-white border-2 border-gray-300">
        <span className="text-4xl">{getIcon(details.type)}</span>
        <span className="font-semibold text-center text-lg">{details.name}</span>
      </div>
      {hover && (
        <div className="absolute top-0 left-0 mt-12">
          <Tooltip details={details.details} />
        </div>
      )}
    </div>
  );
};

export default Node;
