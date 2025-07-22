import React from 'react';
import checkedIcon from '@/components/Assets/checked.svg';
import Image from 'next/image';

const Price = () => {
  return (
    <div className="mt-12">
      <div className="mx-auto block w-full max-w-[1400px] px-[20px]">
        <div>
          <div className="mx-auto mb-[60px] w-full max-w-[650px] text-center">
            <span className="text-xl font-bold text-[#6d47ff]">Pricing</span>
            <h1 className="mt-[15px] mb-[20px] text-[36px] font-[400] leading-[1.2] md:text-[42px] lg:text-[46px]">
              Simple, transparent pricing for everyone.
            </h1>
            <p className="max-[410px] mx-auto w-full text-[18px] leading-[1.4] text-[#9e9e9e]">
              Choose the plan that fits your needs, whether you&rsquo;re an
              individual or a team. No hidden fees, no surprises.
            </p>
          </div>

          <div>
            <div className="">
              <div className="grid-col-1 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="font-[16px] flex flex-col justify-between gap-y-[50px] rounded-[20px] border border-[#6d47ff] bg-gradient-to-tr from-[#f4f0f8] to-[#eff7f9] py-[30px] px-6 leading-[1.4]">
                  <div className="">
                    <div className="mb-4 border-b border-[#242424] pb-4">
                      <p className="mb-[10px] text-[18px] font-semibold text-[#6d47ff]">
                        Free
                      </p>
                      <p className="mb-[10px] flex items-center gap-x-[10px] text-[30px] md:text-[32px]">
                        <span className="">$0</span>
                        <span className="text-[18px] font-[500] text-[#6d47ff]">
                          {' '}
                          Forever
                        </span>
                      </p>
                      <p className="min-h-[58px] text-[14px] text-gray-800">
                        Ideal for: Students, casual users, trying the app.
                      </p>
                    </div>

                    <div>
                      <ul className="mt-0 mb-0 flex list-none flex-col gap-y-[10px] pl-0">
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Basic clock in/clock out
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Track up to 3 daily activities
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Daily time summary reports
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Basic task priority (High/Medium/Low)
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          7-day data history
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Limited notifications (3 per day)
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          No time-off tracking
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
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
                    <div className="relative inline-block w-full cursor-pointer overflow-hidden rounded-[10px] py-[12px] px-6 text-center font-[500] transition-all duration-200 ease-linear">
                      <div className="btn"></div>
                      <div className="btn-bg"></div>
                      <p className="relative z-10">Get Started</p>
                    </div>
                  </div>
                </div>
                <div className="font-[16px] flex flex-col justify-between gap-y-[50px] rounded-[20px] border border-[#6d47ff] bg-gradient-to-tr from-[#f4f0f8] to-[#eff7f9] py-[30px] px-6 leading-[1.4]">
                  <div className="">
                    <div className="mb-4 border-b border-[#242424] pb-4">
                      <p className="mb-[10px] text-[18px] font-semibold text-[#6d47ff]">
                        Personal
                      </p>
                      <p className="mb-[10px] flex items-center gap-x-[10px] text-[30px] md:text-[32px]">
                        <span className="">$9.99</span>
                        <span className="text-[18px] font-[500] text-[#6d47ff]">
                          {' '}
                          Per Month
                        </span>
                      </p>
                      <p className="min-h-[58px] text-[14px] text-gray-800">
                        Ideal for: Freelancers, remote workers, productivity
                        enthusiasts
                      </p>
                    </div>

                    <div>
                      <ul className="mt-0 mb-0 flex list-none flex-col gap-y-[10px] pl-0">
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Unlimited daily activities tracking
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Smart notifications for all time allocations
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Achievement notifications when goals are met
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Weekly & monthly reports with insights
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Advanced task priorities with custom labels
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Time-off tracking (vacation, sick days)
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Personal holiday calendar
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
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
                    <div className="relative inline-block w-full cursor-pointer overflow-hidden rounded-[10px] py-[12px] px-6 text-center font-[500] transition-all duration-200 ease-linear">
                      <div className="btn"></div>
                      <div className="btn-bg"></div>
                      <p className="relative z-10">Get Started</p>
                    </div>
                  </div>
                </div>
                <div className="font-[16px] flex flex-col justify-between gap-y-[50px] rounded-[20px] border border-[#6d47ff] bg-gradient-to-tr from-[#f4f0f8] to-[#eff7f9] py-[30px] px-6 leading-[1.4]">
                  <div className="">
                    <div className="mb-4 border-b border-[#242424] pb-4">
                      <p className="mb-[10px] text-[18px] font-semibold text-[#6d47ff]">
                        Professional
                      </p>
                      <p className="mb-[10px] flex items-center gap-x-[10px] text-[30px] md:text-[32px]">
                        <span className="">$19.99</span>
                        <span className="text-[18px] font-[500] text-[#6d47ff]">
                          {' '}
                          Per Month
                        </span>
                      </p>
                      <p className="min-h-[58px] text-[14px] text-gray-800">
                        Ideal for: Consultants, managers, business owners
                      </p>
                    </div>

                    <div>
                      <ul className="mt-0 mb-0 flex list-none flex-col gap-y-[10px] pl-0">
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Unlimited data history
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Advanced analytics & productivity insights
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Custom notification settings & schedules
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Multiple project tracking
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Detailed time breakdowns by category
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Goal setting & tracking
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Integration ready (API access)
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
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
                    <div className="relative inline-block w-full cursor-pointer overflow-hidden rounded-[10px] py-[12px] px-6 text-center font-[500] transition-all duration-200 ease-linear">
                      <div className="btn"></div>
                      <div className="btn-bg"></div>
                      <p className="relative z-10">Get Started</p>
                    </div>
                  </div>
                </div>
                <div className="font-[16px] flex flex-col justify-between gap-y-[50px] rounded-[20px] border border-[#6d47ff] bg-gradient-to-tr from-[#f4f0f8] to-[#eff7f9] py-[30px] px-6 leading-[1.4]">
                  <div className="">
                    <div className="mb-4 border-b border-[#242424] pb-4">
                      <p className="mb-[10px] text-[18px] font-semibold text-[#6d47ff]">
                        Team
                      </p>
                      <p className="mb-[10px] flex items-center gap-x-[10px] text-[30px] md:text-[32px]">
                        <span className="">$12.99</span>
                        <span className="text-[18px] font-[500] text-[#6d47ff]">
                          {' '}
                          user/month
                        </span>
                      </p>
                      <p className="min-h-[58px] text-[14px] text-gray-800">
                        Ideal for: Students, casual users, trying the app.
                      </p>
                    </div>

                    <div>
                      <ul className="mt-0 mb-0 flex list-none flex-col gap-y-[10px] pl-0">
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Team dashboard & overview
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Shared holiday calendars
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Team time-off coordination
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Manager reporting & insights
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Team productivity analytics
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Bulk user management
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
                          <Image
                            src={checkedIcon}
                            alt="Checked"
                            width={16}
                            height={16}
                          />
                          Advanced admin controls
                        </li>
                        <li className="flex items-center gap-x-[10px] text-[14px] text-gray-800">
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
                    <div className="relative inline-block w-full cursor-pointer overflow-hidden rounded-[10px] py-[12px] px-6 text-center font-[500] transition-all duration-200 ease-linear">
                      <div className="btn"></div>
                      <div className="btn-bg"></div>
                      <p className="relative z-10">Get Started</p>
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
