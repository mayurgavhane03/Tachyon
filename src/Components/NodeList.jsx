import React from "react";

// Reusable Node component
const Node = ({ name, type, details, id }) => {
  return (
    <div className="flex flex-col items-center bg-blue-100 p-4 rounded-lg shadow-lg w-48">
      <div className="font-bold text-lg">{name}</div>
      <div className="text-sm text-gray-600">{type}</div>
      {details && (
        <div className="mt-2 text-sm text-gray-700">
          {details.method && <div><strong>Method:</strong> {details.method}</div>}
          {details.endpoint && <div><strong>Endpoint:</strong> {details.endpoint}</div>}
        </div>
      )}
      <div className="mt-2 text-sm text-gray-500">ID: {id}</div>
    </div>
  );
};

// Reusable Arrow component
const Arrow = ({ direction }) => {
  const arrowStyle = direction === "next" 
    ? "w-16 h-16 border-t-4 border-r-4 transform rotate-45 mt-4 ml-4" 
    : "w-16 h-16 border-t-4 border-l-4 transform -rotate-45 mt-4 mr-4";

  return <div className={arrowStyle}></div>;
};

// Main doubly linked list visualization component
const DoublyLinkedList = ({ data }) => {
  return (
    <div className="flex flex-row items-center space-x-6 overflow-x-auto p-6">
      {data.map((node, index) => (
        <div key={node.id} className="flex items-center">
          {/* Render 'previous' arrow if not the first node */}
          {node.prev && <Arrow direction="prev" />}
          
          {/* Render node */}
          <Node name={node.name} type={node.type} details={node.details} id={node.id} />
          
          {/* Render 'next' arrow if not the last node */}
          {node.next && <Arrow direction="next" />}
        </div>
      ))}
    </div>
  );
};

// Sample JSON Data
export const jsondata2 = [
  {  
    title: "Employee CRUD Sequence",
    nodes: [
      {
        type: "user",
        name: "Desktop Client",
        details: {
          browser: "Chrome",
          "anonymous-user": true
        },
        correlation_id: "123456",
        next: "2",
        id: "1"
      },
      {
        type: "api",
        name: "POST /emp",
        details: {
          method: "POST",
          component: "API gateway",
          endpoint: "https://www.tachyonsys.com.au/emp",
          access: "public"
        },
        correlation_id: "123456",
        next: "3",
        prev: "1",
        id: "2"
      },
      {
        type: "function",
        name: "createEmployee",
        details: {
          method: "createEmployee",
          Parameters: "{name, dob, contact, address}",
          return: "id"
        },
        correlation_id: "123456",
        next: "4",
        prev: "2",
        id: "3"
      },
      {
        type: "database",
        name: "DynamoDB",
        details: {
          type: "NOSQL",
          Provider: "AWS",
          endpoint: "https://aws.com/dynamodb/a72b898146ca576",
          table: "employees"
        },
        correlation_id: "123456",
        prev: "3",
        id: "4"
      },
      {
        type: "api",
        name: "GET /emp",
        details: {
          method: "GET",
          component: "API gateway",
          endpoint: "https://www.tachyonsys.com.au/emp",
          access: "public"
        },
        correlation_id: "654321",
        next: "6",
        prev: "1",
        id: "5"
      },
      {
        type: "function",
        name: "getEmployee",
        details: {
          method: "getEmployee",
          Parameters: "id",
          return: "employee"
        },
        correlation_id: "654321",
        next: "7",
        prev: "5",
        id: "6"
      },
      {
        type: "database",
        name: "DynamoDB",
        details: {
          type: "NOSQL",
          Provider: "AWS",
          endpoint: "https://aws.com/dynamodb/a72b898146ca576",
          table: "employees"
        },
        correlation_id: "654321",
        prev: "6",
        id: "7"
      },
      {
        type: "api",
        name: "PUT /emp",
        details: {
          method: "PUT",
          component: "API gateway",
          endpoint: "https://www.tachyonsys.com.au/emp",
          access: "public"
        },
        correlation_id: "214365",
        next: "9",
        prev: "7",
        id: "8"
      },
      {
        type: "function",
        name: "updateEmployee",
        details: {
          method: "updateEmployee",
          Parameters: "{id, address}",
          return: "{employee}"
        },
        correlation_id: "214365",
        next: "10",
        prev: "8",
        id: "9"
      },
      {
        type: "database",
        name: "DynamoDB",
        details: {
          type: "NOSQL",
          Provider: "AWS",
          endpoint: "https://aws.com/dynamodb/a72b898146ca576",
          table: "employees"
        },
        correlation_id: "214365",
        prev: "9",
        id: "10"
      }
    ]
  }
];

export default DoublyLinkedList