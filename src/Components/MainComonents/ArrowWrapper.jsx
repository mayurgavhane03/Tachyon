import React from "react";
import { Arrow } from "../Arrow";

const ArrowWrapper = ({ connection, nodePositions }) => {
  const start = nodePositions[connection.from];
  const end = nodePositions[connection.to];

  if (!start || !end) return null;
 
  const startX = start.left + 125;
  const startY = start.top + 30;
  const endX = end.left + 25;
  const endY = end.top + 30;

  return (
    <Arrow  startX={startX} startY={startY} endX={endX} endY={endY}  />
  );
};

export default ArrowWrapper;
