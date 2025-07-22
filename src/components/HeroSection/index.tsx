import React from 'react';
import { Button } from '../ui/Button';
import Image, { StaticImageData } from 'next/image';
import bgImageOverlay from '@/components/Assets/world.png';
import CalendarBg from '@/components/Assets/Calendar.png';

interface HeroSectionProps {
  backgroundImage?: StaticImageData | string;
  backgroundImage2?: StaticImageData | string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage = bgImageOverlay,
  backgroundImage2 = CalendarBg,
}) => {
  return (
    <div className="relative w-full border-t border-gray-300 bg-gradient-to-tr from-[#f4f0f8] to-[#eff7f9] text-[#303030]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${
            typeof backgroundImage === 'string'
              ? backgroundImage
              : backgroundImage.src
          })`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-between py-16 px-6">
        <div className="flex flex-grow flex-col items-center justify-center text-center">
          <h1 className="mb-4 mt-20 animate-pulse text-3xl font-bold leading-[1.2] md:text-5xl">
            Take Control of your time and Achieve More With my
            <span className="text-[#855fff]">Manager</span>
          </h1>

          <p className="mx-auto mb-6 flex max-w-3xl items-center justify-center text-sm text-[#5e5f6a] md:text-base">
            Stop feeling overwhelmed and start seeing real progress. Our time
            management app helps you effortlessly organize your day, prioritize
            tasks, and conquer your to-do list. Simple to use, powerful in
            results.
          </p>

          <div className="mx-auto mb-10 flex max-w-md flex-col items-center justify-center gap-4 md:flex-row">
            <Button
              variant="secondary"
              className="transition-colors duration-300 hover:bg-opacity-70"
            >
              Get Started for free
            </Button>

            <Button
              variant="tertiary"
              className="rounded-lg border border-gray-900 py-2 px-4 transition-colors duration-300 hover:bg-opacity-70"
            >
              Learn how to use it
            </Button>
          </div>
        </div>
        <div className="mt-12 flex w-full justify-center">
          <Image
            src={backgroundImage2}
            alt="Calendar"
            className="max-h-[400px] bg-cover bg-no-repeat bg-blend-overlay"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
