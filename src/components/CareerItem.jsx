import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

const CareerItem = ({year,job,duration,details}) => {
  const {darkMode}= useContext (ThemeContext)
  return (
<ol className={`flex flex-col md:flex-row relative border-l ${darkMode ? "border-orange-300" : "border-stone-200"}`}>
      <li className="mb-10 ml-4">
        <div className={`absolute w-3 h-3 ${darkMode ? "bg-orange-400" : "bg-stone-200"} rounded-full mt-1.5 -left-1.5 border-white`} />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className={`inline-block px-2 py-1 font-semibold ${darkMode ? "text-gray-700" : "text-white"} ${darkMode ? "bg-orange-300" : "bg-gray-600"} rounded-md`}>{year}</span>
          <span className={`text-lg font-semibold ${darkMode ? "text-orange-400" : "text-gray-700"}`}>{job}</span>
          <span className={`my-1 text-sm font-normal leading-none ${darkMode ? "text-orange-200" : "text-stone-400"}`}>{duration}</span>
        </p>
        <p className={`my-2 text-base font-normal ${darkMode ? "text-orange-200" : "text-stone-500"}`}>{details}</p>
      </li>
    </ol>
  );
   }

export default CareerItem