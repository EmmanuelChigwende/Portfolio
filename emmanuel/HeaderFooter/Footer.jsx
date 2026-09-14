import React from "react";
import { Mail, Cat } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 sm:px-6 md:px-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 md:gap-8 border-t border-[#141F29]">
      <h2 className="text-[#E7EDF3] text-lg sm:text-xl md:text-[1.5rem] font-extrabold leading-snug">
        Lets talk about a role, project or <br className="hidden sm:inline" />{" "}
        connect over the love of the game
      </h2>

      <ul className="text-[#E7EDF3] text-sm sm:text-base md:text-[1.2rem]">
        <li className="flex flex-row gap-6 sm:gap-8 font-bold items-center justify-center">
          <a
            href="mailto:emmanuelchigwende2@gmail.com"
            className="flex gap-2 items-center hover:text-[#8695A7] transition-transform duration-200 hover:scale-105"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>gmail</span>
          </a>
          <a
            href="https://github.com/EmmanuelChigwende"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center hover:text-[#8695A7] transition-transform duration-200 hover:scale-105"
          >
            <Cat className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>github</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;