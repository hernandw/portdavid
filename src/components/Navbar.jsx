import React, { useContext, useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineProject,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import i18n from "../i18next";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../ThemeContext";

////All information are in Translation JSon

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("change nav");
  };
  // Translation
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div>
      <div
        className={`absolute top-0 left-0 w-full flex justify-center items-center z-20 ${
          darkMode ? "dark" : ""
        }`}
      >
        <button
          onClick={() => {
            changeLanguage("en");
            window.location.reload();
          }}
          className={`mt-1 w-5% p-2 rounded-lg cursor-pointer hover:scale-110 ease-in duration-200 flex items-center justify-center ${
            darkMode
              ? "bg-orange-300 shadow-orange-400"
              : "bg-gray-100 shadow-gray-500"
          }`}
        >
          EN
        </button>
        <button
          onClick={toggleDarkMode}
          className={`mt-1 w-5% p-2 rounded-lg cursor-pointer m-2 hover:scale-110 ease-in duration-200 flex items-center justify-center ${
            darkMode
              ? "bg-orange-500 shadow-orange-400"
              : "bg-gray-100 shadow-gray-500"
          }`}
        >
          {darkMode ? (
            <FiSun className="text-yellow-400" size={20} />
          ) : (
            <FiMoon className="text-gray-600" size={20} />
          )}
        </button>
        <button
          onClick={() => {
            changeLanguage("pt");
            window.location.reload();
          }}
          className={`mt-1 w-5% p-2 rounded-lg cursor-pointer hover:scale-110  ease-in duration-200 flex items-center justify-center ${
            darkMode
              ? "bg-orange-300 shadow-orange-400"
              : "bg-gray-100 shadow-gray-400"
          }`}
        >
          PT
        </button>
        <AiOutlineMenu
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] md:hidden"
        />
      </div>

      {nav ? (
        <div
          className={`fixed w-full h-screen ${
            darkMode ? "bg-gray-800" : "bg-white"
          } flex flex-col justify-center items-center z-20`}
        >
          <a
            onClick={handleNav}
            href="#main"
            className={`w-[75%] flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ${
              darkMode
                ? "bg-orange-500 shadow-orange-400"
                : "bg-gray-100 shadow-gray-400"
            }`}
          >
            <AiOutlineHome size={20} />
            <span className="pl-4 font-semibold text-gray-800 ">
              {t(`Home`)}
            </span>
          </a>

          <a
            onClick={handleNav}
            href="#ironhack"
            className={`w-[75%] flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ${
              darkMode
                ? "bg-orange-500 shadow-orange-400"
                : "bg-gray-100 shadow-gray-400"
            }`}
          >
            <HiOutlineDesktopComputer size={20} />
            <span className="pl-4 font-semibold text-gray-800 ">
              Ironhack
            </span>
          </a>

          <a
            onClick={handleNav}
            href="#career"
            className={`w-[75%] flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ${
              darkMode
                ? "bg-orange-500 shadow-orange-400"
                : "bg-gray-100 shadow-gray-400"
            }`}
          >
            <GrProjects size={20} />
            <span className="pl-4 font-semibold text-gray-800 ">
              {t(`Career`)}
            </span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className={`w-[75%] flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ${
              darkMode
                ? "bg-orange-500 shadow-orange-400"
                : "bg-gray-100 shadow-gray-400"
            }`}
          >
            <BsPerson size={20} />
            <span className="pl-4 font-semibold text-gray-800 ">
              {t(`Projects`)}
            </span>
          </a>

          <a
            onClick={handleNav}
            href="#contact"
            className={`w-[75%] flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ${
              darkMode
                ? "bg-orange-500 shadow-orange-400"
                : "bg-gray-100 shadow-gray-400"
            }`}
          >
            <AiOutlineMail size={20} />
            <span className="pl-4 font-semibold text-gray-800 ">
              {t(`Contact`)}
            </span>
          </a>
        </div>
      ) : (
        <div></div>
      )}
      <div className="md:block hidden fixed top-[25%] z-10  ">
        <div className="flex flex-col">
          <a
            href="#main"
            className={`rounded-full shadow-lg   m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300
            ${
              darkMode
                ? "bg-orange-300 shadow-orange-400"
                : "bg-gray-100 shadow-gray-400"
            }`}
          >
            <AiOutlineHome size={20} className="text-gray-800" />
          </a>

          <a
            href="#ironhack"
            className={`rounded-full shadow-lg   m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300
            ${
              darkMode
                ? "bg-orange-300 shadow-orange-400"
                : "bg-gray-100 shadow-gray-400"
            }`}
          >
            <HiOutlineDesktopComputer size={20} className="text-gray-800" />
          </a>

          <a
            href="#projects"
            className={`rounded-full shadow-lg   m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300
            ${
              darkMode
                ? "bg-orange-300 shadow-orange-400"
                : "bg-gray-100 shadow-gray-400"
            }`}
          >
            <AiOutlineProject size={20} className="text-gray-800" />
          </a>

          <a
            href="#career"
            className={`rounded-full shadow-lg   m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300
            ${
              darkMode
                ? "bg-orange-300 shadow-orange-400"
                : "bg-gray-100 shadow-gray-400"
            }`}
          >
            <BsPerson size={20} className="text-gray-800" />
          </a>

          <a
            href="#contact"
            className={`rounded-full shadow-lg   m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300
            ${
              darkMode
                ? "bg-orange-300 shadow-orange-400"
                : "bg-gray-100 shadow-gray-400"
            }`}
          >
            <AiOutlineMail size={20} className="text-gray-800" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
