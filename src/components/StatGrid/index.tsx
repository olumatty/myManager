"use client";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedNumberProps {
  targetValue: number;
  duration?: number;
  suffix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  targetValue,
  duration = 2000,
  suffix = "",
}) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const animationFrameId = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (!inView) {
      setCurrentNumber(0);
      return;
    }

    setCurrentNumber(0);
    startTime.current = null;
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    const animate = (currentTime: number) => {
      if (!startTime.current) {
        startTime.current = currentTime;
      }

      const progress = (currentTime - startTime.current) / duration;

      if (progress < 1) {
        const value = Math.min(progress, 1) * targetValue;
        setCurrentNumber(Math.floor(value));
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        setCurrentNumber(targetValue);
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
      }
    };

    animationFrameId.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [targetValue, duration, inView]);

  const formattedNumber = currentNumber.toLocaleString();

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-bold text-white mb-2">
      {formattedNumber}
      {suffix}
    </div>
  );
};

// Your main StatGrid component
const StatGrid: React.FC = () => {
  const statData = [
    { target: 50000, label: "Active Users", suffix: "+" },
    { target: 20000, label: "Tasks Completed", suffix: "+" },
    { target: 99, label: "User Satisfaction", suffix: "%" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl py-16 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 gap-x-4 sm:gap-x-8">
          {" "}
          {statData.map((stat, index) => (
            <div key={index} className="text-center">
              {typeof stat.target === "number" ? (
                <AnimatedNumber
                  targetValue={stat.target}
                  duration={2500}
                  suffix={stat.suffix}
                />
              ) : (
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {" "}
                  {stat.number}
                </div>
              )}
              <div className="text-blue-100 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatGrid;
