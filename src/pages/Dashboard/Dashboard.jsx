import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-full p-6">

      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome to Your Dashboard
      </h1>

      {/* TOP STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">Total Resumes</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">04</p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">
            Templates Used
          </h3>
          <p className="text-3xl font-bold text-green-600 mt-2">03</p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">Downloads</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">12</p>
        </div>

      </div>

      {/* ACTION BUTTONS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <Link
          to="/build-resume"
          className="bg-blue-600 text-white rounded-xl p-6 shadow-md hover:bg-blue-700 transition"
        >
          <h2 className="text-xl font-semibold mb-2">➕ Build New Resume</h2>
          <p>Create a modern ATS-friendly resume in minutes.</p>
        </Link>

        <Link
          to="/templates"
          className="bg-purple-600 text-white rounded-xl p-6 shadow-md hover:bg-purple-700 transition"
        >
          <h2 className="text-xl font-semibold mb-2">📄 Choose Template</h2>
          <p>Select from professional and creative designs.</p>
        </Link>

        <Link
          to="/profile"
          className="bg-green-600 text-white rounded-xl p-6 shadow-md hover:bg-green-700 transition"
        >
          <h2 className="text-xl font-semibold mb-2">👤 Edit Profile</h2>
          <p>Update your personal and professional details.</p>
        </Link>

      </div>

      {/* RECENT RESUMES */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Resumes</h2>

      <div className="bg-white shadow-md rounded-xl border border-gray-200 p-6">

        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h3 className="font-semibold text-gray-700">Software Engineer Resume</h3>
          <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Download
          </button>
        </div>

        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h3 className="font-semibold text-gray-700">Marketing Specialist Resume</h3>
          <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Download
          </button>
        </div>

        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-700">Business Analyst Resume</h3>
          <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Download
          </button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
