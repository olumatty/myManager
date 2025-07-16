import React from "react";
import { Button } from "../ui/Button";
import Image, { StaticImageData } from "next/image";
import bgImageOverlay from "@/components/Assets/world.png";
import CalendarBg from "@/components/Assets/Calendar.png";

interface HeroSectionProps {
  backgroundImage?: StaticImageData | string;
  backgroundImage2?: StaticImageData | string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage = bgImageOverlay,
  backgroundImage2 = CalendarBg,
}) => {
  return (
    <div className="w-full max-h-[1400px] bg-gradient-to-tr relative border-t border-gray-300  from-[#f4f0f8] to-[#eff7f9] text-[#303030]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${
            typeof backgroundImage === "string"
              ? backgroundImage
              : backgroundImage.src
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image src={backgroundImage} alt="Image1" />
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-20 leading-[1.2] animate-pulse">
            Take Control of your time and Achieve More With my
            <span className="text-[#855fff]">Manager</span>
          </h1>

          <p className="text-sm md:text-base text-[#5e5f6a] mb-6 max-w-3xl flex items-center justify-center mx-auto">
            Stop feeling overwhelmed and start seeing real progress. Our time
            management app helps you effortlessly organize your day, prioritize
            tasks, and conquer your to-do list. Simple to use, powerful in
            results.
          </p>

          <div className="flex flex-col md:flex-row mb-10 items-center max-w-md justify-center mx-auto gap-4">
            <Button
              variant="secondary"
              className="hover:bg-opacity-70 transition-colors duration-300"
            >
              Get Started for free
            </Button>

            <Button
              variant="tertiary"
              className="hover:bg-opacity-70 border py-2 px-4 rounded-lg border-gray-900 transition-colors duration-300"
            >
              Learn how to use it
            </Button>
          </div>
        </div>
        <div className="w-full max-h-[300px] px-6">
          <Image
            src={backgroundImage2}
            alt="Calendar"
            className="max-h-[400px] bg-cover bg-no-repeat bg-blend-overlay "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
