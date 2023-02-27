import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import AddNote from "./AddNote";
import DetailNote, { noteLoader } from "./DetailNote";
import EditNote, { noteEditLoader } from "./EditNote";

import NotesProvider from "./NotesProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "addNote", element: <AddNote /> },
      { path: "detailNote/:id", element: <DetailNote />, loader: noteLoader },
      { path: "editNote/:id", element: <EditNote />, loader: noteEditLoader },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <NotesProvider>
    <RouterProvider router={router} />
  </NotesProvider>
);
