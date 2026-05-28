import React, { useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import axios from "axios";
import { JOB_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

import { useSelector } from "react-redux";

import {
  BriefcaseBusiness,
  FileText,
  MapPin,
  Wallet,
  Users,
  Brain,
  Clock3,
  Building2,
} from "lucide-react";

const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });

  const navigate = useNavigate();

  const { companies } = useSelector((store) => store.company);

  const [loading, setLoading] = useState(false);

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const selectChangeHandler = (value) => {
    const selectedCompany = companies.find(
      (company) => company.name.toLowerCase() === value
    );

    setInput({
      ...input,
      companyId: selectedCompany._id,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        `${JOB_API_ENDPOINT}/post`,
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);

        navigate("/admin/jobs");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(
          error.response.data.message ||
            "Something went wrong"
        );
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-pink-50 overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Background Blur */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-[#4537e2]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#e72593]/10 blur-3xl rounded-full"></div>

      {/* Main */}
      <div className="max-w-3xl mx-auto px-6 py-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">

          <span className="px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#4537e2] font-semibold text-sm">
            Recruiter Dashboard
          </span>

          <h1 className="mt-6 text-5xl font-black tracking-tight text-gray-900">
            Create a New
            <span className="text-[#4537e2]">
              {" "}Job
            </span>
          </h1>

          
        </div>

        {/* Form Card */}
        <div
          className="
            bg-white/80
            backdrop-blur-lg
            rounded-3xl
            shadow-2xl
            border
            border-white/40
            p-6
            md:p-10
          "
        >

          <form onSubmit={submitHandler}>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Title */}
              <div>

                <Label className="font-bold text-gray-700 mb-3 block">
                  Job Title
                </Label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2]">

                  <BriefcaseBusiness className="w-5 h-5 text-gray-400" />

                  <Input
                    type="text"
                    name="title"
                    value={input.title}
                    placeholder="Frontend Developer"
                    onChange={changeEventHandler}
                    className="border-none shadow-none focus-visible:ring-0"
                  />
                </div>
              </div>

              {/* Description */}
              <div>

                <Label className="font-bold text-gray-700 mb-3 block">
                  Description
                </Label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2]">

                  <FileText className="w-5 h-5 text-gray-400" />

                  <Input
                    name="description"
                    value={input.description}
                    placeholder="Job description"
                    onChange={changeEventHandler}
                    className="border-none shadow-none focus-visible:ring-0"
                  />
                </div>
              </div>

              {/* Location */}
              <div>

                <Label className="font-bold text-gray-700 mb-3 block">
                  Location
                </Label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2]">

                  <MapPin className="w-5 h-5 text-gray-400" />

                  <Input
                    type="text"
                    name="location"
                    value={input.location}
                    placeholder="Chennai, India"
                    onChange={changeEventHandler}
                    className="border-none shadow-none focus-visible:ring-0"
                  />
                </div>
              </div>

              {/* Salary */}
              <div>

                <Label className="font-bold text-gray-700 mb-3 block">
                  Salary
                </Label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2]">

                  <Wallet className="w-5 h-5 text-gray-400" />

                  <Input
                    type="number"
                    name="salary"
                    value={input.salary}
                    placeholder="50000"
                    onChange={changeEventHandler}
                    className="border-none shadow-none focus-visible:ring-0"
                  />
                </div>
              </div>

              {/* Position */}
              <div>

                <Label className="font-bold text-gray-700 mb-3 block">
                  Open Positions
                </Label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2]">

                  <Users className="w-5 h-5 text-gray-400" />

                  <Input
                    type="number"
                    name="position"
                    value={input.position}
                    placeholder="5"
                    onChange={changeEventHandler}
                    className="border-none shadow-none focus-visible:ring-0"
                  />
                </div>
              </div>

              {/* Requirements */}
              <div>

                <Label className="font-bold text-gray-700 mb-3 block">
                  Requirements
                </Label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2]">

                  <Brain className="w-5 h-5 text-gray-400" />

                  <Input
                    type="text"
                    name="requirements"
                    value={input.requirements}
                    placeholder="React, Node.js..."
                    onChange={changeEventHandler}
                    className="border-none shadow-none focus-visible:ring-0"
                  />
                </div>
              </div>

              {/* Experience */}
              <div>

                <Label className="font-bold text-gray-700 mb-3 block">
                  Experience
                </Label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2]">

                  <Clock3 className="w-5 h-5 text-gray-400" />

                  <Input
                    type="number"
                    name="experience"
                    value={input.experience}
                    placeholder="2 Years"
                    onChange={changeEventHandler}
                    className="border-none shadow-none focus-visible:ring-0"
                  />
                </div>
              </div>

              {/* Job Type */}
              <div>

                <Label className="font-bold text-gray-700 mb-3 block">
                  Job Type
                </Label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2]">

                  <BriefcaseBusiness className="w-5 h-5 text-gray-400" />

                  <Input
                    type="text"
                    name="jobType"
                    value={input.jobType}
                    placeholder="Full Time"
                    onChange={changeEventHandler}
                    className="border-none shadow-none focus-visible:ring-0"
                  />
                </div>
              </div>

              {/* Company Select */}
              <div className="md:col-span-2">

                <Label className="font-bold text-gray-700 mb-3 block">
                  Select Company
                </Label>

                {companies.length > 0 ? (
                  <Select onValueChange={selectChangeHandler}>

                    <SelectTrigger
                      className="
                        w-full
                        h-14
                        rounded-2xl
                        border-gray-200
                        bg-white
                        shadow-sm
                      "
                    >
                      <SelectValue placeholder="Choose a company" />
                    </SelectTrigger>

                    <SelectContent className="rounded-2xl">

                      <SelectGroup>

                        {companies.map((company) => (
                          <SelectItem
                            key={company._id}
                            value={company.name.toLowerCase()}
                          >
                            {company.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                ) : (
                  <p className="text-red-600 font-semibold">
                    Please register a company first.
                  </p>
                )}
              </div>
            </div>

            {/* Button */}
            <div className="mt-8">

              {loading ? (
                <Button
                  disabled
                  className="
                    w-full
                    h-14
                    rounded-2xl
                    bg-[#4537e2]
                    text-white
                    text-lg
                    font-bold
                  "
                >
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />

                  Please wait...
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="
                    w-full
                    h-12
                    rounded-2xl
                    bg-[#4537e2]
                    hover:bg-[#372bc0]
                    text-white
                    text-lg
                    font-bold
                    shadow-lg
                    hover:shadow-2xl
                    transition-all
                    duration-300
                    hover:scale-[1.01]
                  "
                >
                  Post Job
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;