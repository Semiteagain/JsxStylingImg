import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading">My Fovorite Food</h1>
    <img alt="" src={img} />
  </div>,
  document.getElementById("root")
);
