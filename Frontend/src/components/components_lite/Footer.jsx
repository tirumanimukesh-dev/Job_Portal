import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-10">

  
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm font-medium text-gray-600">

          <Link
            to={"/AboutUs"}
            className="hover:text-[#4537e2] transition-all duration-300"
          >
            About Us
          </Link>

          <span className="text-gray-300">|</span>

          <Link
            to={"/ContactUs"}
            className="hover:text-[#4537e2] transition-all duration-300"
          >
            Contact Us
          </Link>

          <span className="text-gray-300">|</span>

          <Link
            to={"/FAQs"}
            className="hover:text-[#4537e2] transition-all duration-300"
          >
            FAQs
          </Link>

          <span className="text-gray-300">|</span>

          <Link
            to={"/TermsofService"}
            className="hover:text-[#4537e2] transition-all duration-300"
          >
            Terms and Conditions
          </Link>

          <span className="text-gray-300">|</span>

          <Link
            to={"/ReportProblem"}
            className="hover:text-[#4537e2] transition-all duration-300"
          >
            Report a Problem
          </Link>

          <span className="text-gray-300">|</span>

          <Link
            to={"/PrivacyPolicy"}
            className="hover:text-[#4537e2] transition-all duration-300"
          >
            Privacy Policy
          </Link>
        </div>

        <div className="mt-6 text-center">

          <p className="text-sm text-gray-500">
            All rights reserved © 2026 Job Portal Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;