import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="mt-12 border-t border-gray-300 bg-gradient-to-r from-blue-600 to-purple-600 px-4 text-[#303030]">
      <div className="mx-auto flex max-w-6xl items-center py-6">
        <p className="md:base text-sm font-semibold text-[#f6f6f6]">
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
