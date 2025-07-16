import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="mt-12 px-4 bg-black border-t border-gray-300  from-[#f4f0f8] to-[#eff7f9] text-[#303030]">
      <div className="py-6 max-w-6xl flex items-center mx-auto">
        <p className="text-[#f6f6f6] text-sm md:base font-semibold">
          &ldquo;Are you tired of feeling like there are never enough hours in
          the day? Do you struggle to keep up with your tasks and deadlines? If
          so, you&rsquo;re not alone. Many people find themselves overwhelmed by
          their to-do lists and struggling to stay on top of their
          responsibilities. But what if there was a way to take control of your
          time and achieve more? With the right tools and strategies, you can
          transform your life and achieve your goals.
        </p>
      </div>
    </div>
  );
};

export default Hero;
