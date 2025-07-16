import React from "react";
import { Button } from "@/components/ui/Button";
import TimeSvg from "@/components/Assets/timetracking.svg";
import GoalSvg from "@/components/Assets/goalsettings.svg";
import TaskSvg from "@/components/Assets/taskmanagement.svg";
import Image from "next/image";

const Service: React.FC = () => {
  return (
    <div className="mt-12 px-4 bg-white">
      <div className="py-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex flex-col gap-4 text-center md:text-left md:w-2/3">
            <h2 className="text-2xl md:text-4xl font-bold text-[#6d47ff]">
              Our Services
            </h2>
            <p className="text-gray-700 text-base">
              We offer a range of services to help you manage your time
              effectively and achieve your goals. From personalized coaching to
              advanced analytics, our solutions are designed to fit your unique
              needs.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            {" "}
            {/* Ensured button alignment on larger screens */}
            <Button
              variant="tertiary"
              className="hover:bg-opacity-70 border py-2 px-6 rounded-lg border-gray-900 transition-colors duration-300"
            >
              Explore Our Services
            </Button>
          </div>
        </div>

        {/* --- Service Cards Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="flex flex-col bg-[#eebcf7] rounded-lg p-6 shadow-md items-center text-center">
            <h3 className="text-xl font-semibold text-[#6d47ff] mb-2">
              Time Tracking
            </h3>
            <p className="text-gray-700 text-sm mb-4 flex-grow">
              Easily track your time you spend on each project, or activity.
              This can help you identify areas where you can improve your
              productivity and efficiency.
            </p>
            <div className="w-full flex justify-center mt-4">
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
          <div className="flex flex-col bg-[#fffcaa] rounded-lg p-6 shadow-md items-center text-center">
            <h3 className="text-xl font-semibold text-[#6d47ff] mb-2">
              Goal Setting
            </h3>
            <p className="text-gray-700 text-sm mb-4 flex-grow">
              Define clear, achievable goals and track your progress. Our tools
              provide insights to keep you motivated and on the path to success.
            </p>
            <div className="w-full flex justify-center mt-4">
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
          <div className="flex flex-col bg-[#dcebfa] rounded-lg p-6 shadow-md items-center text-center">
            <h3 className="text-xl font-semibold text-[#6d47ff] mb-2">
              Task Management
            </h3>
            <p className="text-gray-700 text-sm mb-4 flex-grow">
              Keep all your task in one place and priortize them based on the
              importance and urgency. This helps you stay organized and focused
              on what matters most.
            </p>
            <div className="w-full flex justify-center mt-4">
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
