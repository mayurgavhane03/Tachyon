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

  const centerX = diagramDimensions.width / 2;
  const centerY = diagramDimensions.height / 2;
  const offsetX = (1 - scale) * centerX;
  const offsetY = (1 - scale) * centerY;

  return (
    <div
      className="relative w-full h-full flex justify-center items-center overflow-x-hidden overflow-y-hidden "
      style={{
        maxWidth: '100%',
        maxHeight: '100%',
        width: `${diagramDimensions.width}px`,
        height: `${diagramDimensions.height}px`,
        transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})`,
        transformOrigin: 'center center',
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
