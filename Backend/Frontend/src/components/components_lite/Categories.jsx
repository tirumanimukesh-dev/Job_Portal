import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

import {
  Code2,
  Database,
  Globe,
  Brain,
  ShieldCheck,
  Palette,
  Video,
  BriefcaseBusiness,
} from "lucide-react";

const categories = [
  {
    name: "Frontend Developer",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    name: "Backend Developer",
    icon: <Database className="w-8 h-8" />,
  },
  {
    name: "Full Stack Developer",
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    name: "MERN Developer",
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    name: "Data Scientist",
    icon: <Brain className="w-8 h-8" />,
  },
  {
    name: "DevOps Engineer",
    icon: <BriefcaseBusiness className="w-8 h-8" />,
  },
  {
    name: "Machine Learning Engineer",
    icon: <Brain className="w-8 h-8" />,
  },
  {
    name: "AI Engineer",
    icon: <Brain className="w-8 h-8" />,
  },
  {
    name: "Cybersecurity Engineer",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    name: "UI/UX Designer",
    icon: <Palette className="w-8 h-8" />,
  },
  {
    name: "Graphics Designer",
    icon: <Palette className="w-8 h-8" />,
  },
  {
    name: "Video Editor",
    icon: <Video className="w-8 h-8" />,
  },
];

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="bg-gradient-to-b from-purple-50 to-purple-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
            Explore Popular
            <span className="text-[#4537e2]"> Categories</span>
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover opportunities across trending technologies,
            creative domains, and high-demand career paths.
          </p>
        </div>

    
        <Carousel className="w-full">
          <CarouselContent className="-ml-2">

            {categories.map((category, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:basis-1/2 lg:basis-1/4"
              >
                <div
                  onClick={() => searchjobHandler(category.name)}
                  className="
                    group
                    bg-white
                    border
                    border-gray-200
                    rounded-3xl
                    p-8
                    shadow-md
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    cursor-pointer
                    h-full
                  "
                >
              
                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-[#4537e2]/10
                      text-[#4537e2]
                      flex
                      items-center
                      justify-center
                      mb-6
                      group-hover:bg-[#4537e2]
                      group-hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    {category.icon}
                  </div>

     
                  <h2 className="text-xl font-extrabold text-gray-900 leading-snug">
                    {category.name}
                  </h2>

                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    Explore top opportunities and grow your career
                    with industry-leading companies.
                  </p>

         
                  <div className="mt-6">
                    <button
                      className="
                        text-[#4537e2]
                        font-bold
                        group-hover:text-[#e72593]
                        transition-all
                        duration-300
                      "
                    >
                      Explore Jobs →
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

        
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>


      </div>
    </div>
  );
};

export default Categories;





