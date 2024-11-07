import React, { useEffect, useState, useRef } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setNav(!nav);

  // Close sidebar on resize and enable scroll lock
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setNav(false);
    };

    window.addEventListener("resize", handleResize);
    document.body.style.overflow = nav ? "hidden" : "auto";

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto"; // Reset overflow on unmount
    };
  }, [nav]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="text-white h-24 max-w-[1240px] mx-auto px-4 flex justify-between items-center bg-black">
      <div className="text-3xl font-bold uppercase text-[#00df9a] cursor-pointer ">forex.</div>
      <ul className="md:flex hidden">
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">Home</li>
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">Company</li>
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">Resources</li>
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">About</li>
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">Contact</li>




      </ul>
      <div className="block md:hidden cursor-pointer" onClick={toggleSidebar}>
        {nav ? <IoMdClose size={22} /> : <RiMenu3Fill size={20} />}
      </div>
      
      <div
        ref={sidebarRef}
        className={`fixed h-full flex flex-col left-0 top-0 w-[60%] overflow-y-auto bg-[#000300] z-20 transition-transform duration-500 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="text-3xl mt-4 p-4 font-bold uppercase text-[#00df9a] cursor-pointer">forex.</div>
        <ul className="uppercase ml-4 mb-2 pt-7">
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] cursor-pointer">Home</li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] cursor-pointer">Company</li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] cursor-pointer">Resources</li>
          <li className="p-4 border-b  border-gray-600 hover:text-[#00df9a] cursor-pointer">About</li>
          <li className="p-4  border-gray-600 hover:text-[#00df9a] cursor-pointer">Contact</li>

        </ul>
      </div>
      <div className={`fixed inset-0 transition-opacity duration-300 ${nav ? "bg-black opacity-50" : "opacity-0 pointer-events-none"}`} onClick={() => setNav(false)} />
    </div>
  );
};

export default Navbar;
