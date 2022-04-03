import React, { useState } from 'react';
import './App.css';
import { TodoList } from './ToDoList/ToDoList';
import { AddToDoForm } from './ToDoList/AddToDoForm';

const initialTodos: Todo[] = [
  {
    text: 'Walk Eleanor',
    complete: false,
  },
  {
    text: 'Crochet blanket',
    complete: true,
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    })
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = {text, complete: false};
    setTodos([...todos, newTodo]);
  }

  return(
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <AddToDoForm addTodo={addTodo}/>
    </>
  ) 
}

export default App;
