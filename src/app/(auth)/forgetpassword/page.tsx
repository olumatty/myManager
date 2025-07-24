"use client";
import React, { useState } from "react";
import bgImage from "@/components/Assets/loginBg.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleCancel = () => {
    router.push("/login");
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleForgetPassword = async () => {
    router.push("/verifypassword");
  };

  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="relative hidden overflow-hidden md:block md:w-1/2">
        <Image
          src={bgImage}
          alt="Login Background"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex w-full items-center justify-center p-6 md:w-1/2 md:p-16">
        <div className="w-full max-w-md">
          <h1 className="mb-6 text-center text-2xl font-semibold text-[#303030] md:text-3xl">
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
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 outline-none transition duration-200 placeholder:text-sm placeholder:text-gray-400 focus:border-black focus:ring-black"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="mt-10 w-full rounded-md bg-gradient-to-r from-blue-600 to-purple-600 py-2 font-semibold text-white transition-colors duration-200 hover:bg-gray-800"
              disabled={loading}
              onClick={handleForgetPassword}
            >
              Reset Password
            </button>

            <button
              type="submit"
              className="mt-10 w-full rounded-md bg-[#39383f] py-2 font-semibold text-white transition-colors duration-200 hover:bg-gray-800"
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
