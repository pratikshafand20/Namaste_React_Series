import React from "react";
import ReactDOM from "react-dom/client";

// simple react program
const heading = React.createElement("h1", {}, "Hello World from React ");
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//React Nested elements
const heading2 = React.createElement("Div", { id: "parent" }, [
  React.createElement("h1", {}, "I am H1 "),
  React.createElement("h1", {}, "I am H2"),
]);

console.log(heading2); //object
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(heading2);
