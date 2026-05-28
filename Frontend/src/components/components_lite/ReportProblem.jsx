import React, { useState } from "react";
import Navbar from "../components_lite/Navbar";
import Footer from "../components_lite/Footer";

import {
  AlertTriangle,
  Mail,
  UserRound,
  MessageSquareText,
  Send,
} from "lucide-react";

import { toast } from "sonner";

const ReportProblem = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    issueType: "",
    message: "",
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    toast.success("Problem report submitted successfully");

    setFormData({
      fullname: "",
      email: "",
      issueType: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-pink-50">

      <Navbar />

  
      <div className="max-w-5xl mx-auto px-6 py-20">

    
        <div className="text-center mb-16">

          <span className="px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#4537e2] font-semibold text-sm">
            Support Center
          </span>

          <h1 className="mt-6 text-5xl font-black tracking-tight text-gray-900">
            Report a
            <span className="text-[#e72593]">
              {" "}Problem
            </span>
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Facing issues with applications, account access,
            recruiters, or platform functionality?
            Let us know and we’ll help resolve it quickly.
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
            overflow-hidden
            grid
            grid-cols-1
            lg:grid-cols-2
          "
        >

          <div className="bg-gradient-to-br from-[#4537e2] to-[#e72593] text-white p-10 flex flex-col justify-between">

            <div>

              <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center mb-8">
                <AlertTriangle className="w-10 h-10" />
              </div>

              <h2 className="text-4xl font-black leading-tight">
                Need Help?
              </h2>

              <p className="mt-5 text-white/90 leading-relaxed">
                Our support team is here to assist you with technical issues,
                account problems, job application errors, and platform-related concerns.
              </p>
            </div>

           
            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>

                <div>
                  <p className="font-bold">
                    support@jobportal.com
                  </p>

                  <p className="text-sm text-white/80">
                    24/7 Email Support
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <MessageSquareText className="w-5 h-5" />
                </div>

                <div>
                  <p className="font-bold">
                    Fast Response
                  </p>

                  <p className="text-sm text-white/80">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10">

            <form
              onSubmit={submitHandler}
              className="space-y-6"
            >

           
              <div>

                <label className="font-semibold text-gray-700 block mb-2">
                  Full Name
                </label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2]">

                  <UserRound className="w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={changeHandler}
                    placeholder="John Doe"
                    className="w-full px-3 py-4 outline-none bg-transparent"
                    required
                  />
                </div>
              </div>

            
              <div>

                <label className="font-semibold text-gray-700 block mb-2">
                  Email Address
                </label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2]">

                  <Mail className="w-5 h-5 text-gray-400" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="johndoe@gmail.com"
                    className="w-full px-3 py-4 outline-none bg-transparent"
                    required
                  />
                </div>
              </div>

         
              <div>

                <label className="font-semibold text-gray-700 block mb-2">
                  Issue Type
                </label>

                <select
                  name="issueType"
                  value={formData.issueType}
                  onChange={changeHandler}
                  required
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-2xl
                    px-4
                    py-4
                    bg-white
                    shadow-sm
                    outline-none
                    focus:ring-2
                    focus:ring-[#4537e2]
                  "
                >
                  <option value="">
                    Select an issue
                  </option>

                  <option>
                    Login Problem
                  </option>

                  <option>
                    Job Application Error
                  </option>

                  <option>
                    Recruiter Issue
                  </option>

                  <option>
                    Account Verification
                  </option>

                  <option>
                    Payment / Subscription
                  </option>

                  <option>
                    Other
                  </option>
                </select>
              </div>

           
              <div>

                <label className="font-semibold text-gray-700 block mb-2">
                  Describe Your Problem
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={changeHandler}
                  rows="5"
                  placeholder="Explain your issue in detail..."
                  required
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-2xl
                    px-4
                    py-4
                    bg-white
                    shadow-sm
                    outline-none
                    resize-none
                    focus:ring-2
                    focus:ring-[#4537e2]
                  "
                ></textarea>
              </div>

            
              <button
                type="submit"
                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-[#4537e2]
                  hover:bg-[#372bc0]
                  text-white
                  font-bold
                  text-lg
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <Send className="w-5 h-5" />

                Submit Report
              </button>
            </form>
          </div>
        </div>
      </div>

 
      <Footer />
    </div>
  );
};

export default ReportProblem;