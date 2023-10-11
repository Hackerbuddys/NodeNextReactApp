import "./App.css";
import { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import TextForm2 from "./components/TextForm2";

function App() {
  // const [sharedText, setSharedText] = useState("");
  // const updateSharedText = (text) => {
  //   setSharedText(text);
  // };
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const [col, setCol] = useState("dark");
  const ColChange = () => {
    if (col === "light") {
      setCol("dark");
    } else {
      setCol("light");
    }
  };

  return (
    <>
      <Navbar title="TetxtUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm
        Heading="Enter the text to analyze below:"
        col={col}
        ColChange={ColChange}
      />
      {/* <About /> */}
      {/* <TextForm Heading="TextForm" sharedText={sharedText} /> */}
      {/* <TextForm2 onConvert={updateSharedText} /> */}
    </>
  );
}

export default App;
