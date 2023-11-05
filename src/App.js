import React from "react";
import './App.css'
import Resturant from './component/Basics/Resturant'
import {BrowserRouter ,Route} from "react-router-dom"
import Hello from "./Hello";
import Home from "./Home";
const App=()=>{
  return(
    <>
    
      <Resturant/>
      </>
  )
}
export default App;
