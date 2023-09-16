import React from "react";
import ReactDom from "react-dom/client";

/**
 *
 * <div id="parent">
 *  <div id="child">
 *      <h1>I'm an h1 tag</h1>
 *      <h2>I'm an h1 tag</h2>
 *  </div>
 *  <div id="child2">
 *      <h1>I'm an h1 tag</h1>
 *      <h2>I'm an h1 tag</h2>
 *  </div>
 * </div>
 *
 * ReactElement(Object) ==> HTML(Browser Understands)
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React"),
    React.createElement("h2", {}, "by Ankita Jain"), //for sibling create array of children
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"), //for sibling create array of children
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(parent); //object

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(parent);
