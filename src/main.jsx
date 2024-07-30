import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Pages/Layout";
import Movies from "./Components/Movies/Movies";
import AdminProfile from "./Components/AdminProfile/AdminProfile";
import Login from "./Components/Login/Login";
import App from "./App";
import Register from "./Pages/Register";
import { PageNotFound } from "./Pages/PageNotFound/PageNotFound";
import UserEditReviews from "./Pages/UserEditReviews";
import UserProfile from "./Pages/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "admin",
        element: <AdminProfile />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "edit-review",
        element: <UserEditReviews />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "UserProfile",
        elemente: <UserProfile />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
