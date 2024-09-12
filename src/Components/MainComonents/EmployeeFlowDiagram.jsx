import React, { useState } from 'react';
import { jsondata1 } from '../constants/jsondata1';
import { jsondata2 } from '../constants/jsondata2';
import DiagramRenderer from './DiagramRenderer';
import DataOptions from '../DataOptions';


const EmployeeFlowDiagram = () => {
  const [selectedData, setSelectedData] = useState(jsondata1);
  
  const handleDataChange = (option) => {
    if (option === "Test-data-1") {
      setSelectedData(jsondata1);
    } else if (option === "Test-data-2") {
      setSelectedData(jsondata2);
    } else if (option === "Custom") {
      console.log("Custom data option selected");
      // Handle custom data here
    }
  };

  // Add a check for selectedData and its structure
  const nodes = selectedData && selectedData[0] ? selectedData[0].nodes : [];
  
  return (
    <div className="relative bg-gray-100 min-h-screen w-full flex items-center justify-center">
      {nodes.length > 0 ? (
        <DiagramRenderer nodes={nodes} />
      ) : (
        <div>No data available to render diagram</div>
      )}
      <DataOptions onDataChange={handleDataChange} />
    </div>
  );
};

export default EmployeeFlowDiagram;