import React from 'react';
import Image from 'next/image';
import BgImage from '@/components/Assets/purple.avif';
import MissionBg from '@/components/Assets/missionbg.avif';
import Service from '@/components/Service';

const Page = () => {
  return (
    <div className="mt-12">
      <div>
        <div className="relative h-[200px] overflow-hidden">
          <Image
            src={BgImage}
            alt="Background"
            className="absolute inset-0 z-0 w-full object-cover"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
            <div className="flex items-center justify-center">
              <h1 className="mb-4 text-4xl font-bold">About Us</h1>
            </div>
            <p className="mx-auto max-w-4xl text-center text-base text-white">
              We&rsquo;re on a mission to help people and teams achieve their
              best work through better time management and productivity tools.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-6xl items-center justify-between gap-8 rounded-lg border bg-gradient-to-tr from-[#f4f0f8] to-[#eff7f9] p-8">
          {/* Text Section */}
          <div className="flex flex-1 flex-col items-start">
            <h1 className="mb-4 text-4xl font-bold text-[#6d47ff]">
              Our Mission
            </h1>
            <p className="max-w-lg text-base text-gray-700">
              We&rsquo;re on a mission to help people and teams achieve their
              best work through better time management and productivity tools.
            </p>
            <p className="mt-2 text-base text-gray-700">
              Our platform is designed to empower individuals and teams to take
              control of their time, streamline their workflows, and achieve
              their goals with ease.
            </p>
            <p className="mt-2 text-base text-gray-700">
              We believe that time management is a critical skill for success in
              today&rsquo;s fast-paced world. Our platform is built with the
              latest technologies and features to help you stay organized,
              focused, and productive.
            </p>
            <p className="mt-2 text-base text-gray-700">
              Our platform is designed to empower individuals and teams to take
              control of their time, streamline their workflows, and achieve
              their goals with ease.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative h-[400px] flex-1 overflow-hidden rounded-lg">
            <Image
              src={MissionBg}
              alt="Mission Background"
              fill
              style={{ objectFit: 'contain', borderRadius: '8px' }}
              className="rounded-2xl"
              priority
            />
          </div>
        </div>

        <div>
          <Service />
        </div>
      </div>
    </div>
  );
};

export default Page;
