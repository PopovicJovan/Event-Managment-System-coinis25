import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { PartiesPage } from "../pages/parties";
import { RootLayout } from "../layouts/main";
import {Party} from "../pages/party.jsx";
import {AdminLayout} from "../layouts/admin.jsx";
import {AdminUsers} from "../pages/admin/admin-users.jsx";
import {AdminEvents} from "../pages/admin/admin-events.jsx";
import {AdminRolesCategories} from "../pages/admin/admin-roles-categories.jsx";
import {AdminUsersChart} from "../pages/admin/admin-users-chart.jsx";
import { AboutUs } from "../pages/aboutUs";

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
        path: "/parties/:id",
        element: <Party />,
      },
      {
        path: "/about",
        element: <AboutUs />
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
        },
        {
          path: "events",
          element: <AdminEvents />
        },
        {
          path: "categories",
          element: <AdminRolesCategories />
        },
        {
          path: "roles",
          element: <AdminRolesCategories />
        },
        {
          path: "users/chart",
          element: <AdminUsersChart />
        }
    ]
  }
]);
