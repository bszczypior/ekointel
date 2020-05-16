import React from 'react'
import style from './App.module.css'
import Welcome from './components/Welcome/Welcome'
import Header from './components/Header/Header'
import About from './components/About/About'
import Best from './components/Best/Best'
import Content from './components/Content/Content'
import Projects from './components/Ourproj/Projects'
import Contact from './components/Contact/Contact'


const App = () => {
    return(
      <div className={style.App}>
        
         <Welcome/>
         <Content/>
         <Best/>
         <About/>
         <Projects/>
         <Contact/>
        
       
        
       
      
       
       
       
         
      </div>
    )
}
export default App