import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Select from "react-select";
import DataList from "./components/DataList";

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

  // const options = [
  //   { value: "A Crownlands" },
  //   { value: "A_Islands" },
  //   { value: " @_North" },
  //   { value: "123 Reach" },
  //   { value: "C Riverlands" },
  //   { value: "D Vale" },
  //   { value: "E Westerlands" },
  //   { value: "F Stormlands" },
  //   { value: "G Stormlands" },
  //   { value: "H Stormlands" },
  //   { value: "I Stormlands" },
  //   { value: "J Stormlands" },
  //   { value: "K Stormlands" },
  //   { value: "L Stormlands" },
  // ];
  // const [region, setRegion] = useState(options[0]);
  // const onchangeSelect = (item) => {
  //   setRegion(item);
  // };

  return (
    <>
      <Navbar title="TetxtUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm Heading="Enter the text to analyze below:" mode={mode} />
      <DataList />
      {/* <Select
        value={region}
        onChange={onchangeSelect}
        options={options}
        getOptionValue={(option) => option.value}
        getOptionLabel={(option) => option.value}
      /> */}
    </>
  );
}

export default App;
