import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  AdminDashboard,
  AdminLoginPage,
  AdminRegisterPage,
  UserDashboardPage,
  UserLoginPage,
} from "../pages";
import MainLayout from "../layouts/main-layout";

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
    element: <MainLayout />,
    children: [
      {
        path: "admin/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "user/dashboard",
        element: <UserDashboardPage />,
      },
    ],
  },
]);

/*
{
  path: "*",
  element: <div>Not Found</div>,
},
*/
