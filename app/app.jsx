var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");


// load foundation, with loaders prefix and initialize it on next line

$(document).foundation();
// app.css
require("style!css!sass!applicationStyles");

ReactDOM.render(
  <p>Boilerplate!</p>,
  document.getElementById("app")
);
