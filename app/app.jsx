var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var {Provider} = require("react-redux");
var TodoApp = require("TodoApp");

var actions = require("actions");
var store = require("configureStore").configure();

store.subscribe(() => {
  console.log("New state: ", store.getState());
});

store.dispatch(actions.addTodo("Walk the dog!"));
store.dispatch(actions.setSearchText("walk"));
store.dispatch(actions.toggleShowCompleted());
// load foundation, with loaders prefix and initialize it on next line

$(document).foundation();
// app.css
require("style!css!sass!applicationStyles");

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById("app")
);
