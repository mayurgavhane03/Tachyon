import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { MdFunctions } from "react-icons/md";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";
import Tooltip from "./constants/Tooltip";

const Node = ({ details }) => {
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

const Arrow = ({ direction = "right" }) => {
  const arrowClass = direction === "down" ? "rotate-90" : "";
  return (
    <div className={`flex-1 flex items-center justify-center ${arrowClass}`}>
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  );
};

const EmployeeCRUDDiagram = ({ data }) => {
  const { title, nodes } = data[0];

  const groupedNodes = nodes.reduce((acc, node) => {
    const correlationId = node["correlation-id"];
    if (!acc[correlationId]) {
      acc[correlationId] = [];
    }
    acc[correlationId].push(node);
    return acc;
  }, {});

  return (
    <div className="bg-gray-100 ">
    <div className="p-8 min-h-screen  rounded-xl  max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      <div className="flex flex-col space-y-8">
        {Object.values(groupedNodes).map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            <div className="flex items-center justify-center space-x-4">
              {group.map((node, nodeIndex) => (
                <React.Fragment key={node.id}>
                  <Node details={node} />
                  {nodeIndex < group.length - 1 && <Arrow />}
                </React.Fragment>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
    </div>
  );
};

export default EmployeeCRUDDiagram;
