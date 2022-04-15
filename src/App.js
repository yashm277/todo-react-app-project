import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Input, FormControl, FormHelperText } from "@mui/material";
import { InputLabel } from "@mui/material";

function App() {
  const [todos, setTodos] = useState(["testing 1", "testing 2"]);
  const [input, setInput] = useState("");

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
            Click "add todo" button !
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
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
