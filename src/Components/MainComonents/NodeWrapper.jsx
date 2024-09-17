import React from 'react';
import Node from '../Node';
 

const NodeWrapper = ({ nodeId, position, nodes, handleToggle, isOpen }) => { 
  return (

// handleToggle={() => handleToggle(node.id)} 
  <div
    className="absolute"
    style={{
      left: `${position.left+28 }px`,
      top: `${position.top - 14}px`
    }}
  >
    <Node    details={nodes.find(n => n.id === nodeId)} isOpen={isOpen}   handleToggle={() => handleToggle(nodeId)}  />
  </div>
 
)}

export default NodeWrapper;
