import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError } from "../utils/formError";

const Home = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("loggedInUser");
    setLoggedInUser(storedName);
  }, [navigate]);

  const handleLogout = () => {
    handleError("Logged Out");
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-200 flex items-center justify-center px-4">
      <div className="backdrop-blur-md bg-white/50 border border-gray-200 rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-4xl font-semibold mb-6 text-gray-800">
          Welcome, <span className="text-blue-600">{loggedInUser}</span> 👋
        </h1>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg text-lg transition-all duration-200"
        >
          Logout
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
