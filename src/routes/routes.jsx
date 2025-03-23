import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { PartiesPage } from "../pages/parties";
import { RootLayout } from "../layouts/main";
import {AdminLayout} from "../layouts/admin.jsx";
import {AdminUsers} from "../pages/admin/admin-users.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/parties",
        element: <PartiesPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children:[
        {
          path: "users",
          element: <AdminUsers />
        }
    ]
  }
]);
