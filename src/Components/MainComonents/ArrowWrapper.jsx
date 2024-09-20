import React from "react";
import { Arrow } from "../Arrow";

const ArrowWrapper = ({ connection, nodePositions }) => {
  const start = nodePositions[connection.from];
  const end = nodePositions[connection.to];

  if (!start || !end) return null;
 
  const startX = start.left +68
  const startY = start.top + 10;
  const endX = end.left -33

  const endY = end.top + 10;

  return (
    <Arrow  startX={startX} startY={startY} endX={endX} endY={endY}  />
  );
};

export default ArrowWrapper;
