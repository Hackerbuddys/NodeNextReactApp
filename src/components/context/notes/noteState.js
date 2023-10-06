import React from "react";
import noteContext from "./notecontext";

const noteState = () => {
  const state = {
    name: "sandeep",
    class: "10th-A",
  };
  return (
    <noteContext.provoid value={state}>{props.children}</noteContext.provoid>
  );
};

export default noteState;
