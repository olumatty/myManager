import React from 'react';
import { Button } from '@/components/ui/Button';
import TimeSvg from '@/components/Assets/timetracking.svg';
import GoalSvg from '@/components/Assets/goalsettings.svg';
import TaskSvg from '@/components/Assets/taskmanagement.svg';
import Image from 'next/image';

const Service: React.FC = () => {
  return (
    <div className="mt-12 bg-white px-4">
      <div className="mx-auto max-w-6xl py-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col gap-4 text-center md:w-2/3 md:text-left">
            <h2 className="text-2xl font-bold text-[#6d47ff] md:text-4xl">
              Our Services
            </h2>
            <p className="text-base text-gray-700">
              We offer a range of services to help you manage your time
              effectively and achieve your goals. From personalized coaching to
              advanced analytics, our solutions are designed to fit your unique
              needs.
            </p>
          </div>
          <div className="flex justify-center md:w-1/3 md:justify-end">
            {' '}
            {/* Ensured button alignment on larger screens */}
            <Button
              variant="tertiary"
              className="rounded-lg border border-gray-900 py-2 px-6 transition-colors duration-300 hover:bg-opacity-70"
            >
              Explore Our Services
            </Button>
          </div>
        </div>

        {/* --- Service Cards Section --- */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Service Card 1 */}
          <div className="flex flex-col items-center rounded-lg bg-[#eebcf7] p-6 text-center shadow-md">
            <h3 className="mb-2 text-xl font-semibold text-[#6d47ff]">
              Time Tracking
            </h3>
            <p className="mb-4 flex-grow text-sm text-gray-700">
              Easily track your time you spend on each project, or activity.
              This can help you identify areas where you can improve your
              productivity and efficiency.
            </p>
            <div className="mt-4 flex w-full justify-center">
              {/* Center image */}
              <Image
                src={TimeSvg}
                alt="Time Tracking"
                className="max-h-[150px] w-auto object-contain"
                width={200}
                height={150}
              />
            </div>
          </div>
          {/* Service Card 2 (example of another card) */}
          <div className="flex flex-col items-center rounded-lg bg-[#fffcaa] p-6 text-center shadow-md">
            <h3 className="mb-2 text-xl font-semibold text-[#6d47ff]">
              Goal Setting
            </h3>
            <p className="mb-4 flex-grow text-sm text-gray-700">
              Define clear, achievable goals and track your progress. Our tools
              provide insights to keep you motivated and on the path to success.
            </p>
            <div className="mt-4 flex w-full justify-center">
              <Image
                src={GoalSvg}
                alt="Goal Setting"
                className="max-h-[150px] w-auto object-contain"
                width={200}
                height={150}
              />
            </div>
          </div>
          {/* Service Card 3 (example of another card) */}
          <div className="flex flex-col items-center rounded-lg bg-[#dcebfa] p-6 text-center shadow-md">
            <h3 className="mb-2 text-xl font-semibold text-[#6d47ff]">
              Task Management
            </h3>
            <p className="mb-4 flex-grow text-sm text-gray-700">
              Keep all your task in one place and priortize them based on the
              importance and urgency. This helps you stay organized and focused
              on what matters most.
            </p>
            <div className="mt-4 flex w-full justify-center">
              <Image
                src={TaskSvg}
                alt="Analytics"
                className="max-h-[150px] w-auto object-contain"
                width={200}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
