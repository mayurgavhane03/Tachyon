import React, { useState } from "react";
import { FaUserTie, FaDatabase } from "react-icons/fa";
import { MdFunctions } from "react-icons/md";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";
import Tooltip from "./constants/Tooltip";
import { LuFunctionSquare } from "react-icons/lu";
import { RiFunctionLine,RiBaseStationLine} from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";

const Node = ({ details, isOpen, handleToggle}) => {
  const [hover, setHover] = useState(false);
  const [onClickk, setOnclick] = useState(false)
  const [checkOtherOpen, setcheckOtherOPen]= useState(false);

console.log(isOpen)

console.log(onclick)
  const getIcon = (type) => {
    switch (type) {
      case "user":
        return <FaUserTie className="text-blue-600" />;
      case "api":
        return <PiPlugsConnectedBold className="text-green-600" />;
      case "function":
        return <MdFunctions className="text-purple-600" />;
      case "database":
        return <FaDatabase className="text-red-600" />;
      case "function2":
          return <LuFunctionSquare />
      case "grid":
        return <RiFunctionLine className="text-blue-500"   />
      case "connecting":
        return <RiBaseStationLine className="text-pink-600" />
      case "deleted":
        return <AiFillDelete className="text-red-500" />
      default:
        return <IoSettings className="text-gray-600" />;
    }
  };

  return (
    <div
      className="flex  items-center justify-center relative"
    
    >
      <button onClick={handleToggle}>
      <div className={`flex flex-col items-center justify-center h-24 w-24 rounded-full shadow-lg bg-white border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${isOpen ? 'border-red-500'   :  'border-gray-300 '} ` }>
        <span className="text-3xl mb-1">{getIcon(details.type)}</span>
        <span className="font-semibold text-center text-xs px-1 truncate w-full text-gray-700">
          {details.name}
        </span>
      </div>
      </button>
      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
          <Tooltip details={details.details} />
        </div>
      )}
    </div>
  );
};

export default Node;
