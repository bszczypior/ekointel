import React from 'react'
import style from './App.module.css'
import Welcome from './components/Welcome/Welcome'
import Header from './components/Header/Header'
import About from './components/About/About'
import Best from './components/Best/Best'
import Content from './components/Content/Content'
import Projects from './components/Ourproj/Projects'

const App = () => {
    return(
      <div className={style.App}>
        
         <Welcome/>
         <Content/>
         <Best/>
         <About/>
         <Projects/>
        
       
        
       
      
       
       
       
         
      </div>
    )
}
export default App