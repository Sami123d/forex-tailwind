import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoFootball } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="max-w-[1240px] gap-8 py-16 px-4 text-gray-300 grid lg:grid-cols-3 mx-auto ">
      <div className="">
        <div className="text-3xl mb-6 font-bold uppercase text-[#00df9a]">
          React.
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad atque sit
          expedita sunt. Consequuntur, dignissimos?
        </div>
        <div className="flex justify-between md: w-[75%] my-6">
          <IoLogoFacebook size={24} />
          <RiInstagramFill size={24} />
          <FaTwitterSquare size={24} />
          <FaSquareGithub size={24} />
          <IoFootball size={24} />
        </div>
      </div>
      <div className="lg:col-span-2   sm:flex sm:justify-between md:text-left text-center  mt-6">
        <div className="sm:m-0 mb-8">
          <ul className="col-span-1">
            <li className="py-2 text-sm">Solution</li>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div className="sm:m-0 mb-8">
          <ul className="col-span-1">
            <li className="py-2 text-sm">Support</li>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">Api Status</li>
          </ul>
        </div>

        <div className="sm:m-0 mb-8">
          <ul className="col-span-1">
            <li className="py-2 text-sm">Company</li>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
          </ul>
        </div>

        <div className="sm:m-0 mb-8">
          <ul className="col-span-1">
            <li className="py-2 text-sm">Legal</li>
            <li className="py-2 text-sm">Insights</li>
            <li className="py-2 text-sm">comling</li>
            <li className="py-2 text-sm">calling</li>
            <li className="py-2 text-sm">Guides</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;