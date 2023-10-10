import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here...");

  const handleUpClick = () => {
    console.log("Uppercas has clicked");
    let NewText = text.toUpperCase();
    setText(NewText);
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
  const handleClearText = () => {
    setText("");
  };

  const handleClickPast = async () => {
    try {
      const clip = await navigator.clipboard.readText();
      setText((prevText) => prevText + clip);
    } catch (error) {
      console.error("Error reading clipboard:", error);
    }
  };
  return (
    <div className="container">
      <h1>{props.Heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="Mybox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
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
      <button className="btn btn-danger mx-2" onClick={handleClearText}>
        Clear Text
      </button>
    </div>
  );
}
