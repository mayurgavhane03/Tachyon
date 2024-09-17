import React, { useMemo, useState } from 'react';
import { calculatePositionsAndConnections } from './calculatePositionsAndConnections';
import NodeWrapper from './NodeWrapper';
import ArrowWrapper from './ArrowWrapper';

const DiagramRenderer = ({ nodes = [], scale }) => {
  const { nodePositions, connections, diagramDimensions } = useMemo(
    () => calculatePositionsAndConnections(nodes), 
    [nodes]
  );
  
  const [activeNodeId, setActiveNodeId] = useState(null);

  const handleToggle = (id) => {
    setActiveNodeId((prevId) => (prevId === id ? null : id));
  };

  if (nodes.length === 0) {
    return <div>No nodes available</div>;
  }

  const offsetX = (scale - 1) * 100;
  const offsetY = (scale - 1) * 100;

  return (
    <div
      className="relative justify-center ml-48 -mt-24"
      style={{
        width: `${diagramDimensions.width}px`,
        height: `${diagramDimensions.height}px`,
        transform: `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`,
        transformOrigin: 'top left',
      }}
    >
      {Object.entries(nodePositions).map(([nodeId, position]) => (
        <NodeWrapper
          key={nodeId}
          nodeId={nodeId}
          position={position}
          nodes={nodes}
          handleToggle={handleToggle}
          isOpen={activeNodeId === nodeId}
        />
      ))}

      {connections.map((connection, index) => (
        <ArrowWrapper
          key={index}
          connection={connection}
          nodePositions={nodePositions}
        />
      ))}
    </div>
  );
};

export default DiagramRenderer;
