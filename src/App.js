import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import Mypage from "./Mypage";
import './App.css';


function App() {
  return(
    
        
         <>
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/mypage" element={<Mypage />}></Route>
          </Routes>
          </>
     
  )
}

export default App;
