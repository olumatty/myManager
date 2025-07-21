"use client";
import React, { useState } from "react";
import bgImage from "@/components/Assets/loginBg.jpg";
import { FcGoogle } from "react-icons/fc";
import PasswordInput from "@/components/ui/PasswordInput";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  const handleLoginSwitch = () => {
    if (pathname !== "/login") {
      router.push("/login");
    }
  };

  const handleSignupSwitch = () => {
    if (pathname !== "/signup") {
      router.push("/signup");
    }
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
          <div className="flex justify-around mb-6 border-b border-gray-200">
            <button
              className={`flex-1 text-sm font-medium py-2 text-center cursor-pointer transition-colors duration-200 ${
                pathname === "/login"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 hover:text-black border-b-2 border-transparent"
              }`}
              onClick={handleLoginSwitch}
            >
              Log In
            </button>
            <button
              className={`flex-1 text-sm font-medium py-2 text-center transition-colors duration-200 ${
                pathname === "/signup"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 hover:text-black border-b-2 border-transparent"
              }`}
              onClick={handleSignupSwitch}
            >
              Create Account
            </button>
          </div>

          <div className="flex flex-col gap-4 items-center max-w-md mx-auto">
            <button
              onClick={() => {}}
              disabled={false}
              className="input-box border-gray-300 hover:bg-gray-50 flex-1 items-center justify-between cursor-pointer font-medium text-sm border rounded-md py-3 px-4 w-full transition-colors duration-200"
            >
              <div className="flex items-center w-full">
                <FcGoogle className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="flex-1  text-center">
                  Continue with Google
                </span>
              </div>
            </button>
          </div>

          <div className="my-8 flex items-center gap-2">
            <hr className="flex-grow border-gray-300" />
            <span className="text-gray-500 text-sm font-medium">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {message && (
            <p className="text-green-500 text-sm text-center">{message}</p>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
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
                className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-200 placeholder:text-sm placeholder:text-gray-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <PasswordInput
                id="password"
                className="w-full mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <p className="text-xs sm:text-sm text-center text-gray-500 mt-6">
              By continuing, you agree with our{" "}
              <span className="underline text-gray-700 hover:text-black cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="underline text-gray-700 hover:text-black cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>

            <button
              type="submit"
              className="w-full py-2  bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-md mt-4 hover:bg-gray-800 transition-colors duration-200"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
