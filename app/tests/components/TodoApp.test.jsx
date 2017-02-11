var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var TodoApp = require("TodoApp");

describe("TodoApp", () => {

  it("should exist", () => {
    expect(TodoApp).toExist();
  });

  it("should add todo to the todos state on handleAddTodo", () => {
    var todoText = "test text";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe(todoText);

    expect(typeof todoApp.state.todos[0].createdAt).toBe("number");
  });

  it("should toggle completed value when handleToggle called and completedAt should be number", () => {
    var todoData = {
      id: 11,
      text: "testing testing",
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(todoApp.state.todos[0].id);
    expect(todoApp.state.todos[0].completed).toBe(true);

    expect(typeof todoApp.state.todos[0].completedAt).toBe("number");
  });

  it("should toggle completed value when handleToggle called and completedAt should be undefined", () => {
    var todoData = {
      id: 11,
      text: "testing testing",
      completed: true,
      createdAt: 0,
      completedAt: 60
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(todoApp.state.todos[0].id);
    expect(todoApp.state.todos[0].completed).toBe(false);

    expect(typeof todoApp.state.todos[0].completedAt).toBe("undefined");
  });

});
