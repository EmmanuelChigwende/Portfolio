import React from "react";

const Header = () => {
  return (
    <header className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 py-5 sm:py-8">
      <div>
        <h1 className="text-[#E7EDF3] font-bold text-base sm:text-lg md:text-[1.2rem] cursor-pointer hover:text-[#8695A7]">
          <a href="#home">EMMANUEL C</a>
        </h1>
      </div>

      <nav>
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 text-xs sm:text-sm md:text-[1.2rem] text-[#8695A7]">
          <li className="hover:text-[#E7EDF3] hover:underline">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-[#E7EDF3] hover:underline">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-[#E7EDF3] hover:underline">
            <a href="#learning">Learning</a>
          </li>
          <li className="hover:text-[#E7EDF3] hover:underline">
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;