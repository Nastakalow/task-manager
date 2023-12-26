import { createBrowserRouter, Navigate } from "react-router-dom";
import { AdminLoginPage, AdminRegisterPage, UserLoginPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/user/login" replace />,
  },
  {
    path: "admin/login",
    element: <AdminLoginPage />,
  },
  {
    path: "admin/register",
    element: <AdminRegisterPage />,
  },
  {
    path: "user/login",
    element: <UserLoginPage />,
  },
  {
    path: "/dashboard",
    element: <div>Dashboard</div>,
  },
]);

/*
{
  path: "*",
  element: <div>Not Found</div>,
},
*/
