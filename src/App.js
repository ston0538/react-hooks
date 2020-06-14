import React, { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1,
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((todo, index) =>
          index === action.index
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        todoCount: state.todoCount,
      };
    default:
      return state;
  }
}

const App = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  });
  const [text, setText] = useState();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add-todo", text });
          setText("");
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
      </form>
      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
      <h3>Count: {todoCount}</h3>
      {todos.map((todo, index) => (
        <div
          key={index}
          onClick={() => dispatch({ type: "toggle-todo", index })}
          style={{
            textDecoration: todo.completed ? "line-through" : "",
          }}
        >
          {todo.text}
        </div>
      ))}
    </div>
  );
};

export default App;
