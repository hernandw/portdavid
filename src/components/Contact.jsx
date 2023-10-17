import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ThemeContext";

function Contact() {
  const { t } = useTranslation();
  const {darkMode}= useContext (ThemeContext)

  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className={ `py-4 text-4xl font-bold text-center text-[#001b5e] ${darkMode
      ?"text-orange-400"
      :"text-gray-700"
      }` }>
        {t("Contact")}
      </h1>

      <form action="https://getform.io/f/1724ee80-b061-4ba2-bce9-d5b62230e2a7" method="POST" encType="multipart/form-data ">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2 ">
          <div className="flex flex-col">
            <label className={`uppercase text-sm py-2 ${darkMode
      ?"text-orange-400"
      :"text-gray-700"
      }` }>  {t("NAME")} </label>
            <input className=" border-2 rounded-lg p-3 flex border-gray-300 " type="text" name="name" />
          </div>
          <div className="flex flex-col" >
            <label className={`uppercase text-sm py-2 ${darkMode
      ?"text-orange-400"
      :"text-gray-700"
      }` }>{t("PHONE")} </label>
            <input className=" border-2 rounded-lg p-3 flex border-gray-300" type="text" name="phone" />
          </div>
          </div>
          <div className={`flex flex-col py-2 ${darkMode
      ?"text-orange-400"
      :"text-gray-700"
      }` }>
            <label className={ `uppercase text-sm py-2  ${darkMode
      ?"text-orange-400"
      :"text-gray-700"
      }` }>Email</label>
            <input className=" border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" />
          </div>
          
          <div className="flex flex-col py-2">
            <label className={ `uppercase text-sm py-2  ${darkMode
      ?"text-orange-400"
      :"text-gray-700"
      }` }>{t("subject")}</label>
            <input className=" border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject" />
          </div>
          <div className="flex flex-col py-2 ">
            <label className={ `uppercase text-sm py-2  ${darkMode
      ?"text-orange-400"
      :"text-gray-700"
      }` }>{t("MESSAGE")}</label>
            <textarea className=" border-2 rounded-lg p-3 border-gray-300" rows="10" name="message"></textarea>
          </div>
          <button className= { `font-bold mt-4 w-full p-4 rounded-lg   ${darkMode
      ?"text-gray-700 bg-orange-300"
      :"text-white bg-gray-500"
      }` }> {t("sMESSAGE")}</button>
        
      </form>
    </div>
  );
}

export default Contact;
