import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] grid lg:grid-cols-3 mx-auto">
        <div className=" lg:col-span-2 my-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-2">
            Want tips and tricks to optimize your flow?
          </h1>
          <p className="">Sign up to our news letter and stay upto date</p>
        </div>
        <div className="my-4 ">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
            <input
              type="text"
              className="p-2 rounded w-full "
              placeholder="enter email "
            />
            <button class="bg-[#00d59a] text-[#000300] font-medium hover:bg-[#02ab7b] text-md w-[200px] py-2 m-4 px-6 rounded">
              Notify me
            </button>
          </div>
          <p className="">We care abput the protection of your data. Read our <span className="text-[#00d59a] underline">Privacy Policy</span></p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
{
  /* <div className="lg:col-span-2">
          <h1 className="text-xl md:text-2xl lg:text-3xl my-1 font-bold py-2">
            Want tips and tricks to optimize your flow?
          </h1>

          <p>Sign up to our news letter and stay upto date</p>
        </div>
        <div className="my-4 ">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full">
            <input
              type="email"
              className="flex w-full p-3"
              placeholder="Enter Email"
            />

            <button class="bg-[#00d59a] ml-4 my-6 px-4 py-4 w-[200px] text-[#000300]  hover:bg-[#0e2c0e] text-sm  rounded-md">
              Get Started
            </button>
          </div>
        </div> */
}
