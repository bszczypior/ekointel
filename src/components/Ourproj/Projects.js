import React, { useState, useEffect } from "react";
import style from "./Projects.module.css";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import Fade from "react-reveal";

const Projects = () => {
  const [proj, setProj] = useState([
    { id: "1", title: "Projekt 1", content: "Projekt1 content", visible: true },
    {
      id: "2",
      title: "Projekt 2",
      content: "Projekt3 content",
      visible: false,
    },
    {
      id: "3",
      title: "Projekt 3",
      content: "Projekt3 content",
      visible: false,
    },
    {
      id: "4",
      title: "Projekt 4",
      content: "Projekt4 content",
      visible: false,
    },
    {
      id: "5",
      title: "Projekt 5",
      content: "Projekt5 content",
      visible: false,
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

  useEffect(()=>{
    projNum===proj.length-1 && setVisibleNext(false)
    projNum<proj.length-1 && setVisibleNext(true)
    projNum===0 && setVisiblePrev(false)
    projNum>0 && setVisiblePrev(true)
  })

  return (
    <div className={style.projectsWrapper}>
      <div className={style.showProject}>
        <div className={style.projectsContent}>
          <h1>{proj[projNum].title}</h1>
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
    </div>
  );
};
export default Projects;
