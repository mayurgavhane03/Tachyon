import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { jsondata1 } from "./Components/constants/jsondata1";
import Sequence from "./Components/Sequence";
import { jsondata2 } from "./Components/constants/jsondata2";
 
import EmployeeCRUDDiagram from "./Components/EmployeeCRUDDiagram";

const AppLayout = () => {
  return (
    <div>
      <Sequence title={jsondata1[0]?.title} nodes={jsondata1[0]?.nodes} />
      <EmployeeCRUDDiagram data={jsondata2} />;
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
