import React from "react";
import { LuLoader } from "react-icons/lu";

const Loader = () => {
  return (
    <div className="flex items-center">
      <LuLoader className="animate-spin text-4xl text-gray-500" />
    </div>
  );
};

export default Loader;
