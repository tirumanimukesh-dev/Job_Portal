import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-purple-50">
    
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 opacity-20 blur-3xl rounded-full"></div>
      

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center flex flex-col items-center gap-8">
          
          
          <span className="px-5 py-2 flex items-center gap-2 rounded-full bg-white shadow-md border border-gray-200 text-sm font-semibold text-[#e72593]">
            <PiBuildingOfficeBold className="text-lg text-[#4537e2]" />
            Smart Job Search Platform
          </span>

  
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-gray-900">
            Launch Your Career <br />
            <span className="text-[#4537e2]">With Confidence</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Discover jobs tailored to your skills, interests, and goals.
            Connect with top recruiters and land opportunities that truly matter.
          </p>


          <div
  className="
    flex
    items-center
    w-full
    max-w-2xl
    bg-white
    border
    border-gray-200
    shadow-xl
    rounded-2xl
    overflow-hidden
    hover:shadow-2xl
    transition-all
    duration-300
  "
>
  <input
    type="text"
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search jobs, companies, skills..."
    className="
      flex-1
      px-6
      py-5
      outline-none
      text-lg
      bg-transparent
    "
  />

  <Button
    onClick={searchjobHandler}
    className="
      m-2
      px-6
      py-6
      rounded-xl
      bg-[#4537e2]
      hover:bg-[#372bc0]
      transition-all
      duration-300
      hover:scale-105
      shadow-md
    "
  >
    <Search className="w-5 h-5" />
  </Button>
</div>


          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="bg-white shadow-md rounded-2xl px-8 py-5">
              <h2 className="text-3xl font-black text-[#4537e2]">10K+</h2>
              <p className="text-gray-600 font-medium">Active Jobs</p>
            </div>

            <div className="bg-white shadow-md rounded-2xl px-8 py-5">
              <h2 className="text-3xl font-black text-[#e72593]">5K+</h2>
              <p className="text-gray-600 font-medium">Companies</p>
            </div>

            <div className="bg-white shadow-md rounded-2xl px-8 py-5">
              <h2 className="text-3xl font-black text-[#4537e2]">25K+</h2>
              <p className="text-gray-600 font-medium">Candidates Hired</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;







