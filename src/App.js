import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <>
      <Navbar title="TetxtUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm Heading="Enter the text to analyze below:" />
    </>
  );
}

export default App;
