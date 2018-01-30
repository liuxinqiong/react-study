import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import Hello from "./components/Hello";
import TwoWayBind from "./components/TwoWayBind";
import JsStar from "./components/JsStar";
import MyViewComponent from "./components/MyViewComponent";

ReactDOM.render(
  <App name="SKY">
    <span>hello1</span>
    <span>world1</span>
  </App>,
  document.getElementById("root")
);

ReactDOM.render(<Hello name="SKY" />, document.getElementById("hello"));

ReactDOM.render(<TwoWayBind />, document.getElementById("twoWayBind"));

ReactDOM.render(<JsStar />, document.getElementById("star"));

ReactDOM.render(<MyViewComponent />, document.getElementById("viewport"));

registerServiceWorker();

// if (module.hot) {
//   module.hot.accept();
// }
