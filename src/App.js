import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const removeBodyClass = () => {
    document.body.classList.remove(`bg-light`);
    document.body.classList.remove(`bg-dark`);
    document.body.classList.remove(`bg-warning`);
    document.body.classList.remove(`bg-danger`);
    document.body.classList.remove(`bg-success`);
  };

  const toggleMode = (cls) => {
    removeBodyClass();

    let bgColorClass = "";

    if (typeof cls === "string") {
      bgColorClass = cls;
    } else if (typeof cls === "object" && cls !== null) {
      bgColorClass = cls.color || "";
    }

    if (bgColorClass) {
      document.body.classList.add("bg-" + bgColorClass);
    }

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
