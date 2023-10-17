import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("Uppercas has clicked");
    let NewText = text.toUpperCase();
    setText(NewText);
  };

  const handleLowClick = () => {
    console.log("Lowercase has clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleExtraSpace = () => {
    const trimmedText = text.trim();
    const Ex_test = trimmedText.split(/[ ]+/);
    const modifiedText = Ex_test.join(" ");
    setText(modifiedText);
  };
  const handleClickCopy = () => {
    navigator.clipboard.writeText(`${text}`);
  };

  const handleClickPast = async () => {
    try {
      const clip = await navigator.clipboard.readText();
      setText((prevText) => prevText + clip);
    } catch (error) {
      console.error("Error reading clipboard:", error);
    }
  };
  const ClicktoClear = () => {
    setText("");
  };
  return (
    <div>
      <div
        className="container my-5"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.Heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="Mybox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-success mx-3" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-warning mx-1" onClick={handleClickCopy}>
          Click to Copy
        </button>
        <button className="btn btn-info mx-3" onClick={handleClickPast}>
          click to Past
        </button>
        <button className="btn btn-secondary mx-1" onClick={ClicktoClear}>
          Clear
        </button>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your text summery here...</h1>
        <p>
          {` ${text.trim() ? text.trim().split(/\s+/).length : []} Word and 
          ${text.length} characters`}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter something to preview it here..."}
        </p>
      </div>
    </div>
  );
}
