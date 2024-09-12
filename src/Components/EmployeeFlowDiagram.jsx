import React, { useMemo, useState } from 'react';
import { jsondata2 } from './constants/jsondata2';
import Node from './Node';
import { ArrowRight } from './Arrow';
import { jsondata1 } from './constants/jsondata1';
import DataOptions from './DataOptions';

const EmployeeFlowDiagram = () => {
 
  const [selectedData, setSelectedData] = useState(jsondata1);
  const nodes = selectedData[0].nodes;
  
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
  const { nodePositions, connections, diagramDimensions } = useMemo(() => {
    const positions = {};
    const levelWidth = 200;
    const levelHeight = 120;

    const rootNode = nodes.find(n => n.type === "user");
    if (!rootNode) {

      return { nodePositions: {}, connections: [], diagramDimensions: { width: 0, height: 0 } };
    }

    // Group nodes by their 'prev' property
    const grouped = nodes.reduce((acc, node) => {
      if (node.prev !== rootNode.id) return acc;
      if (!acc[node.prev]) acc[node.prev] = [];
      acc[node.prev].push(node);
      return acc;
    }, {});

    let maxWidth = 0;
    let totalHeight = 0;

    // Position nodes in columns and calculate total height
    Object.values(grouped).forEach((group, colIndex) => {
      group.forEach((node, rowIndex) => {
        const left = (colIndex + 1) * levelWidth;
        const top = totalHeight;
        positions[node.id] = { left, top };
        
        maxWidth = Math.max(maxWidth, left);
        
        // Position next nodes
        let nextNode = nodes.find(n => n.id === node.next);
        let nextCol = colIndex + 2;
        while (nextNode) {
          const nextLeft = nextCol * levelWidth;
          positions[nextNode.id] = { left: nextLeft, top };
          maxWidth = Math.max(maxWidth, nextLeft);
          nextNode = nodes.find(n => n.id === nextNode.next);
          nextCol++;
        }

        totalHeight += levelHeight;
      });

      //   vertical spacing between groups
      totalHeight += levelHeight / 2;
    });

    // Position root node centered vertically
    const rootNodeTop = (totalHeight - levelHeight) / 2 -30;
    positions[rootNode.id] = { left: 0, top: rootNodeTop };

    // Calculate connections
    const connections = nodes.flatMap(node => {
      const results = [];
      if (node.prev) results.push({ from: node.prev, to: node.id });
      if (node.next) results.push({ from: node.id, to: node.next });
      return results;
    });


    console.log("positions" ,positions)
    
    console.log("connections" ,connections)
    return { 
      nodePositions: positions, 
      connections, 
      diagramDimensions: { 
        width: maxWidth + levelWidth * 2,  // Add two more level widths for padding
        height: totalHeight
      } 
    };
  }, [nodes]);

  const drawArrow = (start, end) => {
    if (!start || !end) return null;
    const dx = end.left - start.left;
    const dy = end.top - start.top;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    return (
      <div
        className="absolute h-6 overflow-visible"
        style={{
          left: `${start.left + 85}px`,
          top: `${start.top + 30}px`,
          width: `${length - 100}px`,
          transform: `rotate(${angle}deg)`,
          transformOrigin: 'left center'
        }}
      >
        <ArrowRight />
      </div>
    );
  };

  return (
    <div className="relative bg-gray-100 min-h-screen w-full flex items-center justify-center">
      <div 
        className="relative"
        style={{
          width: `${diagramDimensions.width}px`,
          height: `${diagramDimensions.height}px`
        }}
      >
        {Object.entries(nodePositions).map(([nodeId, position]) => (
          <div 
            key={nodeId} 
            className="absolute" 
            style={{ 
              left: `${position.left}px`, 
              top: `${position.top}px` 
            }}
          >
            <Node details={nodes.find(n => n.id === nodeId)} />
          </div>
        ))}
        {connections.map((connection, index) => 
          nodePositions[connection.from] && nodePositions[connection.to] && 
          drawArrow(nodePositions[connection.from], nodePositions[connection.to])
        )}
      </div>
        
      <DataOptions onDataChange={handleDataChange} />
    </div>
  );
};

export default EmployeeFlowDiagram;