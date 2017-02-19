var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var {Provider} = require("react-redux");
var TodoApp = require("TodoApp");

var actions = require("actions");
var store = require("configureStore").configure();
var TodoAPI = require("TodoAPI");


// load foundation, with loaders prefix and initialize it on next line
store.subscribe(() => {
  var state = store.getState();

  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

$(document).foundation();
// app.css
require("style!css!sass!applicationStyles");

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById("app")
);
