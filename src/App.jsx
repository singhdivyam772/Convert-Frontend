import { useState } from "react";
import "./App.css";
import { Button } from "antd";
import Landing from "./Pages/Landing";
import Header from "./Common/Header";
function App() {
  return (
    <>
      <div className=" relative">
        <Header/>
       <Landing/>
      </div>
    </>
  );
}

export default App;
