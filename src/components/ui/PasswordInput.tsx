// PasswordInput.tsx
import React, { ChangeEvent, FC, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { CiLock } from 'react-icons/ci';

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
  placeholder = 'Password',
  id,
  className = '',
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(prev => !prev);

  return (
    <div className={className}>
      <div className="relative flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 transition duration-200 focus-within:border-gray-800 focus-within:ring-gray-700">
        <span>
          <CiLock size={18} />
        </span>
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          className="mr-28 w-full border-none bg-transparent text-gray-900 outline-none placeholder:text-sm placeholder:text-gray-400"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <div
          className="cursor-pointer text-gray-600 transition duration-200 hover:text-gray-800"
          onClick={toggleShowPassword}
        >
          {showPassword ? <FaRegEye size={18} /> : <FaRegEyeSlash size={18} />}
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
