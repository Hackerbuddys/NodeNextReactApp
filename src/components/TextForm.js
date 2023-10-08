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
    console.log("onchange");
    setText(event.target.value);
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
    </div>
  );
}
