export const ArrowRight = () => (
  <svg
    width="100"
    height="24"
    viewBox="0 0 100 24"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-4"
  >
    <line x1="0" y1="12" x2="90" y2="12" stroke="#4B5563" strokeWidth="3" />
    <polygon points="90,6 100,12 90,18" fill="#4B5563" />
  </svg>
);

export const Arrow = ({ startX, startY, endX, endY }) => {
  return (
    <svg
      className="absolute pointer-events-none"
      style={{
        left: 120,
        top: 50,
        width: "100%",
        height: "100%",
        overflow: "visible",
      }}
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="15"
          markerHeight="10"
          refX="8"
          refY="3.55"
          orient="auto"
        
        >
          <polygon   className="ml-2" points="0 0, 10 3.5, 0 7" fill="black" />
        </marker>
      </defs>
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke="black"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
};
