import React from 'react';
import { ToDoListItem } from './ToDoListItem';

interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
    return (
        <>
            <h1>To Do</h1>
            <ul>
                {todos.map((todo) => (
                    <ToDoListItem 
                    key={todo.name}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    />
                    ))}
            </ul>
        </>
    )
}