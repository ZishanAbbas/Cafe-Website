import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#6F4E37] text-white py-15 px-6 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Logo */}
        <div className="mb-6 md:mb-0">
          <img
            src={logo} // Update with your logo path
            alt="Amro Cafe Logo"
            className="h-16"
          />
        </div>

        {/* Middle - Navigation Links (Stacked) */}
        <div className="flex flex-col items-center space-y-3 text-lg font-semibold">
          <a href="#gallery" className="hover:text-yellow-400 transition-all">
            Gallery
          </a>
          <a href="#menu" className="hover:text-yellow-400 transition-all">
            Menu
          </a>
          <a href="#location" className="hover:text-yellow-400 transition-all">
            Location
          </a>
        </div>

        {/* Right Side - Contact Information */}
        <div className="text-center md:text-right mt-6 md:mt-0 flex flex-col gap-2.5">
          <p className="text-lg font-semibold text-start">📞 +91 98765 43210</p>
          <p className="text-lg">📧 support@amrocafe.com</p>
          <p className="text-lg w-[222px] text-start">
            🏢 Times Square, Gachibowli Rd, Vinayak Nagar, Indira Nagar,
            Gachibowli, Hyderabad, Telangana 500032
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
