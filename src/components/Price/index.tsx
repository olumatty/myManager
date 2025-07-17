import React from "react";
import checkedIcon from "@/components/Assets/checked.svg";
import Image from "next/image";

const Price = () => {
  return (
    <div className="mt-12">
      <div className="w-full block max-w-[1400px] mx-auto px-[20px]">
        <div>
          <div className="w-full max-w-[650px] text-center mx-auto mb-[60px]">
            <span className="text-[#6d47ff] text-xl font-bold">Pricing</span>
            <h1 className="mt-[15px] leading-[1.2] font-[400] mb-[20px] text-[36px] md:text-[42px] lg:text-[46px]">
              Simple, transparent pricing for everyone.
            </h1>
            <p className="w-full max-[410px] mx-auto text-[#9e9e9e] text-[18px] leading-[1.4]">
              Choose the plan that fits your needs, whether you&rsquo;re an
              individual or a team. No hidden fees, no surprises.
            </p>
          </div>

          <div>
            <div className="">
              <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                <div className="flex gap-y-[50px] bg-gradient-to-tr border border-[#6d47ff]  from-[#f4f0f8] to-[#eff7f9] py-[30px] px-6 rounded-[20px] flex-col justify-between font-[16px] leading-[1.4]">
                  <div className="">
                    <div className="border-b border-[#242424] mb-4 pb-4">
                      <p className="mb-[10px] text-[#6d47ff] font-semibold text-[18px]">
                        Free
                      </p>
                      <p className="flex gap-x-[10px] items-center mb-[10px] text-[30px] md:text-[32px]">
                        <span className="">$0</span>
                        <span className="text-[#6d47ff] font-[500] text-[18px]">
                          {" "}
                          Forever
                        </span>
                      </p>
                      <p className="min-h-[58px] text-gray-800 text-[14px]">
                        Ideal for: Students, casual users, trying the app.
                      </p>
                    </div>

                    <div>
                      <ul className="flex gap-y-[10px] mt-0 pl-0 mb-0 flex-col list-none">
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Basic clock in/clock out
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Track up to 3 daily activities
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Daily time summary reports
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Basic task priority (High/Medium/Low)
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          7-day data history
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Limited notifications (3 per day)
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          No time-off tracking
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          No holiday calendar
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="w-full text-center rounded-[10px] py-[12px] px-6 font-[500] inline-block relative overflow-hidden cursor-pointer transition-all duration-200 ease-linear">
                      <div className="btn"></div>
                      <div className="btn-bg"></div>
                      <p className="z-10 relative">Get Started</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-y-[50px] bg-gradient-to-tr border border-[#6d47ff]  from-[#f4f0f8] to-[#eff7f9] py-[30px] px-6 rounded-[20px] flex-col justify-between font-[16px] leading-[1.4]">
                  <div className="">
                    <div className="border-b border-[#242424] mb-4 pb-4">
                      <p className="mb-[10px] text-[#6d47ff] font-semibold text-[18px]">
                        Personal
                      </p>
                      <p className="flex gap-x-[10px] items-center mb-[10px] text-[30px] md:text-[32px]">
                        <span className="">$9.99</span>
                        <span className="text-[#6d47ff] font-[500] text-[18px]">
                          {" "}
                          Per Month
                        </span>
                      </p>
                      <p className="min-h-[58px] text-gray-800 text-[14px]">
                        Ideal for: Freelancers, remote workers, productivity
                        enthusiasts
                      </p>
                    </div>

                    <div>
                      <ul className="flex gap-y-[10px] mt-0 pl-0 mb-0 flex-col list-none">
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Unlimited daily activities tracking
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Smart notifications for all time allocations
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Achievement notifications when goals are met
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Weekly & monthly reports with insights
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Advanced task priorities with custom labels
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Time-off tracking (vacation, sick days)
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Personal holiday calendar
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          30-day data history
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="w-full text-center rounded-[10px] py-[12px] px-6 font-[500] inline-block relative overflow-hidden cursor-pointer transition-all duration-200 ease-linear">
                      <div className="btn"></div>
                      <div className="btn-bg"></div>
                      <p className="z-10 relative">Get Started</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-y-[50px] bg-gradient-to-tr border border-[#6d47ff]  from-[#f4f0f8] to-[#eff7f9] py-[30px] px-6 rounded-[20px] flex-col justify-between font-[16px] leading-[1.4]">
                  <div className="">
                    <div className="border-b border-[#242424] mb-4 pb-4">
                      <p className="mb-[10px] text-[#6d47ff] font-semibold text-[18px]">
                        Professional
                      </p>
                      <p className="flex gap-x-[10px] items-center mb-[10px] text-[30px] md:text-[32px]">
                        <span className="">$19.99</span>
                        <span className="text-[#6d47ff] font-[500] text-[18px]">
                          {" "}
                          Per Month
                        </span>
                      </p>
                      <p className="min-h-[58px] text-gray-800 text-[14px]">
                        Ideal for: Consultants, managers, business owners
                      </p>
                    </div>

                    <div>
                      <ul className="flex gap-y-[10px] mt-0 pl-0 mb-0 flex-col list-none">
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Unlimited data history
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Advanced analytics & productivity insights
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Custom notification settings & schedules
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Multiple project tracking
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Detailed time breakdowns by category
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Goal setting & tracking
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Integration ready (API access)
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Custom holiday calendars for different regions
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="w-full text-center rounded-[10px] py-[12px] px-6 font-[500] inline-block relative overflow-hidden cursor-pointer transition-all duration-200 ease-linear">
                      <div className="btn"></div>
                      <div className="btn-bg"></div>
                      <p className="z-10 relative">Get Started</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-y-[50px] bg-gradient-to-tr border border-[#6d47ff]  from-[#f4f0f8] to-[#eff7f9] py-[30px] px-6 rounded-[20px] flex-col justify-between font-[16px] leading-[1.4]">
                  <div className="">
                    <div className="border-b border-[#242424] mb-4 pb-4">
                      <p className="mb-[10px] text-[#6d47ff] font-semibold text-[18px]">
                        Team
                      </p>
                      <p className="flex gap-x-[10px] items-center mb-[10px] text-[30px] md:text-[32px]">
                        <span className="">$12.99</span>
                        <span className="text-[#6d47ff] font-[500] text-[18px]">
                          {" "}
                          user/month
                        </span>
                      </p>
                      <p className="min-h-[58px] text-gray-800 text-[14px]">
                        Ideal for: Students, casual users, trying the app.
                      </p>
                    </div>

                    <div>
                      <ul className="flex gap-y-[10px] mt-0 pl-0 mb-0 flex-col list-none">
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Team dashboard & overview
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Shared holiday calendars
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Team time-off coordination
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Manager reporting & insights
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Team productivity analytics
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Bulk user management
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Advanced admin controls
                        </li>
                        <li className="flex text-gray-800 text-[14px] gap-x-[10px] items-center">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Dedicated account manager
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="w-full text-center rounded-[10px] py-[12px] px-6 font-[500] inline-block relative overflow-hidden cursor-pointer transition-all duration-200 ease-linear">
                      <div className="btn"></div>
                      <div className="btn-bg"></div>
                      <p className="z-10 relative">Get Started</p>
                    </div>
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

export default Price;
