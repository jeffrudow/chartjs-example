import React from "react";
import { render } from "react-dom";
import LineDemo from "./LineDemo";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  outerWidth: "200px"
};

const App = () => (
  <div style={styles}>
    <LineDemo />
  </div>
);

render(<App />, document.getElementById("root"));
