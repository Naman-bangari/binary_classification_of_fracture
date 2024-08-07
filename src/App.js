import './App.css';

import Navbar from './components2/Navbar';
import Abt from './components2/Abt';
import About from './components/About';
import ImageClassifier from './components3/fracturecheck';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";
let a="enable dark mode";
function App() {
  const[mode,setmode]=useState
  ('white');
  const enabledm=()=>{
    
    if(mode==='white')
     {
       setmode('grey');
       a="enable light mode";
     }
     else{
       setmode('white');
       a="enable dark mode";
     }
   }
  return (
    <>
    <Router>
      <Navbar  a={a}mode={mode} enabledm={enabledm}/>
      
      <Routes>
      <Route path='/'element={<Abt mode={mode}/>}></Route>
      <Route path='/About'element={<About mode={mode}/>}></Route>
      <Route path='/ImageClassifier'element={<ImageClassifier />}></Route>
      </Routes>
    </Router>
   
    </>
  );
}

export default App;
