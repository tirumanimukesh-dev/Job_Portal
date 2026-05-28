import React, { useState } from "react";
import Navbar from "../components_lite/Navbar";
import Footer from "../components_lite/Footer";

import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
} from "lucide-react";

const faqData = [
  {
    question: "How do I create an account?",
    answer:
      "You can create an account by clicking the Register button on the top navigation bar and filling in your details.",
  },
  {
    question: "How can I apply for jobs?",
    answer:
      "Browse available jobs, open the job details page, and click the Apply button to submit your application.",
  },
  {
    question: "Can recruiters post job openings?",
    answer:
      "Yes. Recruiters can create recruiter accounts and post job opportunities directly through the dashboard.",
  },
  {
    question: "How do I upload my resume?",
    answer:
      "You can upload your resume and profile photo during registration or later from your profile settings page.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes. We use secure technologies and industry-standard practices to protect your personal information.",
  },
  {
    question: "Can I edit my profile after registration?",
    answer:
      "Yes. Users can update their profile, resume, skills, and other details anytime from the profile section.",
  },
  {
    question: "What should I do if I face login issues?",
    answer:
      "You can use the Report a Problem page or contact our support team for assistance with account-related issues.",
  },
  {
    question: "Is Job Portal free to use?",
    answer:
      "Yes. Job seekers can browse and apply for jobs completely free of charge.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-pink-50 overflow-hidden">

 
      <Navbar />

   
      <div className="absolute top-10 left-0 w-80 h-80 bg-[#4537e2]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#e72593]/10 blur-3xl rounded-full"></div>

   
      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">

      
        <div className="text-center mb-16">

          <span className="px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#4537e2] font-semibold text-sm">
            Support & Help
          </span>

          <h1 className="mt-6 text-5xl font-black tracking-tight text-gray-900">
            Frequently Asked
            <span className="text-[#4537e2]">
              {" "}Questions
            </span>
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about accounts,
            job applications, recruiters, and platform usage.
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
            p-6
            md:p-10
          "
        >

          <div className="space-y-5">

            {faqData.map((faq, index) => (
              <div
                key={index}
                className="
                  border
                  border-gray-200
                  rounded-2xl
                  overflow-hidden
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                "
              >

            
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    text-left
                    px-6
                    py-5
                    hover:bg-purple-50
                    transition-all
                    duration-300
                  "
                >

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-2xl bg-[#4537e2]/10 flex items-center justify-center">
                      <HelpCircle className="w-6 h-6 text-[#4537e2]" />
                    </div>

                    <h2 className="text-lg md:text-xl font-bold text-gray-900">
                      {faq.question}
                    </h2>
                  </div>

                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#4537e2]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#4537e2]" />
                  )}
                </button>

    
                <div
                  className={`
                    transition-all
                    duration-300
                    overflow-hidden
                    ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="px-6 pb-6 pl-22">

                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

     
          <div
            className="
              mt-12
              rounded-3xl
              bg-gradient-to-r
              from-[#4537e2]
              to-[#e72593]
              p-10
              text-center
              text-white
            "
          >

            <h2 className="text-3xl font-black">
              Still Have Questions?
            </h2>

            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              Our support team is always ready to help you with
              account issues, job applications, and recruiter support.
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
                hover:scale-105
                transition-all
                duration-300
                shadow-lg
              "
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQs;