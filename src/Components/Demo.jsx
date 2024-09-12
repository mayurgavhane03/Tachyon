// import React from 'react';

// const nodes = [
//   {
//     type: "user",
//     name: "Desktop Client",
//     next: "2",
//     id: "1",
//   },
//   {
//     type: "api",
//     name: "POST /emp",
//     next: "3",
//     prev: "1",
//     id: "2",
//   },
//   {
//     type: "function",
//     name: "createEmployee",
//     next: "4",
//     prev: "2",
//     id: "3",
//   },
//   {
//     type: "database",
//     name: "DynamoDB",
//     prev: "3",
//     id: "4",
//   },
//   {
//     type: "api",
//     name: "GET /emp",
//     next: "6",
//     prev: "1",
//     id: "5",
//   },
//   {
//     type: "function",
//     name: "getEmployee",
//     next: "7",
//     prev: "5",
//     id: "6",
//   },
//   {
//     type: "database",
//     name: "DynamoDB",
//     prev: "6",
//     id: "7",
//   },
//   {
//     type: "api",
//     name: "PUT /emp",
//     next: "9",
//     prev: "7",
//     id: "8",
//   },
//   {
//     type: "function",
//     name: "updateEmployee",
//     next: "10",
//     prev: "8",
//     id: "9",
//   },
//   {
//     type: "database",
//     name: "DynamoDB",
//     prev: "9",
//     id: "10",
//   },
// ];

// // Helper function to get node by ID
// const getNodeById = (id) => {
//   return nodes.find((node) => node.id === id);
// };

// // Tailwind class based on node type
// const getNodeClass = (type) => {
//   switch (type) {
//     case 'user':
//       return 'bg-blue-500 text-white';
//     case 'api':
//       return 'bg-green-500 text-white';
//     case 'function':
//       return 'bg-yellow-500 text-white';
//     case 'database':
//       return 'bg-red-500 text-white';
//     default:
//       return 'bg-gray-500 text-white';
//   }
// };

// const FlowNode = ({ node }) => {
//   return (
//     <div className={`p-4 rounded shadow-md ${getNodeClass(node.type)}`}>
//       {node.name}
//     </div>
//   );
// };

// const FlowDiagram = () => {
//   // Divide nodes into three rows based on the given image
//   const rows = [
//     ["1", "2", "3", "4"], // POST /emp Path
//     ["1", "5", "6", "7"], // GET /emp Path
//     ["1", "8", "9", "10"], // PUT /emp Path
//   ];

//   return (
//     <div className="flex flex-col items-center space-y-8">
//       {rows.map((row, rowIndex) => (
//         <div key={rowIndex} className="flex items-center space-x-8">
//           {row.map((nodeId, nodeIndex) => {
//             const node = getNodeById(nodeId);
//             return (
//               <React.Fragment key={nodeIndex}>
//                 <FlowNode node={node} />
//                 {nodeIndex < row.length - 1 && (
//                   <div className="w-16 h-0.5 bg-black"></div> // Arrow representation
//                 )}
//               </React.Fragment>
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// };

 

// export default FlowDiagram;
