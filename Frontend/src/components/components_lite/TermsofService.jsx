import React from "react";
import Navbar from "../components_lite/Navbar";
import Footer from "../components_lite/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-pink-50">

      
      <Navbar />

  
      <div className="max-w-5xl mx-auto px-6 py-20">

    
        <div className="text-center mb-16">

          <span className="px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#4537e2] font-semibold text-sm">
            Legal Information
          </span>

          <h1 className="mt-6 text-5xl font-black tracking-tight text-gray-900">
            Terms &
            <span className="text-[#4537e2]">
              {" "}Conditions
            </span>
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using our platform.
            By accessing Job Portal, you agree to comply with the following conditions.
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
            <h2 className="text-2xl font-bold text-[#4537e2] mb-4">
              1. Introduction
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Welcome to Job Portal. These Terms and Conditions govern your use
              of our website and services. By accessing or using our platform,
              you agree to comply with these terms and applicable laws.
            </p>
          </div>

    
          <div>
            <h2 className="text-2xl font-bold text-[#4537e2] mb-4">
              2. Acceptance of Terms
            </h2>

            <p className="text-gray-600 leading-relaxed">
              By using our services, you acknowledge that you have read,
              understood, and agreed to these Terms and Conditions. If you do
              not agree with any part of these terms, you must discontinue use
              of the platform immediately.
            </p>
          </div>

    
          <div>
            <h2 className="text-2xl font-bold text-[#4537e2] mb-4">
              3. User Responsibilities
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Users are responsible for providing accurate information while
              creating accounts, applying for jobs, or posting opportunities.
              Misleading information, impersonation, or unlawful activities are
              strictly prohibited.
            </p>
          </div>

    
          <div>
            <h2 className="text-2xl font-bold text-[#4537e2] mb-4">
              4. Privacy & Security
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We value your privacy and take reasonable measures to protect your
              personal information. However, users are also responsible for
              maintaining the confidentiality of their account credentials.
            </p>
          </div>

    
          <div>
            <h2 className="text-2xl font-bold text-[#4537e2] mb-4">
              5. Intellectual Property
            </h2>

            <p className="text-gray-600 leading-relaxed">
              All platform content including logos, designs, text, graphics,
              and software are the intellectual property of Job Portal and may
              not be copied, reproduced, or distributed without prior written
              permission.
            </p>
          </div>

      
          <div>
            <h2 className="text-2xl font-bold text-[#4537e2] mb-4">
              6. Limitation of Liability
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Job Portal shall not be held responsible for any direct,
              indirect, incidental, or consequential damages arising from the
              use or inability to use the platform or services.
            </p>
          </div>

    
          <div>
            <h2 className="text-2xl font-bold text-[#4537e2] mb-4">
              7. Changes to Terms
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify or update these Terms and
              Conditions at any time without prior notice. Continued use of the
              platform after updates constitutes acceptance of the revised
              terms.
            </p>
          </div>

      
          <div>
            <h2 className="text-2xl font-bold text-[#4537e2] mb-4">
              8. Contact Information
            </h2>

            <p className="text-gray-600 leading-relaxed">
              If you have any questions regarding these Terms and Conditions,
              please contact us at:
            </p>

            <div className="mt-4 bg-purple-50 border border-purple-100 rounded-2xl p-5">
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

export default TermsOfService;