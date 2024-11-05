import React from "react";
import Button from "./Button";

const Singlecard = ({ title, price, storage, user, send, image, isSpecial,  }) => {
  console.log(isSpecial)
  return (
    <div className={`${isSpecial ? "flex-1 md:scale-110" : "flex-1"}`}>
      <div className={ `  p-6 rounded-lg text-center shadow-md transform transition duration-300 ${isSpecial ? "hover:shadow-2xl bg-[#eceef3]" : "hover:shadow-2xl" }`}>
      <div className="flex justify-center mt-[-55px]">
        <img className="w-16 h-16 object-contain" src={image} alt="" srcset="" />
      </div>

      <h2 className="text-xl font-semibold mt-5 mb-2">{title}</h2>
      <h1 className="text-2xl font-bold my-5 ">{price}</h1>
      <p className="text-gray-700 py-2 border-t-2 border-b-2 " style={{borderColor:"#d5d7da"}}>{storage}</p>
      <p className="text-gray-700 py-2 border-b-2 ">{user}</p>
      <p className="text-gray-700 py-2 border-b-2 ">{send}</p>
      <Button isSpecial={isSpecial} text={'Get Started'}/>
    </div>
    </div>
    
  );
};

export default Singlecard;
