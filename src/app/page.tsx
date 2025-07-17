import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import Service from "@/components/Service";
import SatatGrid from "@/components/StatGrid";
import Testimonial from "@/components/Testimonial";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Hero />
      <Service />
      <SatatGrid />
      <Testimonial />
      <Cta />
    </div>
  );
};

export default page;
