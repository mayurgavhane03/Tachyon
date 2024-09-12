import React from 'react';
import Node from '../Node';
 

const NodeWrapper = ({ nodeId, position, nodes }) => (
  <div
    className="absolute"
    style={{
      left: `${position.left}px`,
      top: `${position.top}px`
    }}
  >
    <Node    details={nodes.find(n => n.id === nodeId)} />
  </div>
);

export default NodeWrapper;
