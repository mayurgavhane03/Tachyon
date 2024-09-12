import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import EmployeeFlowDiagram from "./Components/EmployeeFlowDiagram";
import DiagramRenderer from "./Components/MainComonents/DiagramRenderer";
 
const nodes = [
  { type: "user", name: "Desktop Client", next: "2", id: "1" },
  { type: "api", name: "POST /emp", next: "3", prev: "1", id: "2" },
  { type: "function", name: "createEmployee", next: "4", prev: "2", id: "3" },
  { type: "database", name: "DynamoDB", prev: "3", id: "4" },
  { type: "api", name: "GET /emp", next: "6", prev: "1", id: "5" },
  { type: "function", name: "getEmployee", next: "7", prev: "5", id: "6" },
  { type: "database", name: "DynamoDB", prev: "6", id: "7" },
  { type: "api", name: "PUT /emp", next: "9", prev: "7", id: "8" },
  { type: "function", name: "updateEmployee", next: "10", prev: "8", id: "9" },
  { type: "database", name: "DynamoDB", prev: "9", id: "10" },
];
const AppLayout = () => {
  return (
    <div>
      {/* <Sequence /> */}
    <DiagramRenderer  />
      <EmployeeFlowDiagram />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      // { path: "/", element: <Home /> },
    ],
  },
]);

const App = () => {
  return (
    <div className="h-auto">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
