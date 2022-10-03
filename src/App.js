import { useRef } from "react";
import "./App.css";
import { actions, useStore } from "./store";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  const inputRef = useRef();

  console.log("todoInput: ", todoInput);

  const handleSubmit = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(""));

    inputRef.current.focus();
  };

  console.log(todos);

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
