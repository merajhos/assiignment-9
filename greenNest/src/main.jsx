import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import PlantsDetails from "./pages/plantDetails/PlantsDetails";
import Plants from "./pages/Plants";
import ErrorPages from "./ErrorPage";
import Loading from "./pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
         index: true,
        element: <Home /> 
      },
     
      { 
        path: "/home/:id",
        element: (
          <ProtectedRoute>
            <PlantsDetails />
          </ProtectedRoute>
        )
       },
      { 
        path: "plants",
        element: <Plants />
       },
      {
        path: "plants/:id",
        element: (
          <ProtectedRoute>
            <PlantsDetails />
          </ProtectedRoute>
        )
      },
      {
         path: "login",
        element: <Login />
       },
      { 
        path: "signup",
        element: <Signup /> 
      },     
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        )
      },
       { 
        path: "loading",
        element: <Loading /> 
      },
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

