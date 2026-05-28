import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useNavigate, Link } from "react-router-dom";
import { RadioGroup } from "../ui/radio-group";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_ENDPOINT } from "@/utils/data.js";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";

import {
  Mail,
  LockKeyhole,
  UserRound,
  BriefcaseBusiness,
} from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, user } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));

      const res = await axios.post(
        `${USER_API_ENDPOINT}/login`,
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));

        toast.success(res.data.message);

        navigate("/");
      }
    } catch (error) {
      toast.error("Login failed");
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
            max-w-xl
            bg-white/80
            backdrop-blur-lg
            border
            border-white/40
            shadow-2xl
            rounded-3xl
            p-10
          "
        >

          <div className="text-center mb-10">

            <h1 className="text-4xl font-black text-gray-900">
              Login
            </h1>

          </div>


          <div className="mb-6">
            <Label className="text-gray-700 font-semibold mb-2 block">
              Email Address
            </Label>

            <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2] transition-all duration-300">
              <Mail className="w-5 h-5 text-gray-400" />

              <Input
                type="email"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
                placeholder="johndoe@gmail.com"
                className="border-none shadow-none focus-visible:ring-0 text-base"
              />
            </div>
          </div>

          <div className="mb-6">
            <Label className="text-gray-700 font-semibold mb-2 block">
              Password
            </Label>

            <div className="flex items-center border border-gray-200 rounded-2xl px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#4537e2] transition-all duration-300">
              <LockKeyhole className="w-5 h-5 text-gray-400" />

              <Input
                type="password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="••••••••"
                className="border-none shadow-none focus-visible:ring-0 text-base"
              />
            </div>
          </div>

          <div className="mb-6">

            <Label className="text-gray-700 font-semibold mb-3 block">
              Select Role
            </Label>

            <RadioGroup className="flex gap-4">

              <div
                className={`
                  flex-1
                  border
                  rounded-2xl
                  p-4
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

                  <div className="flex items-center gap-2">
                    <UserRound className="w-5 h-5 text-[#4537e2]" />

                    <span className="font-semibold text-gray-700">
                      Student
                    </span>
                  </div>
                </label>
              </div>

     
              <div
                className={`
                  flex-1
                  border
                  rounded-2xl
                  p-4
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

                  <div className="flex items-center gap-2">
                    <BriefcaseBusiness className="w-5 h-5 text-[#e72593]" />

                    <span className="font-semibold text-gray-700">
                      Recruiter
                    </span>
                  </div>
                </label>
              </div>
            </RadioGroup>
          </div>


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
              Loading...
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
              Login
            </button>
          )}

          <div className="mt-6 text-center">

            <p className="text-gray-600">
              Don’t have an account?
            </p>

            <Link to="/register">
              <button
                type="button"
                className="
                  mt-4
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
                Create Account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;