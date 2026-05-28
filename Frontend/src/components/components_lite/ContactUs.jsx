import React, { useState } from "react";
import Navbar from "../components_lite/Navbar";
import Footer from "../components_lite/Footer";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  UserRound,
  MessageSquareText,
  Headphones,
} from "lucide-react";

import { toast } from "sonner";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
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

    toast.success("Message sent successfully");

    setFormData({
      fullname: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-pink-50 overflow-hidden">

      <Navbar />


      <div className="absolute top-10 left-0 w-80 h-80 bg-[#4537e2]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#e72593]/10 blur-3xl rounded-full"></div>

  
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

   
        <div className="text-center mb-16">

          <span className="px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#4537e2] font-semibold text-sm">
            Get In Touch
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-black tracking-tight text-gray-900">
            Contact
            <span className="text-[#4537e2]">
              {" "}Us
            </span>
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions, feedback, or facing any issues?
            Our team is always ready to help and support you.
          </p>
        </div>

    
        <div
          className="
            bg-white/80
            backdrop-blur-lg
            rounded-3xl
            shadow-2xl
            border
            border-white/40
            overflow-hidden
            grid
            grid-cols-1
            lg:grid-cols-2
          "
        >

       
          <div className="bg-gradient-to-br from-[#4537e2] to-[#e72593] p-10 text-white flex flex-col justify-between">

            <div>

              <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center mb-8">
                <Headphones className="w-10 h-10" />
              </div>

              <h2 className="text-4xl font-black leading-tight">
                We’d Love To Hear From You
              </h2>

              <p className="mt-5 text-white/90 leading-relaxed">
                Whether you're a job seeker, recruiter, or partner,
                feel free to contact us for support, inquiries,
                or feedback regarding our platform.
              </p>
            </div>

            <div className="mt-12 space-y-6">

       
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>

                <div>
                  <p className="font-bold">
                    support@jobportal.com
                  </p>

                  <p className="text-sm text-white/80">
                    Email Support
                  </p>
                </div>
              </div>

        
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>

                <div>
                  <p className="font-bold">
                    +91 9876543210
                  </p>

                  <p className="text-sm text-white/80">
                    Customer Support
                  </p>
                </div>
              </div>

           
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>

                <div>
                  <p className="font-bold">
                    Madurai, Tamil Nadu
                  </p>

                  <p className="text-sm text-white/80">
                    India
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
                    required
                    className="w-full px-3 py-4 outline-none bg-transparent"
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
                    required
                    className="w-full px-3 py-4 outline-none bg-transparent"
                  />
                </div>
              </div>

              <div>

                <label className="font-semibold text-gray-700 block mb-2">
                  Subject
                </label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2]">

                  <MessageSquareText className="w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={changeHandler}
                    placeholder="Enter subject"
                    required
                    className="w-full px-3 py-4 outline-none bg-transparent"
                  />
                </div>
              </div>

              <div>

                <label className="font-semibold text-gray-700 block mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={changeHandler}
                  rows="5"
                  placeholder="Write your message..."
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

                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;