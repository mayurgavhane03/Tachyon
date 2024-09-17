import React from 'react';

const Line= ({
  startX,
  startY,
  endX,
  endY,
  color = 'black',  // Default color is black
  thickness = 2     // Default thickness is 2
}) => {
  return (
    <svg
      style={{
        position: '',
        top: `${startX + startY}`,
        left: `${endX +  endY}`,
        pointerEvents: 'none', // Prevent interaction with the line
        overflow: 'visible', // Ensure the line is visible even if it goes out of bounds
      }}
    >
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke={color}
        strokeWidth={thickness}
      />
    </svg>
  );
};

export default Line;
