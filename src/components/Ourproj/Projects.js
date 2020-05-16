import React, { useState, useEffect } from "react";
import style from "./Projects.module.css";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import Fade from "react-reveal";
import logo from "./logo3.png"
import home from "./home2.jpg"
import home2 from "./home3.jpg"
import home3 from "./home4.jpg"


const Projects = () => {
  const [proj, setProj] = useState([
   
    {
      id: "1",
      title: "Projekt 1",
      content: "Projekt1 content",
      visible: false,
      bg:home
    },
    {
      id: "2",
      title: "Projekt 2",
      content: "Projekt2 content",
      visible: false,
      bg:home2
    },
    {
      id: "3",
      title: "Projekt 3",
      content: "Projekt3 content",
      visible: false,
      bg:home3
    },
   
  ]);
  const [projNum, setProjNum] = useState(0);

  const [visibleNext, setVisibleNext] = useState(true);
  const [visiblePrev, setVisiblePrev] = useState(true);

  const prevProj = () => {
    projNum > 0 ? setProjNum(projNum - 1) : setProjNum(0);
  };

  const nextProj = () => {
    projNum + 1 < proj.length
      ? setProjNum(projNum + 1)
      : setProjNum(proj.length - 1);
  };

  useEffect(() => {
    projNum === proj.length - 1 && setVisibleNext(false);
    projNum < proj.length - 1 && setVisibleNext(true);
    projNum === 0 && setVisiblePrev(false);
    projNum > 0 && setVisiblePrev(true);
  });

  return (
    <div className={style.projectsWrapper}>
      <Fade>
        <h1>Nasze realizacje</h1>
        <div className={style.showProject}>
          <div className={style.projectsContent}>           
            <h1>{proj[projNum].title}</h1>
            {/* <img src={proj[projNum].bg}  alt="logo" style={{width:"80vw",height:"90vh"}}></img> */}
            <div style={{width:"80vw",height:"90vh",backgroundImage:`url(${proj[projNum].bg})`,backgroundSize:"cover" , backgroundPosition:"center"}}>

            </div>
           
          </div>
          <div className={style.projectsButtons}>
            <GrCaretPrevious
              onClick={prevProj}
              className={
                visiblePrev ? style.projectsButtonssvg : style.arrowInvisible
              }
            />
            <div></div>
            <GrCaretNext
              onClick={nextProj}
              className={
                visibleNext ? style.projectsButtonssvg : style.arrowInvisible
              }

            />
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default Projects;
