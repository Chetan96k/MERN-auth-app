import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils/formError.js";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const Login = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError("All fields are required");
    }

    try {
      const url = `${BASE_URL}/auth/login`;
      // const url = "http://localhost:5000/auth/login";
      console.log("BASE_URL from env:", import.meta.env.VITE_BASE_URL);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      // console.log(result);

      const { success, message, jwtToken, user } = result;

      if (response.ok && success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", user.name);
        navigate("/home");
      } else {
        const errorMessage = result?.message || "Login failed";
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
          Log in to your Account
        </h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={loginInfo.email}
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
              value={loginInfo.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-[15px] bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-[1.5px] focus:ring-black transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 rounded-lg text-[15px] font-medium hover:opacity-90 transition"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-neutral-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-black font-medium hover:underline">
            Signup here
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
