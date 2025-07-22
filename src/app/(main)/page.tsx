import Cta from '@/components/Cta';
import Hero from '@/components/Hero';
import HeroSection from '@/components/HeroSection';
import Service from '@/components/Service';
import StatGrid from '@/components/StatGrid';
import Testimonial from '@/components/Testimonial';
import React from 'react';

const Page = () => {
  return (
    <div>
      <HeroSection />
      <Hero />
      <Service />
      <StatGrid />
      <Testimonial />
      <Cta />
    </div>
  );
};

export default Page;
