
import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App=()=>{
  const[backgroundColor,setBackgroundColor] = useState("white")
  const[color,setColor] = useState("black")
  const[theme,setTheme] = useState("light")
  const[progress,setProgress] = useState(0)

 const toggle = ()=>{
    if(color==="black")
    {
      setBackgroundColor("#091018")
      setColor("white")
      setTheme("dark")
    document.body.style.backgroundColor="#091018";
    }else{
      setBackgroundColor("white")
      setColor("black")
      setTheme("light")
     
      document.body.style.backgroundColor="white";
    }
  }
 
  
    return (
      <div>
        <Router>
          <div className='container navContainer'>
        <NavBar mode={{backgroundColor:backgroundColor,theme:theme,color:color,progress:progress}} toggle={toggle}/>
        </div>
        <LoadingBar
        color='#f11946'
        height={4}
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress = {setProgress} key="general" mode={{backgroundColor:backgroundColor,theme:theme,color:color,progress:progress}} pageSize={6} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News setProgress = {setProgress} key="business" mode={{backgroundColor:backgroundColor,theme:theme,color:color,progress:progress}} pageSize={6} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress = {setProgress} key="entertainment" mode={{backgroundColor:backgroundColor,theme:theme,color:color,progress:progress}} pageSize={6} country="in" category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News setProgress = {setProgress} key="health" mode={{backgroundColor:backgroundColor,theme:theme,color:color,progress:progress}} pageSize={6} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={<News setProgress = {setProgress} key="science" mode={{backgroundColor:backgroundColor,theme:theme,color:color,progress:progress}} pageSize={6} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<News setProgress = {setProgress} key="sports"mode={{backgroundColor:backgroundColor,theme:theme,color:color,progress:progress}} pageSize={6} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setProgress = {setProgress} key="technology" mode={{backgroundColor:backgroundColor,theme:theme,color:color,progress:progress}} pageSize={6} country="in" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    
    )
  }
  export default App
