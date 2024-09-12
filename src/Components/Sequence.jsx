import React, { useState } from "react";
import Node from "./Node";
import { ArrowRight } from "./Arrow";
import ZoomButtons from "./ZoomButtons";
import DataOptions from "./DataOptions";
import { jsondata1 } from "./constants/jsondata1";
import { jsondata2 } from "./constants/jsondata2"; // assuming you have another dataset

const Sequence = () => {
  const [selectedData, setSelectedData] = useState(jsondata1);
  const [scale, setScale] = useState(1);

  const nodes = selectedData[0]?.nodes;
  const title = selectedData[0]?.title;

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

  const handleDataChange = (option) => {
    if (option === "Test-data-1") {
      setSelectedData(jsondata1);
    } else if (option === "Test-data-2") {
      setSelectedData(jsondata2);
    } else if (option === "Custom") {
      // handle custom data logic here, e.g., fetch from API or prompt user input
      console.log("Custom data option selected");
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mt-12">{title}</h1>

      <div
        className="flex items-center justify-center mt-40"
        style={{ transform: `scale(${scale})` }}
      >
        {nodes.map((node, index) => (
          <div key={node.id} className="relative flex items-center">
            <Node details={node} />
            {index < nodes.length - 1 && (
              <div>{index < nodes.length - 1 && <ArrowRight />}</div>
            )}
          </div>
        ))}
      </div>
      <div>
        <ZoomButtons onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
        <DataOptions onDataChange={handleDataChange} />
      </div>
    </div>
  );
};

export default Sequence;
