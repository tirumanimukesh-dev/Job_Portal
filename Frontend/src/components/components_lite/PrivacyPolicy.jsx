import React from "react";
import Navbar from "../components_lite/Navbar";
import Footer from "../components_lite/Footer";

import {
  ShieldCheck,
  LockKeyhole,
  Database,
  Eye,
} from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-pink-50">

     
      <Navbar />

   
      <div className="max-w-5xl mx-auto px-6 py-20">

    
        <div className="text-center mb-16">

          <span className="px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#4537e2] font-semibold text-sm">
            Privacy & Security
          </span>

          <h1 className="mt-6 text-5xl font-black tracking-tight text-gray-900">
            Privacy
            <span className="text-[#4537e2]">
              {" "}Policy
            </span>
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your privacy matters to us. Learn how we collect, use,
            and protect your personal information on Job Portal.
          </p>
        </div>

        <div
          className="
            bg-white/80
            backdrop-blur-lg
            rounded-3xl
            shadow-xl
            border
            border-white/40
            p-10
            space-y-10
          "
        >

          <div>
            <div className="flex items-center gap-3 mb-4">

              <div className="w-12 h-12 rounded-2xl bg-[#4537e2]/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#4537e2]" />
              </div>

              <h2 className="text-2xl font-bold text-[#4537e2]">
                1. Introduction
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              This Privacy Policy explains how Job Portal collects,
              uses, stores, and protects your information when you use
              our platform and services.
            </p>
          </div>

       
          <div>
            <div className="flex items-center gap-3 mb-4">

              <div className="w-12 h-12 rounded-2xl bg-[#e72593]/10 flex items-center justify-center">
                <Database className="w-6 h-6 text-[#e72593]" />
              </div>

              <h2 className="text-2xl font-bold text-[#4537e2]">
                2. Information We Collect
              </h2>
            </div>

            <div className="space-y-5">

              <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100">

                <h3 className="font-bold text-gray-800 mb-3">
                  Personal Information
                </h3>

                <ul className="space-y-2 text-gray-600">
                  <li>• Full Name</li>
                  <li>• Email Address</li>
                  <li>• Phone Number</li>
                  <li>• Resume / CV</li>
                  <li>• Profile Photo</li>
                </ul>
              </div>

              <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100">

                <h3 className="font-bold text-gray-800 mb-3">
                  Usage Information
                </h3>

                <ul className="space-y-2 text-gray-600">
                  <li>• IP Address</li>
                  <li>• Browser Type</li>
                  <li>• Device Information</li>
                  <li>• Pages Visited</li>
                  <li>• Session Duration</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">

              <div className="w-12 h-12 rounded-2xl bg-[#4537e2]/10 flex items-center justify-center">
                <Eye className="w-6 h-6 text-[#4537e2]" />
              </div>

              <h2 className="text-2xl font-bold text-[#4537e2]">
                3. How We Use Your Information
              </h2>
            </div>

            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li>
                • To provide and improve our job portal services
              </li>

              <li>
                • To connect candidates with recruiters
              </li>

              <li>
                • To personalize user experience
              </li>

              <li>
                • To notify users about updates and opportunities
              </li>

              <li>
                • To improve platform performance and security
              </li>

              <li>
                • To monitor and prevent fraudulent activities
              </li>
            </ul>
          </div>

        
          <div>
            <div className="flex items-center gap-3 mb-4">

              <div className="w-12 h-12 rounded-2xl bg-[#e72593]/10 flex items-center justify-center">
                <LockKeyhole className="w-6 h-6 text-[#e72593]" />
              </div>

              <h2 className="text-2xl font-bold text-[#4537e2]">
                4. Data Security
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard security measures to protect
              your personal data against unauthorized access, misuse,
              disclosure, or alteration.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#4537e2] mb-4">
              5. Sharing Your Information
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              We do not sell or rent your personal information.
              Information may only be shared with:
            </p>

            <ul className="space-y-3 text-gray-600">
              <li>
                • Verified recruiters and employers
              </li>

              <li>
                • Trusted service providers supporting our platform
              </li>

              <li>
                • Government or legal authorities when required by law
              </li>
            </ul>
          </div>

        
          <div>
            <h2 className="text-2xl font-bold text-[#4537e2] mb-4">
              6. Your Rights
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li>
                • Access your stored information
              </li>

              <li>
                • Request corrections to inaccurate information
              </li>

              <li>
                • Request deletion of your account and data
              </li>

              <li>
                • Withdraw consent for communications
              </li>
            </ul>
          </div>

      
          <div>
            <h2 className="text-2xl font-bold text-[#4537e2] mb-4">
              7. Policy Updates
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy periodically.
              Continued use of the platform after updates indicates
              acceptance of the revised policy.
            </p>
          </div>

      
          <div>
            <h2 className="text-2xl font-bold text-[#4537e2] mb-4">
              8. Contact Us
            </h2>

            <p className="text-gray-600 leading-relaxed">
              If you have any questions or concerns regarding this
              Privacy Policy, feel free to contact us.
            </p>

            <div className="mt-5 bg-purple-50 border border-purple-100 rounded-2xl p-5">

              <p className="font-semibold text-gray-700">
                support@jobportal.com
              </p>

              <p className="text-gray-600 mt-1">
                Job Portal Pvt. Ltd.
              </p>
            </div>
          </div>
        </div>
      </div>

  
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;