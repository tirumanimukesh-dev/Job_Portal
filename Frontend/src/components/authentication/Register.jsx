import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";

import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";

import {
  UserRound,
  Mail,
  LockKeyhole,
  Phone,
  CreditCard,
  Upload,
  BriefcaseBusiness,
} from "lucide-react";

const Register = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
    phoneNumber: "",
    pancard: "",
    adharcard: "",
    file: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, user } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const ChangeFilehandler = (e) => {
    setInput({
      ...input,
      file: e.target.files?.[0],
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("pancard", input.pancard);
    formData.append("adharcard", input.adharcard);
    formData.append("role", input.role);
    formData.append("phoneNumber", input.phoneNumber);

    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));

      const res = await axios.post(
        `${USER_API_ENDPOINT}/register`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);

      const errorMessage = error.response
        ? error.response.data.message
        : "An unexpected error occurred.";

      toast.error(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-pink-50 overflow-hidden relative">

  
      <Navbar />

      <div className="absolute top-10 left-0 w-80 h-80 bg-[#4537e2]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#e72593]/10 blur-3xl rounded-full"></div>

      <div className="flex items-center justify-center px-6 py-20 relative z-10">

        <form
          onSubmit={submitHandler}
          className="
            w-full
            max-w-2xl
            bg-white/80
            backdrop-blur-lg
            border
            border-white/40
            shadow-2xl
            rounded-3xl
            p-10
          "
        >


          <div className="text-center mb-6">

            

            <h1 className="text-4xl font-black text-gray-900">
              Create Account
            </h1>

            
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Fullname */}
            <div>
              <Label className="font-semibold mb-2 block">
                Full Name
              </Label>

              <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2]">
                <UserRound className="w-5 h-5 text-gray-400" />

                <Input
                  type="text"
                  value={input.fullname}
                  name="fullname"
                  onChange={changeEventHandler}
                  placeholder="John Doe"
                  className="border-none shadow-none focus-visible:ring-0"
                />
              </div>
            </div>

            <div>
              <Label className="font-semibold mb-2 block">
                Email
              </Label>

              <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2]">
                <Mail className="w-5 h-5 text-gray-400" />

                <Input
                  type="email"
                  value={input.email}
                  name="email"
                  onChange={changeEventHandler}
                  placeholder="johndoe@gmail.com"
                  className="border-none shadow-none focus-visible:ring-0"
                />
              </div>
            </div>

   
            <div>
              <Label className="font-semibold mb-2 block">
                Password
              </Label>

              <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2]">
                <LockKeyhole className="w-5 h-5 text-gray-400" />

                <Input
                  type="password"
                  value={input.password}
                  name="password"
                  onChange={changeEventHandler}
                  placeholder="••••••••"
                  className="border-none shadow-none focus-visible:ring-0"
                />
              </div>
            </div>


            <div>
              <Label className="font-semibold mb-2 block">
                Phone Number
              </Label>

              <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2]">
                <Phone className="w-5 h-5 text-gray-400" />

                <Input
                  type="tel"
                  value={input.phoneNumber}
                  name="phoneNumber"
                  onChange={changeEventHandler}
                  placeholder="+91 9876543210"
                  className="border-none shadow-none focus-visible:ring-0"
                />
              </div>
            </div>

     
            <div>
              <Label className="font-semibold mb-2 block">
                PAN Card Number
              </Label>

              <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2]">
                <CreditCard className="w-5 h-5 text-gray-400" />

                <Input
                  type="text"
                  value={input.pancard}
                  name="pancard"
                  onChange={changeEventHandler}
                  placeholder="ABCDE1234F"
                  className="border-none shadow-none focus-visible:ring-0"
                />
              </div>
            </div>

    
            <div>
              <Label className="font-semibold mb-2 block">
                Aadhaar Number
              </Label>

              <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2]">
                <CreditCard className="w-5 h-5 text-gray-400" />

                <Input
                  type="text"
                  value={input.adharcard}
                  name="adharcard"
                  onChange={changeEventHandler}
                  placeholder="123456789012"
                  className="border-none shadow-none focus-visible:ring-0"
                />
              </div>
            </div>
          </div>

     
          <div className="mt-6">

            <Label className="font-semibold mb-3 block">
              Select Role
            </Label>

            <RadioGroup className="flex gap-4">

       
              <div
                className={`
                  flex-1
                  border
                  rounded-2xl
                  p-3
                  cursor-pointer
                  transition-all
                  duration-300
                  ${
                    input.role === "Student"
                      ? "border-[#4537e2] bg-[#4537e2]/10"
                      : "border-gray-200 bg-white"
                  }
                `}
              >
                <label className="flex items-center gap-3 cursor-pointer">

                  <Input
                    type="radio"
                    name="role"
                    value="Student"
                    checked={input.role === "Student"}
                    onChange={changeEventHandler}
                    className="w-4 h-4 cursor-pointer"
                  />

                  <span className="font-semibold text-gray-700">
                    Student
                  </span>
                </label>
              </div>

      
              <div
                className={`
                  flex-1
                  border
                  rounded-2xl
                  p-3
                  cursor-pointer
                  transition-all
                  duration-300
                  ${
                    input.role === "Recruiter"
                      ? "border-[#e72593] bg-[#e72593]/10"
                      : "border-gray-200 bg-white"
                  }
                `}
              >
                <label className="flex items-center gap-3 cursor-pointer">

                  <Input
                    type="radio"
                    name="role"
                    value="Recruiter"
                    checked={input.role === "Recruiter"}
                    onChange={changeEventHandler}
                    className="w-4 h-4 cursor-pointer"
                  />

                  <span className="font-semibold text-gray-700">
                    Recruiter
                  </span>
                </label>
              </div>
            </RadioGroup>
          </div>

     
          <div className="mt-6">

            <Label className="font-semibold mb-3 block">
              Profile Photo
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
                rounded-2xl
                p-3
                cursor-pointer
                hover:border-[#4537e2]
                hover:bg-[#4537e2]/5
                transition-all
                duration-300
              "
            >
              <Upload className="w-6 h-6 text-[#4537e2]" />

              <span className="font-medium text-gray-600">
                Upload Profile Image
              </span>

              <Input
                type="file"
                accept="image/*"
                onChange={ChangeFilehandler}
                className="hidden"
              />
            </label>
          </div>


          <div className="mt-6">

            {loading ? (
              <button
                disabled
                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-gray-300
                  text-white
                  font-bold
                  cursor-not-allowed
                "
              >
                Creating Account...
              </button>
            ) : (
              <button
                type="submit"
                className="
                  w-full
                  py-2
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
                "
              >
                Register
              </button>
            )}
          </div>


          <div className="mt-6 text-center">

            <p className="text-gray-600">
              Already have an account?
            </p>

            <Link to="/login">
              <button
                type="button"
                className="
                  mt-2
                  w-full
                  py-2
                  rounded-2xl
                  bg-[#e72593]
                  hover:bg-[#c81f7f]
                  text-white
                  font-bold
                  text-lg
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;