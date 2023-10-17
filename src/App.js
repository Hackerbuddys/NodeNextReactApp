import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "grey";
      setInterval(() => {
        document.title = "Textutils is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install Textutils Now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.background = "white";
      document.title = "Textutils - LightMode";
    }
  };

  return (
    <>
      <Navbar title="TetxtUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm Heading="Enter the text to analyze below:" mode={mode} />
    </>
  );
}

export default App;
