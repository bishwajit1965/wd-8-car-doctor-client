import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.svg";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { useContext } from "react";

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`lg:mt-10 mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 justify-between lg:py-12 p-2 shadow-lg ${
          isDarkMode ? "theme-dark" : "bg-base-200"
        }`}
      >
        <div className="col-span-3 space-y-3">
          <img src={Logo} alt="" className="w-16" />
          <p className="text-xs">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
          <div className="flex items-center space-x-2">
            <FaGoogle />
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div className="col-span-3">
          <h4 className="font-bold">About</h4>
          <div className="grid mt-2 text-xs space-y-2">
            <Link t0="#" className="m-0">
              Home
            </Link>
            <Link t0="#" className="m-0">
              Service
            </Link>
            <Link t0="#" className="m-0">
              Contact
            </Link>
          </div>
        </div>
        <div className="col-span-3">
          <h4 className="font-bold">Company</h4>
          <div className="grid mt-2 text-xs space-y-2">
            <Link t0="#" className="m-0">
              Why Car Doctor ?
            </Link>
            <Link t0="#" className="m-0">
              About Us
            </Link>
            <Link t0="#" className="m-0">
              Contact
            </Link>
          </div>
        </div>
        <div className="col-span-3">
          <h4 className="font-bold">Support</h4>
          <div className="grid mt-2 text-xs space-y-2">
            <Link t0="#" className="m-0">
              Support Center
            </Link>
            <Link t0="#" className="m-0">
              Feedback
            </Link>
            <Link t0="#" className="m-0">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-center p-2 ${
          isDarkMode ? "theme-dark" : "bg-base-300"
        }`}
      >
        <span className=" ">&copy; 2023 All rights reserved to Car Doctor</span>
      </div>
    </>
  );
};

export default Footer;
