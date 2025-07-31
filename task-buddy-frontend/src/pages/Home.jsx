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
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome, {loggedInUser} 👋</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
      >
        Logout
      </button>
      <ToastContainer />
    </div>
  );
};

export default Home;
