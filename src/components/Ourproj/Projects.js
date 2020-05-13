import React from "react";
import style from "./Projects.module.css";
import { GrCaretNext,GrCaretPrevious } from "react-icons/gr";

const Projects = () => {
  return (
    <div className={style.projectsWrapper}>
      <div className={style.showProject}>
        
        <div className={style.projectsContent}> <h1>Title projekts</h1> </div>
        <div className={style.projectsButtons}>
        <GrCaretPrevious/>
          <GrCaretNext/>
          
        </div>
      </div>
    </div>
  );
};
export default Projects;
