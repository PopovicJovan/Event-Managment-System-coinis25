import { NavbarComponent } from "../components/Navbar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  );
};
