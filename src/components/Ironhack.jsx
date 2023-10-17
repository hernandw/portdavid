import React, { useContext, useState } from 'react';
import ironhackLogo2 from "../image/ironhackLogo2.png";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../ThemeContext';


function Ironhack() {
  const [showSecondText, setShowSecondText] = useState(false);

  const handleClick = () => {
    setShowSecondText(!showSecondText); // Toggle the value
  };
  
  const { t } = useTranslation();
  const {darkMode}= useContext(ThemeContext)
  const buttonClasses = darkMode
    ? 'bg-orange-300 hover:bg-orange-500 text-gray-700'
    : 'bg-gray-500 hover:bg-gray-700 text-white';
  return (

    <div id="ironhack" className={`max-w-[1040px] m-auto md:pl-20 p-4 py-16 flex flex-col md:flex-row ${darkMode
      ?"bg-gray-800"
      :"bg-white "
      }`}>
      <div className={`w-full md:w-1/2 rounded-lg p-4 shadow-md md:mr-4 ${darkMode
      ?"bg-slate-700"
      :"bg-white "
      }`}>
        {showSecondText ? (
          <div>
        <h2 className={`text-2xl font-bold my-4 ${darkMode ? "text-orange-400" : "text-black"}`}>Ironhack Bootcamp</h2>
        <p className={darkMode ? "text-orange-300" : "text-black"}>
          {t("Module1")}
        </p>
        <br />
        <p className={darkMode ? "text-orange-300" : "text-black"}>
          {t("Module2")}
        </p>
        <br />
        <p className={darkMode ? "text-orange-300" : "text-black"}>
          {t("Module3")}
        </p>
        <br />
        <p className={darkMode ? "text-orange-300" : "text-black"}>
          {t("FinalProject")}
        </p>
      </div>
    ) : (
      <div>
        <h2 className={`text-2xl font-bold my-4 ${darkMode ? "text-orange-400" : "text-gray-700"}`}>{t("PreCourse")}</h2>
        <p className={darkMode ? "text-orange-300" : "text-gray-700"}>
          {t("PreDetails")}
        </p>
          </div>
        )}
        <div className="flex justify-center mt-4">
          <button
            className={`font-bold py-2 px-4 rounded-full transition duration-300 ${buttonClasses} ${
              showSecondText ? 'scale-75' : ''
            }`}
            onClick={handleClick}
          >
            {showSecondText ? 'Pre Bootcamp' : 'Ironhack Course'}
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <a href="https://www.ironhack.com/pt/en/web-development">
          <img
            src={ironhackLogo2}
            alt="ironhack"
            className={`h-full mx-auto hover:scale-105 transition-transform duration-300${darkMode ? 'filter brightness-25 invert' : ''}`}
          
          />
        </a>
      </div>
    </div>
  );
}


export default Ironhack;