import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ParticleAnimation from "./ParticleAnimation";

function LoginPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

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
    console.log("Client login:", formData);
    // Redirect to health form page
    navigate("/health-form");
  };

  const handleAdminLogin = () => {
    // Add your admin login logic here
    console.log("Admin login:", formData);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <ParticleAnimation />
      <div className="bg-gray-800 p-8 rounded shadow-md w-96 z-50">
        <h2 className="text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 pb-1">
          Introducing Menta
        </h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-slate-100 font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
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
      </div>
    </div>
  );
}

export default LoginPage;
