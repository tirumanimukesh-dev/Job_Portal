import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar.jsx";
import { Button } from "../ui/button.jsx";
import { ArrowLeft, Loader2, Building2, Globe, MapPin, ImagePlus, FileText } from "lucide-react";
import { Label } from "../ui/label.jsx";
import { Input } from "../ui/input.jsx";
import axios from "axios";
import { COMPANY_API_ENDPOINT } from "../../utils/data.js";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import useGetCompanyById from "@/hooks/useGetCompanyById.jsx";

const CompanySetup = () => {
  const params = useParams();

  useGetCompanyById(params.id);

  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });

  const { singleCompany } = useSelector((store) => store.company);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];

    setInput({
      ...input,
      file,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);

    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);

      const res = await axios.put(
        `${COMPANY_API_ENDPOINT}/update/${params.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res.status === 200 && res.data.message) {
        toast.success(res.data.message);

        navigate("/admin/companies");
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        "Something went wrong.";

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setInput({
      name: singleCompany.name || "",
      description: singleCompany.description || "",
      website: singleCompany.website || "",
      location: singleCompany.location || "",
      file: singleCompany.file || null,
    });
  }, [singleCompany]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-pink-50 overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Background Blur */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-[#4537e2]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#e72593]/10 blur-3xl rounded-full"></div>

      {/* Main */}
      <div className="max-w-3xl mx-auto px-6 py-12 relative z-10">

        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

          <div>

            <span className="px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#4537e2] font-semibold text-sm">
              Recruiter Dashboard
            </span>

            <h1 className="mt-5 text-5xl font-black tracking-tight text-gray-900">
              Company
              <span className="text-[#4537e2]">
                {" "}Setup
              </span>
            </h1>
          </div>

          {/* Back Button */}
          <Button
            onClick={() => navigate("/admin/companies")}
            variant="outline"
            className="
              h-12
              px-6
              rounded-2xl
              border-gray-300
              bg-white
              shadow-sm
              hover:bg-[#4537e2]
              hover:text-white
              transition-all
              duration-300
              flex
              items-center
              gap-2
              font-semibold
            "
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Button>
        </div>

        {/* Main Card */}
        <div
          className="
            bg-white/80
            backdrop-blur-lg
            rounded-3xl
            shadow-2xl
            border
            border-white/40
            p-8
            md:p-12
          "
        >

          <form onSubmit={submitHandler}>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Company Name */}
              <div>

                <Label className="font-bold text-gray-700 mb-3 block">
                  Company Name
                </Label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2]">

                  <Building2 className="w-5 h-5 text-gray-400" />

                  <Input
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={changeEventHandler}
                    placeholder="Enter company name"
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
                    type="text"
                    name="description"
                    value={input.description}
                    onChange={changeEventHandler}
                    placeholder="Enter description"
                    className="border-none shadow-none focus-visible:ring-0"
                  />
                </div>
              </div>

              {/* Website */}
              <div>

                <Label className="font-bold text-gray-700 mb-3 block">
                  Website
                </Label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2]">

                  <Globe className="w-5 h-5 text-gray-400" />

                  <Input
                    type="text"
                    name="website"
                    value={input.website}
                    onChange={changeEventHandler}
                    placeholder="https://company.com"
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
                    onChange={changeEventHandler}
                    placeholder="Enter company location"
                    className="border-none shadow-none focus-visible:ring-0"
                  />
                </div>
              </div>

              {/* Upload Logo */}
              <div className="md:col-span-2">

                <Label className="font-bold text-gray-700 mb-3 block">
                  Company Logo
                </Label>

                <label
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    border-2
                    border-dashed
                    border-gray-300
                    rounded-3xl
                    p-3
                    cursor-pointer
                    bg-white
                    hover:border-[#4537e2]
                    hover:bg-[#4537e2]/5
                    transition-all
                    duration-300
                  "
                >

                  <ImagePlus className="w-8 h-8 text-[#4537e2]" />

                  <div className="text-center">

                    <p className="font-bold text-gray-700">
                      Upload Company Logo
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      PNG, JPG, JPEG up to 5MB
                    </p>
                  </div>

                  <Input
                    type="file"
                    accept="image/*"
                    onChange={changeFileHandler}
                    className="hidden"
                  />
                </label>

                {/* Preview */}
                {input.file && (
                  <p className="mt-4 text-sm text-[#4537e2] font-semibold">
                    Selected File: {input.file.name}
                  </p>
                )}
              </div>
            </div>

            {/* Submit */}
            <div className="mt-6">

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
                    h-10
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
                  Update Company
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanySetup;

