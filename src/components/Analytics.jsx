import React from "react";
import laptop from "../assets/laptop.jpg";
import Button from "./Button";

const Analytics = () => {
  return (
    <div className="w-full py-1 px-4 bg-white">
      <div className="max-w-[1240px] mx-auto text-white grid md:grid-cols-2 ">
       
          <img className="w-[450px]  mx-auto my-6 xxl:w-[550px] " src={laptop} alt="" srcset="" />
       
        <div className="text-black my-auto  cursor-default">
       

          <p className="uppercase text-[#00df9a] text-sm md:text-lg font-semibold">data analytics dashboard</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl my-1 font-bold md:text-left">Manage Data Analytics Centrally</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
            placeat obcaecati? Praesentium at architecto repellat asperiores
            saepe, error nemo dicta, ratione accusamus cum, quam natus.
          </p>
          <div className="flex sm:justify-start justify-center">
            <Button isSpecial={true} text={'Get Started'}/>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Analytics;
