import React from 'react'
import style from './Best.module.css'
import { FaRegEdit,FaMoneyBillWaveAlt,FaTools } from "react-icons/fa";
import Fade from 'react-reveal'

const Best = () =>{
    return(
        
        <div className={style.bestWrapper}>
         
            <ul className={style.bestList}>
            <Fade>
                <li className={style.bestListEl}>
               <FaRegEdit></FaRegEdit>
                <h2>Kompleksowe doradztwo</h2>
                <p>Hqjbcejbc iebqiedn ibqeduqeqycb iwecbqecbec bwuecgwhcebw uhjbcwdcb wucbuhbewch</p>
                </li>
                </Fade>
                <Fade>
                <li className={style.bestListEl}>
                <FaMoneyBillWaveAlt></FaMoneyBillWaveAlt>
                <h2>Konkurencyjne ceny</h2>
                <p>Hqjbcejbc iebqiedn ibqeduqeqycb iwecbqecbec bwuecgwhcebw uhjbcwdcb wucbuhbewch</p>
                </li>
                </Fade>
                <Fade>
                <li className={style.bestListEl}>
                <FaTools/>
                <h2>Fachowy montaż instalacjii</h2>
                <p>Hqjbcejbc iebqiedn ibqeduqeqycb iwecbqecbec bwuecgwhcebw uhjbcwdcb wucbuhbewch</p>
                </li>
                </Fade>
            </ul>
           
               
        </div>
    )
}
export default Best