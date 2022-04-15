import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Input, FormControl, FormHelperText } from "@mui/material";
import { InputLabel } from "@mui/material";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    //this fires everytime the app.js reloads
  })

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>✅ TODO LIST ✅</h1>
      <form>
        {/* <input value={input} onChange={(e) => setInput(e.target.value)} /> */}
        <FormControl>
          <InputLabel> ✅ Write a TODO</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <FormHelperText>
          🚀 Click "ADD TODO" button ! 🚀
          </FormHelperText>
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="success"
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
