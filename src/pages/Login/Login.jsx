import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-4">
          <Link
            to="/forgot-password"
            className="text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Register Button */}
        <div className="text-center mt-6">
          <p className="text-gray-600">Don't have an account?</p>
          <Link
            to="/register"
            className="mt-2 inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
