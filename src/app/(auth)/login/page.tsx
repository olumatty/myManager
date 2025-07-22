'use client';
import React, { useState } from 'react';
import bgImage from '@/components/Assets/loginBg.jpg';
import { FcGoogle } from 'react-icons/fc';
import PasswordInput from '@/components/ui/PasswordInput';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const Login = () => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const router = useRouter();
  const pathname = usePathname();

  const handleLoginSwitch = () => {
    if (pathname !== '/login') {
      router.push('/login');
    }
  };

  const handleSignupSwitch = () => {
    if (pathname !== '/signup') {
      router.push('/signup');
    }
  };

  const handleForgetPassword = () => {
    if (pathname !== '/forgetpassword') {
      router.push('/forgetpassword');
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formValue;
    setLoading(true);
    setError('');
    setMessage('');
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    setLoading(false);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setLoading(false);
      router.push('/dashboard');
    } else {
      const data = await response.json();
      setLoading(false);
      setError(data.error);
    }
    setMessage('Login successful! Redirecting...');
    setTimeout(() => {
      router.push('/dashboard');
    }, 2000);
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
          <div className="mb-6 flex justify-around border-b border-gray-200">
            <button
              className={`flex-1 cursor-pointer py-2 text-center text-sm font-medium transition-colors duration-200 ${
                pathname === '/login'
                  ? 'border-b-2 border-black text-black'
                  : 'border-b-2 border-transparent text-gray-500 hover:text-black'
              }`}
              onClick={handleLoginSwitch}
            >
              Log In
            </button>
            <button
              className={`flex-1 py-2 text-center text-sm font-medium transition-colors duration-200 ${
                pathname === '/signup'
                  ? 'border-b-2 border-black text-black'
                  : 'border-b-2 border-transparent text-gray-500 hover:text-black'
              }`}
              onClick={handleSignupSwitch}
            >
              Create Account
            </button>
          </div>

          <div className="mx-auto flex max-w-md flex-col items-center gap-4">
            <button
              onClick={() => {}}
              disabled={false}
              className="input-box w-full flex-1 cursor-pointer items-center justify-between rounded-md border border-gray-300 py-3 px-4 text-sm font-medium transition-colors duration-200 hover:bg-gray-50"
            >
              <div className="flex w-full items-center">
                <FcGoogle className="mr-2 h-5 w-5 flex-shrink-0" />
                <span className="flex-1 text-center">Continue with Google</span>
              </div>
            </button>
          </div>

          <div className="my-8 flex items-center gap-2">
            <hr className="flex-grow border-gray-300" />
            <span className="text-sm font-medium text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {error && <p className="text-center text-sm text-red-500">{error}</p>}
          {message && (
            <p className="text-center text-sm text-green-500">{message}</p>
          )}

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
                value={formValue.email}
                onChange={e =>
                  setFormValue({ ...formValue, email: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password(min 8 char)
              </label>
              <PasswordInput
                id="password"
                className="mt-1 w-full"
                value={formValue.password}
                onChange={e =>
                  setFormValue({ ...formValue, password: e.target.value })
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div></div>

              <button
                onClick={handleForgetPassword}
                className="cursor-pointer text-sm text-[#6d47ff] underline hover:opacity-80"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-gradient-to-r from-blue-600 to-purple-600 py-2 font-semibold text-white transition-colors duration-200 hover:bg-gray-800"
              disabled={loading}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
