/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useEffect, useRef, useState } from 'react';
import bgImage from '@/components/Assets/loginBg.jpg';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { CiCircleCheck } from 'react-icons/ci';

import Loader from '@/components/ui/Loader';

const ForgetPassword = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState('');
  const [countdown, setCountdown] = useState(300); // 5 minutes in seconds
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 0) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleInputChange = (index: number, value: string) => {
    const newValue = value.slice(-1);
    if (/^\d*$/.test(newValue)) {
      const newOtp = [...otp];
      newOtp[index] = newValue;
      setOtp(newOtp);
      if (newValue && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedValue = e.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, 6);
    const newOtp = pastedValue.split('').concat(Array(6).fill('')).slice(0, 6);
    setOtp(newOtp);

    // Focus on the next empty input or the last input
    const lastFilledIndex = newOtp.findIndex(item => item === '');
    const focusIndex = lastFilledIndex === -1 ? 5 : lastFilledIndex;
    inputRefs.current[focusIndex]?.focus();
  };

  const isOtpComplete = otp.every(item => item !== '');
  const hasStartedTyping = otp.some(item => item !== '');

  const handleVerify = async () => {
    if (isOtpComplete) {
      setIsVerifying(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setVerificationStatus('success');
        setTimeout(() => {
          router.push('/dashboard');
        }, 1000);
      } catch (error) {
        setVerificationStatus('error');
        setError('Invalid verification code');
      } finally {
        setIsVerifying(false);
      }
    }
  };

  const handleResendCode = () => {
    setCountdown(300);
    setCanResend(false);
    setVerificationStatus('');
    setError('');
    setOtp(['', '', '', '', '', '']);
    setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 100);
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Background Image Section */}
      <div className="relative hidden overflow-hidden md:block md:w-1/2">
        <Image
          src={bgImage}
          alt="Login Background"
          className="h-full w-full object-cover"
          priority
        />
      </div>

      {/* Form Section */}
      <div className="flex w-full items-center justify-center p-4 sm:p-6 md:w-1/2 md:p-8 lg:p-16">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="space-y-3 text-center">
            <h1 className="text-xl font-semibold leading-tight text-[#303030] sm:text-2xl md:text-3xl">
              Check your email for the verification code
            </h1>
            <p className="text-sm text-[#6d47ff] sm:text-base">
              Enter the verification code we sent to your email address.
            </p>
            <p className="text-sm font-semibold text-[#303030] sm:text-base">
              jeremy.smith@example.com
            </p>
          </div>

          {/* OTP Input Section */}
          <div className="flex justify-center gap-2 sm:gap-3">
            {otp.map((item, index) => (
              <input
                key={index}
                ref={el => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                onChange={e => handleInputChange(index, e.target.value)}
                onKeyDown={e => handleKeyDown(e, index)}
                onPaste={index === 0 ? handlePaste : undefined}
                value={item}
                className="h-12 w-12 rounded-md border-2 border-gray-300 text-center text-lg font-bold text-purple-600 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 sm:h-14 sm:w-14 sm:text-xl"
                disabled={isVerifying}
                aria-label={`OTP digit ${index + 1}`}
              />
            ))}
          </div>

          {/* Error Message */}
          {verificationStatus === 'error' && (
            <div className="flex items-center justify-center gap-2 text-red-600">
              <svg
                className="h-5 w-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">Invalid verification code</span>
            </div>
          )}

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            disabled={!hasStartedTyping || isVerifying}
            className={`flex w-full items-center justify-center gap-2 rounded-lg py-3 px-4 font-medium text-white transition-all duration-200 ${
              verificationStatus === 'success'
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
            } disabled:cursor-not-allowed disabled:opacity-50`}
          >
            {verificationStatus === 'success' ? (
              <>
                <CiCircleCheck className="h-5 w-5" />
                <span className="text-sm sm:text-base">
                  Verification Success
                </span>
              </>
            ) : isVerifying ? (
              <>
                <Loader />
                <span className="text-sm sm:text-base">Verifying...</span>
              </>
            ) : (
              <span className="text-sm sm:text-base">Verify</span>
            )}
          </button>

          {/* Resend Code Section */}
          <div className="text-center">
            {countdown > 0 ? (
              <p className="text-sm text-gray-500 sm:text-base">
                Resend Code in{' '}
                <span className="font-medium text-[#6d47ff]">
                  {formatTime(countdown)}
                </span>
              </p>
            ) : (
              <button
                onClick={handleResendCode}
                className="text-sm font-medium text-purple-600 transition-colors duration-200 hover:text-purple-800 hover:opacity-80 sm:text-base"
              >
                Resend Code
              </button>
            )}
          </div>

          {/* Terms and Privacy */}
          <p className="text-center text-xs leading-relaxed text-gray-500 sm:text-sm">
            By joining, you agree with our{' '}
            <span className="cursor-pointer text-[#6d47ff] underline hover:opacity-80">
              Terms
            </span>{' '}
            and{' '}
            <span className="cursor-pointer text-[#6d47ff] underline hover:opacity-80">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
