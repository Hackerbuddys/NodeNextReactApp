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

  return (
    <>
      <Navbar title="TetxtUtils" />
      <TextForm Heading="Enter the text to analyze below:" />
      {/* <About /> */}
      {/* <TextForm Heading="TextForm" sharedText={sharedText} /> */}
      {/* <TextForm2 onConvert={updateSharedText} /> */}
    </>
  );
}

export default App;
