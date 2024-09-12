import React from 'react';
import { calculateArrowProperties } from './calculatePositionsAndConnections';
import { ArrowRight } from '../Arrow';


const ArrowWrapper = ({ connection, nodePositions }) => {
  const start = nodePositions[connection.from];
  const end = nodePositions[connection.to];

  if (!start || !end) return null;

  const { length, angle } = calculateArrowProperties(start, end);

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

export default ArrowWrapper;