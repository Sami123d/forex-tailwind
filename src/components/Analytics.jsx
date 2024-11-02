import React from "react";
import laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full py-1 px-4 bg-white">
      <div className="max-w-[1240px] mx-auto text-white grid md:grid-cols-2 ">
       
          <img className="w-[450px]  mx-auto my-6 xxl:w-[550px] " src={laptop} alt="" srcset="" />
       
        <div className="text-black my-auto">
       

          <p className="uppercase text-[#00df9a] text-sm md:text-lg font-semibold">data analytics dashboard</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl my-1 font-bold md:text-left">Manage Data Analytics Centrally</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
            placeat obcaecati? Praesentium at architecto repellat asperiores
            saepe, error nemo dicta, ratione accusamus cum, quam natus.
          </p>
          <div className="flex sm:justify-start justify-center">
            <button class="text-[#00d59a]  bg-[#000300] my-4 hover:bg-[#0e2c0e] text-sm py-2 px-7 rounded">
          Get Started
        </button>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Analytics;
