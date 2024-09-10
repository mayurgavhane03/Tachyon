import React, { useState } from "react";
import Node from "./Node";
import { Arrow } from "./Arrow";
import ZoomButtons from "./ZoomButtons"; 

const Sequence = ({ title, nodes }) => {
  const [scale, setScale] = useState(1); 

  const handleZoomIn = () => {
    if (scale < 1.5) {
      setScale(scale + 0.1);
    }
  };

  const handleZoomOut = () => {
    if (scale > 1) {
      setScale(scale - 0.1);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mt-12">{title}</h1>

      <div
        className="flex items-center justify-center mt-40 "
        style={{ transform: `scale(${scale})` }}
      >
        {nodes.map((node, index) => (
          <div key={node.id} className="relative flex items-center">
            <Node details={node} />
            {index < nodes.length - 1 && (
              <div>{index < nodes.length - 1 && <Arrow />}</div>
            )}
          </div>
        ))}
      </div>

      <ZoomButtons onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
    </div>
  );
};

export default Sequence;
