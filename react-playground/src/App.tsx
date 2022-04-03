import React, { useState } from 'react';
import './App.css';
import { TodoList } from './ToDoList/ToDoList';
import { AddToDoForm } from './ToDoList/AddToDoForm';
import { News } from './News/News';
import Box from '@mui/material/Box';

const initialTodos: Todo[] = [
  {
    name: 'Walk Dog',
    description: 'Take Eleanor on a walk',
    complete: false,
  },
  {
    name: 'Crochet blanket',
    description: 'Finish baby blanket',
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

  const addTodo: AddTodo = (name: string, description: string) => {
    const newTodo = {name, description, complete: false};
    setTodos([...todos, newTodo]);
  }

  return(
    <>
      <Box sx={{
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        <AddToDoForm addTodo={addTodo}/>
      </Box>
      <Box sx={{
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <News/>
      </Box>
    </>
  ) 
}

export default App;
