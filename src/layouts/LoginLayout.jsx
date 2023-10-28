import NavBar from "../pages/common/navBar/NavBar";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../providers/ThemeProvider";
import { useContext } from "react";

const LoginLayout = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`max-w-7xl mx-auto ${
        isDarkMode ? "dark-theme" : "light-theme"
      }`}
    >
      <NavBar />
      <Outlet />
    </div>
  );
};

export default LoginLayout;
