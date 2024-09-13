import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import EmployeeFlowDiagram2 from "./Components/MainComonents/EmployeeFlowDiagram";

const AppLayout = () => {
  return (
    <div>
    
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element:   <EmployeeFlowDiagram2 /> },
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
