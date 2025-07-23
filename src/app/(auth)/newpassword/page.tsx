/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import bgImage from "@/components/Assets/loginBg.jpg";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import PasswordInput from "@/components/ui/PasswordInput";

const NewPassword = () => {
  const [formValue, setFormValue] = useState({
    oldpassword: "",
    newpassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/login");
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
            Reset your password
          </h1>
          <p className="mt-[5px] mb-4 text-sm font-medium text-[#636363]">
            Please input your new password. It must be different from the
            previous
          </p>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Old Password
              </label>
              <PasswordInput
                id="password"
                className="mt-1 w-full"
                value={formValue.oldpassword}
                onChange={(e) =>
                  setFormValue({ ...formValue, oldpassword: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <PasswordInput
                id="password"
                className="mt-1 w-full"
                value={formValue.newpassword}
                onChange={(e) =>
                  setFormValue({ ...formValue, newpassword: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="mt-10 w-full rounded-md bg-gradient-to-r from-blue-600 to-purple-600 py-2 font-semibold text-white transition-colors duration-200 hover:bg-gray-800"
              disabled={loading}
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
