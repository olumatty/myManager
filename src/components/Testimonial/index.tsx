import React from 'react';
import BackgroundImage from '@/components/Assets/stripebg.svg';
import { FaCaretRight } from 'react-icons/fa';

const Testimonial: React.FC = () => {
  return (
    <div className="mt-12">
      <div className="my-0 mx-auto block w-full max-w-[1400px] py-8 px-[20px] sm:px-[30px] lg:px-[40px]">
        {' '}
        <div className="flex flex-col items-start gap-y-[30px] px-20 md:gap-y-0 lg:flex-row lg:justify-between lg:gap-x-[60px]">
          <h2 className="w-full max-w-[500px] text-2xl font-bold leading-tight text-[#6d47ff] md:text-4xl">
            People believe in myManager&rsquo;s power
          </h2>
          <div className="w-full max-w-[490px]">
            <p className="mb-4 text-sm text-gray-700 md:text-base">
              {' '}
              Discover why myManager is the go-to choice for individuals and
              teams looking to enhance their productivity and time management.
              Join the community of satisfied users who have transformed their
              workflows and achieved their goals with our innovative platform.
            </p>
            <div className="flex flex-col items-start gap-y-4 gap-x-6 sm:flex-row sm:items-center sm:gap-y-0">
              {' '}
              <div className="flex cursor-pointer items-center gap-x-[10px] transition-all duration-200 ease-linear">
                <p className="text-sm md:text-base">
                  See all myManager reviews
                </p>{' '}
                <FaCaretRight className="transition-all duration-200 ease-in-out hover:translate-x-2" />
              </div>
              <div className="flex cursor-pointer items-center gap-x-[10px] transition-all duration-200 ease-linear">
                <p className="text-sm md:text-base">Share your experience</p>{' '}
                <FaCaretRight className="transition-all duration-200 ease-in-out hover:translate-x-2" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[30px] rounded-[20px] border border-[#242424] py-[20px] px-[20px]">
            <div
              className="relative grid grid-cols-1 gap-[20px] overflow-hidden rounded-[20px] border border-[#6d47ff] bg-cover bg-no-repeat p-[20px] sm:p-[30px] md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]" /* Consolidated gap, added padding for the grid container */
              style={{ backgroundImage: `url(${BackgroundImage})` }}
            >
              {/* Testimonial Cards */}

              <div className="duration-400 flex cursor-pointer flex-col justify-between rounded-[20px] border border-[#242424] px-[20px] py-[20px] leading-[1.4] transition-all ease-in-out hover:bg-gray-200 sm:px-[30px] sm:py-[30px]">
                {' '}
                <div className="flex flex-col items-start">
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
                <div className="mt-[30px] flex items-center gap-x-[10px] text-[14px] leading-[1.4] sm:mt-[40px] sm:text-[16px]">
                  {' '}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-white">
                    <p>JP</p>
                  </div>
                  <div className="text-[#9e9e9e]">
                    <p>James Parker</p>
                    <p>Project Manager at DataVision</p>
                  </div>
                </div>
              </div>

              <div className="duration-400 flex cursor-pointer flex-col justify-between rounded-[20px] border border-[#242424] px-[20px] py-[20px] leading-[1.4] transition-all ease-in-out hover:bg-gray-200 sm:px-[30px] sm:py-[30px]">
                {' '}
                <div className="flex flex-col items-start">
                  <p className="text-[15px] sm:text-base">
                    {' '}
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
                <div className="mt-[30px] flex items-center gap-x-[10px] text-[14px] leading-[1.4] sm:mt-[40px] sm:text-[16px]">
                  {' '}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-white">
                    <p>MR</p>
                  </div>
                  <div className="text-[#9e9e9e]">
                    <p>Maria Rodriguez</p>
                    <p>Freelance Designer</p>
                  </div>
                </div>
              </div>

              <div className="duration-400 flex cursor-pointer flex-col justify-between rounded-[20px] border border-[#242424] px-[20px] py-[20px] leading-[1.4] transition-all ease-in-out hover:bg-gray-200 sm:px-[30px] sm:py-[30px]">
                {' '}
                {/* Adjusted padding */}
                <div className="flex flex-col items-start">
                  <p className="text-[15px] sm:text-base">
                    {' '}
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
                <div className="mt-[30px] flex items-center gap-x-[10px] text-[14px] leading-[1.4] sm:mt-[40px] sm:text-[16px]">
                  {' '}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-white">
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
