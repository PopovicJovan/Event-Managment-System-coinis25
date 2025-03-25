import { Footer } from "../components/footer";
import { NavbarComponent } from "../components/navbar";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/auth-context";

export const RootLayout = () => {
  return (
    <>
      <AuthProvider>
        <NavbarComponent />
        <Outlet />
        <Footer />
      </AuthProvider>
    </>
  );
};
