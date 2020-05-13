import React from "react";
import style from "./About.module.css";
import { FaSnowflake } from "react-icons/fa";
import {GiHotSurface , GiComputerFan } from "react-icons/gi";
import { RiHome7Line } from "react-icons/ri";
import Fade from 'react-reveal'
const About = () => {
  return (
    <div className={style.aboutWrapper}>
<Fade>
<div className={style.aboutSingle}>
        <div className={style.aboutTitle}>
          <div className={style.aboutIcon}>
            <FaSnowflake />
          </div>
          <h1>Klimatyzacje</h1>
        </div>
        <div className={style.aboutContent}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et quam consectetur, vestibulum urna eget, consectetur neque. Nulla condimentum sit amet augue vel interdum. Donec ornare aliquam odio maximus pretium. In in varius tellus.<span> Proin elementum tempus tellus at lobortis. Cras vitae scelerisque magna. Phasellus et metus tortor. Donec et mauris vel odio laoreet venenatis. Suspendisse lacinia vehicula aliquet. Fusce finibus ornare est sed consequat. Aliquam volutpat metus eget tellus tincidunt, faucibus feugiat ipsum dapibus. Nulla facilisi.</span></p>
        </div>
      </div>

      

      <div className={style.aboutSingle}>
        <div className={style.aboutTitle}>
          <div className={style.aboutIcon}>
            <GiHotSurface />
          </div>
          <h1>Ogrzewanie podłogowe</h1>
        </div>
        <div className={style.aboutContent}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et quam consectetur, vestibulum urna eget, consectetur neque. Nulla condimentum sit amet augue vel interdum. Donec ornare aliquam odio maximus pretium. In in varius tellus.<span> Proin elementum tempus tellus at lobortis. Cras vitae scelerisque magna. Phasellus et metus tortor. Donec et mauris vel odio laoreet venenatis. Suspendisse lacinia vehicula aliquet. Fusce finibus ornare est sed consequat. Aliquam volutpat metus eget tellus tincidunt, faucibus feugiat ipsum dapibus. Nulla facilisi.</span></p>
        </div>
      </div>
      </Fade>
      <Fade>
      <div className={style.aboutSingle}>
        <div className={style.aboutTitle}>
          <div className={style.aboutIcon}>
            <RiHome7Line />
          </div>
          <h1>Pompy ciepła</h1>
        </div>
        <div className={style.aboutContent}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et quam consectetur, vestibulum urna eget, consectetur neque. Nulla condimentum sit amet augue vel interdum. Donec ornare aliquam odio maximus pretium. In in varius tellus.<span> Proin elementum tempus tellus at lobortis. Cras vitae scelerisque magna. Phasellus et metus tortor. Donec et mauris vel odio laoreet venenatis. Suspendisse lacinia vehicula aliquet. Fusce finibus ornare est sed consequat. Aliquam volutpat metus eget tellus tincidunt, faucibus feugiat ipsum dapibus. Nulla facilisi.</span></p>
        </div>
      </div>

      <div className={style.aboutSingle}>
        <div className={style.aboutTitle}>
          <div className={style.aboutIcon}>
            <GiComputerFan />
          </div>
          <h1>Rekuperacje</h1>
        </div>
        <div className={style.aboutContent}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et quam consectetur, vestibulum urna eget, consectetur neque. Nulla condimentum sit amet augue vel interdum. Donec ornare aliquam odio maximus pretium. In in varius tellus.<span> Proin elementum tempus tellus at lobortis. Cras vitae scelerisque magna. Phasellus et metus tortor. Donec et mauris vel odio laoreet venenatis. Suspendisse lacinia vehicula aliquet. Fusce finibus ornare est sed consequat. Aliquam volutpat metus eget tellus tincidunt, faucibus feugiat ipsum dapibus. Nulla facilisi.</span></p>
        </div>
      </div>
      </Fade>

    </div>
  );
};
export default About;
