import React from "react";
import { Button } from "../ui/Button";

const Cta: React.FC = () => {
  return (
    <div className="bg-gradient-to-tr max-w-6xl mx-auto border  from-[#f4f0f8] to-[#eff7f9] mt-12 px-4 shadow-xl drop-shadow-2xl rounded-lg">
      <div className="py-12 max-w-4xl flex flex-col items-center justify-center mx-auto ">
        <h2 className="text-base md:text-3xl font-bold text-center mb-4">
          By improving your timing,you can bring your ideas to life more
          effectively and have a work-life balance.
        </h2>
        <p className="text-sm md:text-base mb-8 ">
          Discover The Magic of Timing : Empower Your Ideas and Expressions for
          Maximum Impact
        </p>

        <Button variant="primary" className="text-white">
          Start 10-days free trial
        </Button>
      </div>
    </div>
  );
};

export default Cta;
