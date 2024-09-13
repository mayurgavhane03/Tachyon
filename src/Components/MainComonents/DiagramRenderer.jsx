import React, { useMemo } from 'react';
import { calculatePositionsAndConnections } from './calculatePositionsAndConnections';
import NodeWrapper from './NodeWrapper';
import ArrowWrapper from './ArrowWrapper';

const DiagramRenderer = ({ nodes = [], scale }) => {
  const { nodePositions, connections, diagramDimensions } = useMemo(() => 
    calculatePositionsAndConnections(nodes), [nodes]);

   if (nodes.length === 0) {
    return <div></div>;
  }

  return (
    <div
      className="relative justify-center ml-48 -mt-24  " 
      style={{
        width: `${diagramDimensions.width}px`,
        height: `${diagramDimensions.height}px`,
         transform: `scale(${scale})`
      }}
    >
      {Object.entries(nodePositions).map(([nodeId, position]) => (
        <NodeWrapper key={nodeId} nodeId={nodeId} position={position} nodes={nodes} />
      ))}
      {connections.map((connection, index) => (
        <ArrowWrapper key={index} connection={connection} nodePositions={nodePositions} />
      ))}
    </div>
  );
};

export default DiagramRenderer;