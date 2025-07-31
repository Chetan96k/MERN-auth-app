import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils/formError.js";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const Signup = () => {
  const navigate = useNavigate();
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const { name, email, password } = signupInfo;

    if (!name || !email || !password) {
      return handleError("All fields are required");
    }

    try {
      const url = `${BASE_URL}/auth/signup`;
      // const url = "http://localhost:5000/auth/signup";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });

      const result = await response.json();
      // console.log(result);

      const { success, message } = result;

      if (response.ok && success) {
        handleSuccess(message);
        navigate("/login");
      } else {
        const errorMessage = result?.message || "Signup failed";
        handleError(errorMessage.replace(/['"]+/g, ""));
      }
    } catch (err) {
      handleError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black px-4">
      <div className="w-full max-w-md p-10 rounded-2xl bg-white/50 backdrop-blur-md border border-neutral-200 shadow-xl">
        <h2 className="text-3xl font-semibold text-center mb-8 text-neutral-900">
          Create your account
        </h2>
        <form className="space-y-6" onSubmit={handleSignup}>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={signupInfo.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-[15px] bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-[1.5px] focus:ring-black transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={signupInfo.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-[15px] bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-[1.5px] focus:ring-black transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={signupInfo.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-[15px] bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-[1.5px] focus:ring-black transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 rounded-lg text-[15px] font-medium hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-neutral-600">
          Already have an account?{" "}
          <Link to="/login" className="text-black font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
