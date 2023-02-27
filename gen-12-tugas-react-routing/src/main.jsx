import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import AddNote from "./AddNote";
import EditNote from "./EditNote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "addNote", element: <AddNote /> },
      { path: "editNote", element: <EditNote /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
