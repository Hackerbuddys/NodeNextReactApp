import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TetxtUtils" />
      <TextForm Heading="Enter the text to analyze below:" />
    </>
  );
}

export default App;
