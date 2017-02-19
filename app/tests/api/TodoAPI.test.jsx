var expect = require("expect");

var TodoAPI = require("TodoAPI");

describe("TodoAPI", () => {
  beforeEach(() => {
    localStorage.removeItem("todos");
  });

  it("should exist", () => {
    expect(TodoAPI).toExist();
  });

  describe("filterTodos", () => {
    var todos = [
      {
        id: 1,
        text: "some text",
        completed: true
      },
      {
        id: 2,
        text: "some other text",
        completed: false
      },
      {
        id: 3,
        text: "some text",
        completed: true
      }
    ];

    it("should return all items if showCompleted is true", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, "");

      expect(filteredTodos.length).toBe(3);
    });

    it("should return non completed items if showCompleted is false", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, "");

      expect(filteredTodos.length).toBe(1);
    });

    it("should sort by completed status", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, "");

      expect(filteredTodos[0].completed).toBe(false);
    });

    it("should show all todos when searchText is empty", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, "");

      expect(filteredTodos.length).toBe(todos.length);
    });

    it("should filter todos when searchText is entered", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, "Other");

      expect(filteredTodos[0].id).toBe(2);
    });


  });


});
