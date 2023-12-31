import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import Alert from "./Component/Alert";
import About from "./Component/About";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }

    setInterval(() => {
      document.title = "Welcome to Texter Editor";
    }, 1500);

    setInterval(() => {
      document.title = "Texter - Home";
    }, 2000);
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };

  return (
    <>
      <Router>
      <Navbar navHead="Texter" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <Routes>
      <Route exact path="/" element={
      <TextForm textarea="Enter your text here" mode={mode} alertIntoTextArea={showAlert} />
      }/> 
          <Route exact path="/about" element={<About mode={mode} />}/>
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
