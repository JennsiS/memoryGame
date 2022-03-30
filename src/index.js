import React from "react";
import ReactDOM from "react-dom";
import StartApp from "./components/startApp";
import background from "./backgroundMario.jpg";

//let div = document.getElementById("app");
document.body.style.background =  `url(${background})`;
document.body.style.backgroundSize = '80% 80%';

ReactDOM.render(
    <StartApp />, document.getElementById("app")
);
