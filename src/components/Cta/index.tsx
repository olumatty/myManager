import React from 'react';
import { Button } from '../ui/Button';

const Cta: React.FC = () => {
  return (
    <div className="mx-auto mt-12 max-w-6xl rounded-lg border bg-gradient-to-tr from-[#f4f0f8] to-[#eff7f9] px-4 shadow-xl drop-shadow-2xl">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center py-12">
        <h2 className="mb-4 text-center text-base font-bold md:text-3xl">
          By improving your timing,you can bring your ideas to life more
          effectively and have a work-life balance.
        </h2>
        <p className="mb-8 text-sm md:text-base">
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
