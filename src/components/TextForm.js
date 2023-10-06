import React from "react";

export default function TextForm(props) {
  return (
    <div className="container">
      <h1>{props.Heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="Mybox" rows="8"></textarea>
      </div>
      <button className="btn1 btn-primary">Convert to Uppercase</button>
      <button className="btn btn-primary">Convert to Lowercase</button>
      <button className="btn btn-primary">Convert to AlphaOrder</button>
    </div>
  );
}
