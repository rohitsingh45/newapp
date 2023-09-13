import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';


function App() {

  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "grey"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <>
      <Navbar navHead='TextUtils' mode = {mode} toggleMode = {toggleMode} />
      <TextForm textarea = 'Enter your text here' mode = {mode} />

    </>
  );
}

export default App;
