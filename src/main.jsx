import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Destination from "./components/Destination/Destination";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import News from "./components/News/News";
import AuthProvider from "./Providers/AuthProvider";
import Register from "./components/Register/Register";
import LoginLayout from "./Layout/LoginLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "destination",
        element: <Destination></Destination>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "news",
        element: <News></News>,
      },
    
    ],
  },
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: 'register',
        element:<Register></Register>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
