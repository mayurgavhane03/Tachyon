import React from "react";

const Tooltip = ({ details }) => {
  const detailsWithoutBraces = JSON.stringify(details, null, 2).replace(/[{}]/g, "");

  return (
    <div className="absolute z-10 p-2 bg-gray-700 text-white text-sm rounded shadow-lg">
      <pre className="m-0">{detailsWithoutBraces}</pre>
    </div>
  );
};

export default Tooltip;
