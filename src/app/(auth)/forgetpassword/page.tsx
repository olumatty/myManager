"use client";
import React, { useState } from "react";
import bgImage from "@/components/Assets/loginBg.jpg";
import { FcGoogle } from "react-icons/fc";
import PasswordInput from "@/components/ui/PasswordInput";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const ForgetPassword = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  const handleCancel = () => {
    router.push("/login");
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="hidden md:block md:w-1/2 relative overflow-hidden ">
        <Image
          src={bgImage}
          alt="Login Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-16">
        <div className="w-full max-w-md">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#303030] text-center mb-6">
            Enter your email to reset your password
          </h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md outline-none focus:ring-black focus:border-black transition duration-200 placeholder:text-sm placeholder:text-gray-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-md  hover:bg-gray-800 transition-colors duration-200"
              disabled={loading}
            >
              Reset Password
            </button>

            <button
              type="submit"
              className="w-full py-2 mt-10 bg-[#39383f] text-white font-semibold rounded-md  hover:bg-gray-800 transition-colors duration-200"
              disabled={loading}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
