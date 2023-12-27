import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  AdminRegisterPage,
  AdminLoginPage,
  AdminDashboardPage,
  AdminTasksPage,
  AdminCreateUserPage,
  UserLoginPage,
  UserDashboardPage,
  UserTasksPage,
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
        element: <AdminDashboardPage />,
      },
      {
        path: "admin/tasks",
        element: <AdminTasksPage />,
      },
      {
        path: "admin/create-user",
        element: <AdminCreateUserPage />,
      },
      {
        path: "user/dashboard",
        element: <UserDashboardPage />,
      },
      {
        path: "user/tasks",
        element: <UserTasksPage />,
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
