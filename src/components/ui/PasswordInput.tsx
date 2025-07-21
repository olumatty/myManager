// PasswordInput.tsx
import React, { ChangeEvent, FC, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

interface PasswordInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id?: string;
  className?: string;
}

const PasswordInput: FC<PasswordInputProps> = ({
  value,
  onChange,
  placeholder = "Password",
  id,
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div className={className}>
      <div className="flex relative items-center bg-white border border-gray-300 p-3 rounded-md focus-within:ring-gray-700 focus-within:border-gray-800 transition duration-200">
        <span>
          <CiLock size={18} />
        </span>
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          className="w-full bg-transparent placeholder:text-sm placeholder:text-gray-400 text-gray-900 border-none outline-none mr-28"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <div
          className="cursor-pointer text-gray-600 hover:text-gray-800 transition duration-200"
          onClick={toggleShowPassword}
        >
          {showPassword ? <FaRegEye size={18} /> : <FaRegEyeSlash size={18} />}
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
