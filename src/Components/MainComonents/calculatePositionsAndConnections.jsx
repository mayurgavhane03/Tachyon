export const calculatePositionsAndConnections = (nodes) => {
  const positions = {};
  const levelWidth = 200;
  const levelHeight = 120;

  const rootNode = nodes.find(n => n.type === "user");
  console.log("rootNode",rootNode)
  if (!rootNode) {
    console.error("Root node not found");
    return { nodePositions: {}, connections: [], diagramDimensions: { width: 0, height: 0 } };
  }

  // Group nodes by their 'prev' property
  const grouped = nodes.reduce((acc, node) => {
    if (node.prev !== rootNode.id) return acc;
    if (!acc[node.prev]) acc[node.prev] = [];
    acc[node.prev].push(node);
    return acc;
  }, {});

  console.log("grouped",grouped)

  let maxWidth = 0;
  let totalHeight = 0;



  // Position nodes in columns and calculate total height
  Object.values(grouped).forEach((group, colIndex) => {
    group.forEach((node, rowIndex) => {
      const left = (colIndex + 1) * levelWidth;

      const top = totalHeight;
      positions[node.id] = { left, top };
 
      
      maxWidth = Math.max(maxWidth, left);
      
      // Position next nodes
      let nextNode = nodes.find(n => n.id === node.next);
      let nextCol = colIndex + 2;
      while (nextNode) {
        const nextLeft = nextCol * levelWidth;
        positions[nextNode.id] = { left: nextLeft, top };
        maxWidth = Math.max(maxWidth, nextLeft);
        nextNode = nodes.find(n => n.id === nextNode.next);
        nextCol++;
      }

      totalHeight += levelHeight;
    });

    // vertical spacing between groups
    totalHeight += levelHeight / 2;
  });

  // Position root node centered vertically
  const rootNodeTop = (totalHeight - levelHeight) / 2 - 30;
  positions[rootNode.id] = { left: 0, top: rootNodeTop };

  // Calculate connections
  const connections = nodes.flatMap(node => {
    const results = [];
    if (node.prev) results.push({ from: node.prev, to: node.id });
    if (node.next) results.push({ from: node.id, to: node.next });
    return results;
  });

  console.log("totalHeight",totalHeight )

  console.log("positions ",positions)
  
  console.log("diaPosi",  { 
    width: maxWidth + levelWidth,
    height: totalHeight
  } )

  console.log("connections,",connections)
  return { 
    nodePositions: positions, 
    connections, 
    diagramDimensions: { 
      width: maxWidth + levelWidth * 2,  // Add two more level widths for padding
      height: totalHeight
    } 
  };
};

export const calculateArrowProperties = (start, end) => {
  const dx = end.left - start.left;
  const dy = end.top - start.top;   
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);
  return { length, angle };
};