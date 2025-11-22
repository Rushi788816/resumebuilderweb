import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard!</h1>
      <p className="text-gray-600 mb-6">
        This is the home page you see after logging in.
      </p>

      <div className="flex gap-4">
        <Link
          to="/profile"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go to Profile
        </Link>

        <Link
          to="/settings"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Home;
