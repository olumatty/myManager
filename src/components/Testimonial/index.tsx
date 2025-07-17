import React from "react";
import BackgroundImage from "@/components/Assets/stripebg.svg";
import { FaCaretRight } from "react-icons/fa";

const Testimonial: React.FC = () => {
  return (
    <div className=" mt-12">
      <div className="w-full py-8 block max-w-[1400px] my-0 mx-auto px-[20px] sm:px-[30px] lg:px-[40px]">
        {" "}
        <div className="flex gap-y-[30px] px-20 md:gap-y-0 lg:gap-x-[60px] items-start flex-col lg:flex-row lg:justify-between">
          <h2 className="text-2xl text-[#6d47ff] leading-tight w-full max-w-[500px] md:text-4xl font-bold">
            People believe in myManager&rsquo;s power
          </h2>
          <div className="w-full max-w-[490px]">
            <p className="mb-4 text-gray-700 text-sm md:text-base">
              {" "}
              Discover why myManager is the go-to choice for individuals and
              teams looking to enhance their productivity and time management.
              Join the community of satisfied users who have transformed their
              workflows and achieved their goals with our innovative platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 gap-x-6 items-start sm:items-center">
              {" "}
              <div className="flex gap-x-[10px] items-center cursor-pointer transition-all duration-200 ease-linear">
                <p className="text-sm md:text-base">
                  See all myManager reviews
                </p>{" "}
                <FaCaretRight className="transition-all duration-200 ease-in-out hover:translate-x-2" />
              </div>
              <div className="flex gap-x-[10px] items-center cursor-pointer transition-all duration-200 ease-linear">
                <p className="text-sm md:text-base">Share your experience</p>{" "}
                <FaCaretRight className="transition-all duration-200 ease-in-out hover:translate-x-2" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border border-[#242424] py-[20px] px-[20px] mt-[30px] rounded-[20px]">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#6d47ff] overflow-hidden relative rounded-[20px] gap-[20px] lg:gap-[30px] p-[20px] sm:p-[30px] bg-cover bg-no-repeat" /* Consolidated gap, added padding for the grid container */
              style={{ backgroundImage: `url(${BackgroundImage})` }}
            >
              {/* Testimonial Cards */}

              <div className="border border-[#242424] flex  transition-all duration-400 ease-in-out hover:bg-gray-200 px-[20px] py-[20px] sm:px-[30px] sm:py-[30px] flex-col justify-between rounded-[20px] cursor-pointer leading-[1.4]">
                {" "}
                <div className="flex items-start flex-col ">
                  <p className="text-[15px] sm:text-base">
                    This time tracking tool changed everything. The intuitive
                    interface made it effortless to log my activities, and the
                    detailed analytics showed me I was spending 40% more time in
                    meetings than I realized. The automated project
                    categorization saved me hours of manual entry, and the
                    real-time insights helped me identify my most productive
                    hours.
                  </p>
                </div>
                <div className="flex gap-x-[10px] mt-[30px] sm:mt-[40px] items-center text-[14px] sm:text-[16px] leading-[1.4]">
                  {" "}
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    <p>JP</p>
                  </div>
                  <div className="text-[#9e9e9e]">
                    <p>James Parker</p>
                    <p>Project Manager at DataVision</p>
                  </div>
                </div>
              </div>

              <div className="border border-[#242424] flex transition-all duration-400 ease-in-out hover:bg-gray-200 px-[20px] py-[20px] sm:px-[30px] sm:py-[30px] flex-col justify-between rounded-[20px] cursor-pointer leading-[1.4]">
                {" "}
                <div className="flex items-start flex-col ">
                  <p className="text-[15px] sm:text-base">
                    {" "}
                    As a freelancer juggling multiple clients, I was constantly
                    underestimating project hours and losing money. This time
                    tracking app changed everything. The automatic
                    categorization means I don&rsquo;t have to remember to start
                    timers, and the detailed reports show me exactly where my
                    time goes. I can finally bill clients accurately and
                    confidently. In just one month, I identified my most
                    profitable work types and increased my hourly rate by 35%.
                    The client reporting feature has made invoicing so much
                    smoother too.
                  </p>
                </div>
                <div className="flex gap-x-[10px] mt-[30px] sm:mt-[40px] items-center text-[14px] sm:text-[16px] leading-[1.4]">
                  {" "}
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    <p>MR</p>
                  </div>
                  <div className="text-[#9e9e9e]">
                    <p>Maria Rodriguez</p>
                    <p>Freelance Designer</p>
                  </div>
                </div>
              </div>

              <div className="border border-[#242424] flex transition-all duration-400 ease-in-out hover:bg-gray-200  px-[20px] py-[20px] sm:px-[30px] sm:py-[30px] flex-col justify-between rounded-[20px] cursor-pointer leading-[1.4]">
                {" "}
                {/* Adjusted padding */}
                <div className="flex items-start flex-col ">
                  <p className="text-[15px] sm:text-base">
                    {" "}
                    I thought I was managing my time well until this app opened
                    my eyes. The analytics revealed I was spending 2.5 hours
                    daily on email and admin tasks that could be streamlined.
                    The focus mode feature helped me block out distractions
                    during client work, and the goal-setting tools kept me
                    accountable to my priorities. What impressed me most was how
                    intuitive it felt - no learning curve, just immediate
                    insights. I&rsquo;ve reclaimed 10 hours per week for
                    high-value consulting work
                  </p>
                </div>
                <div className="flex gap-x-[10px] mt-[30px] sm:mt-[40px] items-center text-[14px] sm:text-[16px] leading-[1.4]">
                  {" "}
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    <p>AF</p>
                  </div>
                  <div className="text-[#9e9e9e]">
                    <p>Dr. Amanda Fosterk</p>
                    <p>Business Consultant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
