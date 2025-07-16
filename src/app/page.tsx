import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import Service from "@/components/Service";
import SatatGrid from "@/components/StatGrid";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Hero />
      <Service />
      <SatatGrid />
    </div>
  );
};

export default page;
