import React, { useState } from 'react';
import { jsondata1 } from '../constants/jsondata1';
import { jsondata2 } from '../constants/jsondata2';
import DiagramRenderer from './DiagramRenderer';
import DataOptions from '../DataOptions';
import ZoomButtons from '../ZoomButtons';
import { customJson } from '../constants/customjson';


const EmployeeFlowDiagram2 = () => {
  const [selectedData, setSelectedData] = useState(jsondata1);
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

  const handleDataChange = (option) => {
    if (option === "Test-data-1") {
      setSelectedData(jsondata1);
    } else if (option === "Test-data-2") {
      setSelectedData(jsondata2);
    } else if (option === "Custom") {
      setSelectedData(customJson);
    }
  };

  const nodes = selectedData && selectedData[0] ? selectedData[0].nodes : [];

  return (
    <>
     <h1 className='text-black font-semibold  bg-gray-100  p-4'>{selectedData[0].title}</h1>  
    
    <div className="relative bg-gray-100  min-h-screen w-full grid items-center justify-center" 
       >
        
      {nodes.length > 0 ? (
        <DiagramRenderer nodes={nodes} scale={scale} />
      ) : (
        <div>No data available to render diagram</div>
      )}
      <DataOptions onDataChange={handleDataChange} />
          <ZoomButtons onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />

    </div>
    </>
  );
};

export default EmployeeFlowDiagram2;