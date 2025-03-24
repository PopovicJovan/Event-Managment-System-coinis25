import { NavbarComponent } from "../components/navbar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  );
};
