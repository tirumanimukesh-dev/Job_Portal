import React from "react";
import JobCards from "./JobCards";
import { useSelector } from "react-redux";
import { BriefcaseBusiness } from "lucide-react";

const LatestJobs = () => {
  const allJobs = useSelector((state) => state.jobs?.allJobs || []);

  return (
    
    <div className="bg-gradient-to-b from-purple-50 to-purple-50 py-20 overflow-hidden">
     
      <div className="absolute top-10 left-0 w-80 h-80 bg-[#4537e2]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#e72593]/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

       
        <div className="text-center mb-16">

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#4537e2] text-sm font-semibold">
            <BriefcaseBusiness className="w-4 h-4" />
            Featured Opportunities
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-black tracking-tight text-gray-900">
            Latest & Top
            <span className="text-[#4537e2]"> Job Openings</span>
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore trending opportunities from top companies and
            discover roles that match your skills and career goals.
          </p>
        </div>

       
        {allJobs.length === 0 ? (

          <div className="flex flex-col items-center justify-center py-24 bg-white/70 backdrop-blur-lg rounded-3xl shadow-lg border border-white/40">

            <div className="w-20 h-20 rounded-full bg-[#4537e2]/10 flex items-center justify-center mb-6">
              <BriefcaseBusiness className="w-10 h-10 text-[#4537e2]" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              No Jobs Available
            </h2>

            <p className="text-gray-600 mt-3 text-center max-w-md">
              We couldn’t find any active job postings right now.
              Please check back later for new opportunities.
            </p>
          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {allJobs.slice(0, 6).map((job) =>
              job?._id ? (
                <div
                  key={job._id}
                  className="
                    group
                    transition-all
                    duration-300
                    hover:-translate-y-2
                  "
                >
                  <div
                    className="
                      bg-white/80
                      backdrop-blur-lg
                      rounded-3xl
                      shadow-md
                      hover:shadow-2xl
                      border
                      border-white/40
                      overflow-hidden
                      transition-all
                      duration-300
                    "
                  >
                    <JobCards job={job} />
                  </div>
                </div>
              ) : (
                <div
                  key={Math.random()}
                  className="bg-red-50 border border-red-200 rounded-2xl p-6 text-red-600 font-semibold"
                >
                  Invalid Job Data
                </div>
              )
            )}
          </div>
        )}

       
        <div className="flex justify-center mt-20">
          <button
            className="
              px-8
              py-4
              rounded-2xl
              bg-[#4537e2]
              hover:bg-[#372bc0]
              text-white
              font-bold
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Explore More Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;