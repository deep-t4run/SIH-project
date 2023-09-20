import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ParticleAnimation from "./ParticleAnimation";

function LoginPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClientLogin = () => {
    // Add your login logic here
    // Create an object with the user's email and password
    // const userData = {
    //   email: formData.email,
    //   password: formData.password,
    // };

    // Send a POST request to your backend authentication endpoint
    // fetch("/api/client-login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userData),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       // Login was successful, redirect to the health form page
    //       navigate("/home");
    //     } else {
    //       // Login failed, display an error message
    //       setLoginError("Invalid credentials. Please sign up.");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("Error: ", error);
    //     setLoginError("An error occured. Please try again later.");
    //   });

    console.log("Client login:", formData);
    // Redirect to health form page
    navigate("/home");
  };

  const handleAdminLogin = () => {
    // Add your admin login logic here
    console.log("Admin login:", formData);
    // Redirect to health form page
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <ParticleAnimation />
      <div className="bg-gray-800 bg-opacity-75 p-8 rounded shadow-md w-96 z-50">
        <h2 className="text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 pb-1 flex justify-center">
          LogIn to Menta
        </h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-slate-100 font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-slate-100 font-medium"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4 flex justify-between">
          <button
            type="button"
            onClick={handleClientLogin}
            className="bg-gradient-to-r from-blue-500 to-purple-700 text-white py-2 px-4 rounded hover:bg-gradient-to-l from-blue-500 to-purple-700 focus:outline-none focus:bg-blue-600 mr-2"
          >
            Login for Clients
          </button>
          <button
            type="button"
            onClick={handleAdminLogin}
            className="bg-gradient-to-l from-blue-500 to-purple-700 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-blue-500 to-purple-700 focus:outline-none focus:bg-red-600"
          >
            Login for Admins
          </button>
        </div>
        {/* Add the "Don't have an account? Sign Up" line with a Link */}
        <div className="text-center text-slate-100">
          Don't have an account?{" "}
          <Link
            to="/sign-up"
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
