import React, { useEffect, useState, useRef } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const sidebarRef = useRef(null); // Reference for the sidebar

  const navHandler = () => {
    setNav(!nav);
  };

  // Close sidebar on orientation change
  useEffect(() => {
    const handleResize = () => {
      // Close the sidebar if it's open when the orientation changes
      if (window.innerWidth > 768) {
        setNav(false);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Disable body scroll when sidebar is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [nav]);

  // Handle clicks outside of the sidebar to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setNav(false); // Close the sidebar
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="text-white h-24 max-w-[1240px] mx-auto px-4 flex justify-between items-center bg-black">
      <div className="text-3xl w-full font-bold uppercase text-[#00df9a]">
        forex.
      </div>
      <ul className="md:flex hidden">
        <li className="p-4 hover:cursor-pointer hover:text-[#00df9a]">Company</li>
        <li className="p-4 hover:cursor-pointer hover:text-[#00df9a]">Resource</li>
        <li className="p-4 hover:cursor-pointer hover:text-[#00df9a]">About</li>
        <li className="p-4 hover:cursor-pointer hover:text-[#00df9a]">Contact</li>
        <li className="p-4 hover:cursor-pointer hover:text-[#00df9a]">Home</li>
      </ul>
      <div className="block md:hidden hover:cursor-pointer" onClick={navHandler}>
        {nav ? <IoMdClose size={22} /> : <RiMenu3Fill size={20} />}
      </div>
      <div
        ref={sidebarRef} // Attach the ref to the sidebar
        className={`fixed h-full flex flex-col left-0 top-0 w-[60%] ease-in-out duration-500 bg-[#000300] z-20 ${
          nav ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <div className="text-3xl mt-4 p-4 w-full font-bold uppercase text-[#00df9a]">
          forex.
        </div>
        <ul className="uppercase ml-4 pt-7">
          <li className="p-4 border-b hover:cursor-pointer border-gray-600 hover:text-[#00df9a]">Home</li>
          <li className="p-4 border-b hover:cursor-pointer border-gray-600 hover:text-[#00df9a]">Company</li>
          <li className="p-4 border-b hover:cursor-pointer border-gray-600 hover:text-[#00df9a]">Contact</li>
          <li className="p-4 border-b hover:cursor-pointer border-gray-600 hover:text-[#00df9a]">Resource</li>
          <li className="p-4 border-b hover:cursor-pointer border-gray-600 hover:text-[#00df9a]">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
