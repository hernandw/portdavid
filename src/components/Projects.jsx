import  { useContext } from "react";
import ProjectItem from "./ProjectItem";
import mainphoto from "../image/mainphoto.avif";
import cdBakery from "../image/cd-Bakery.png"
import ratAttack from "../image/Rat Attack.png"
import travel from "../image/Travel.png"
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ThemeContext";

////All information are in Translation JSon


function Projects() {
  const { t } = useTranslation();
  const {darkMode}= useContext (ThemeContext)
  const projects = darkMode
  ? ' text-orange-400'
  : ' text-gray-700';
  const details = darkMode 
  ? ' text-orange-300'
  : ' text-gray-700';
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className={  `text-4xl font-bold text-center ${projects} ` }>
        {t("Projects")}
      </h1>
      <p className={ `text-center py-8 ${details} ` }>
        {" "}
        {t("ProjectDetails")} {" "}
      </p>
      <div className="grid sm:grid-cols-2 gap-12 ">
       <a href="https://warriors-cd-bakery.adaptable.app/"> <ProjectItem img={cdBakery} title="Cd Bakery" Description="Javascript - Handlebars - Mongodb - Express - Bootstrap - Node.js"  /></a>
       <a href="https://davidramires911.github.io/Project-1/index.html"> <ProjectItem img={ratAttack} title="Rat Attack" Description="Javascript - Css"/></a>
       <a href="https://project-travels.netlify.app/"> <ProjectItem img={travel} title="Travel" Description="React - Mongodb - Express - Bootstrap - Node.js - Postman" /></a>
       <a href=""> <ProjectItem img={mainphoto}  title="Work in progress"/></a>
      </div>
    </div>
  );
}

export default Projects;
