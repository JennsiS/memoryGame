import React from "react";
import ReactDOM from "react-dom";
import StartApp from "./components/startApp";
import background from "./backgroundMario.jpg";
//import 'bootstrap/dist/css/bootstrap.min.css';

document.body.style.background =  `url(${background})`;
document.body.style.backgroundSize = '130% 100%';

ReactDOM.render(
    <StartApp />, document.getElementById("app")
);
