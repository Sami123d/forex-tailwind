import React from "react";
import { ReactTyped } from "react-typed";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="text-white cursor-default">
      <div className="w-full mx-auto max-w-[800px] mt-[-96px]  flex items-center h-screen flex-col content-center justify-center">
        <p className="text-[#00df9a] text-center lg:text-2xl uppercase py-1">
          growing with data analytics
        </p>
        <h1 className="text-3xl lg:text-7xl md:text-6xl sm:text-4xl text-center font-bold ">
          Grow with data.
        </h1>
        <div className="font-semibold text-center py-1 lg:text-4xl md:text-4xl sm:text-2xl">
          Fast flexible financing for 
          <ReactTyped className="pl-2 lg:text-4xl md:text-4xl sm:text-2xl text-gray-500 "
            strings={[" D2d", " B2b", " Saas"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          
        </div>
        <p className="text-gray-500 text-center py-1 px-2 font-semibold lg:text-xl text-sm ">
          Mointor your data analytics to increase revenue for BTB, BTC, & Saas
          platforms.
        </p>
        <Button text={'Get Started'}/>
      </div>
    </div>
  );
};

export default Hero;
