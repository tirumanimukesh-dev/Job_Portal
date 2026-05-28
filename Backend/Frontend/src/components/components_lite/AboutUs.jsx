import React from "react";
import Navbar from "../components_lite/Navbar";
import Footer from "../components_lite/Footer";

import {
  BriefcaseBusiness,
  Users,
  Rocket,
  ShieldCheck,
  Target,
  Globe,
} from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-pink-50 overflow-hidden">

    
      <Navbar />

    
      <div className="absolute top-10 left-0 w-80 h-80 bg-[#4537e2]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#e72593]/10 blur-3xl rounded-full"></div>

     
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        <div className="text-center">

          <span className="px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#4537e2] font-semibold text-sm">
            About Job Portal
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-black tracking-tight text-gray-900 leading-tight">
            Connecting Talent With
            <span className="text-[#4537e2]">
              {" "}Opportunities
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Job Portal is a modern career platform designed to help
            students, professionals, and recruiters connect faster,
            smarter, and more efficiently in today’s competitive job market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">

          <div
            className="
              bg-white/80
              backdrop-blur-lg
              rounded-3xl
              shadow-lg
              border
              border-white/40
              p-10
              text-center
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >

            <h2 className="text-5xl font-black text-[#4537e2]">
              10K+
            </h2>

            <p className="mt-4 text-gray-600 font-semibold">
              Active Jobs
            </p>
          </div>

          <div
            className="
              bg-white/80
              backdrop-blur-lg
              rounded-3xl
              shadow-lg
              border
              border-white/40
              p-10
              text-center
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >

            <h2 className="text-5xl font-black text-[#e72593]">
              5K+
            </h2>

            <p className="mt-4 text-gray-600 font-semibold">
              Hiring Companies
            </p>
          </div>

          <div
            className="
              bg-white/80
              backdrop-blur-lg
              rounded-3xl
              shadow-lg
              border
              border-white/40
              p-10
              text-center
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >

            <h2 className="text-5xl font-black text-[#4537e2]">
              25K+
            </h2>

            <p className="mt-4 text-gray-600 font-semibold">
              Successful Hires
            </p>
          </div>
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-28">

        
          <div
            className="
              bg-white/80
              backdrop-blur-lg
              rounded-3xl
              shadow-xl
              border
              border-white/40
              p-10
            "
          >

            <div className="w-16 h-16 rounded-2xl bg-[#4537e2]/10 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-[#4537e2]" />
            </div>

            <h2 className="text-3xl font-black text-gray-900">
              Our Mission
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              We aim to simplify the hiring process by building a
              platform where talented individuals and top recruiters
              can connect seamlessly. Our mission is to make career
              growth more accessible, transparent, and efficient.
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
            "
          >

            <div className="w-16 h-16 rounded-2xl bg-[#e72593]/10 flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-[#e72593]" />
            </div>

            <h2 className="text-3xl font-black text-gray-900">
              Our Vision
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              We envision a future where finding jobs, hiring talent,
              and building careers becomes faster and more intelligent
              through technology-driven solutions and modern recruitment systems.
            </p>
          </div>
        </div>

       
        <div className="mt-28">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-black text-gray-900">
              Why Choose
              <span className="text-[#4537e2]">
                {" "}Us
              </span>
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Designed for both job seekers and recruiters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          
            <div
              className="
                bg-white/80
                backdrop-blur-lg
                rounded-3xl
                shadow-lg
                border
                border-white/40
                p-8
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <div className="w-14 h-14 rounded-2xl bg-[#4537e2]/10 flex items-center justify-center mb-5">
                <BriefcaseBusiness className="w-7 h-7 text-[#4537e2]" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                Smart Job Search
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Explore opportunities tailored to your skills,
                interests, and career goals.
              </p>
            </div>

            <div
              className="
                bg-white/80
                backdrop-blur-lg
                rounded-3xl
                shadow-lg
                border
                border-white/40
                p-8
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <div className="w-14 h-14 rounded-2xl bg-[#e72593]/10 flex items-center justify-center mb-5">
                <Users className="w-7 h-7 text-[#e72593]" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                Recruiter Access
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Connect directly with verified recruiters and hiring companies.
              </p>
            </div>

            <div
              className="
                bg-white/80
                backdrop-blur-lg
                rounded-3xl
                shadow-lg
                border
                border-white/40
                p-8
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <div className="w-14 h-14 rounded-2xl bg-[#4537e2]/10 flex items-center justify-center mb-5">
                <ShieldCheck className="w-7 h-7 text-[#4537e2]" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                Secure Platform
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Your data and applications are protected with secure systems.
              </p>
            </div>
          </div>
        </div>

      
        <div
          className="
            mt-28
            rounded-3xl
            bg-gradient-to-r
            from-[#4537e2]
            to-[#e72593]
            p-14
            text-center
            text-white
            shadow-2xl
          "
        >

          <div className="w-20 h-20 rounded-3xl bg-white/20 mx-auto flex items-center justify-center mb-8">
            <Globe className="w-10 h-10" />
          </div>

          <h2 className="text-4xl font-black">
            Start Your Career Journey Today
          </h2>

          <p className="mt-5 text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for your dream job or searching
            for the right talent, Job Portal is here to help you succeed.
          </p>

          <button
            className="
              mt-8
              px-8
              py-4
              rounded-2xl
              bg-white
              text-[#4537e2]
              font-bold
              text-lg
              shadow-lg
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Explore Jobs
          </button>
        </div>
      </div>

   
      <Footer />
    </div>
  );
};

export default AboutUs;