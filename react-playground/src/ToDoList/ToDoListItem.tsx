import React from 'react';

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const ToDoListItem: React.FC<Props> = ({todo, toggleTodo}) => {
    return (
        <li>
            <label style={{textDecoration: todo.complete ? 'line-through' : undefined}}>
                <input 
                    type="checkbox" 
                    checked={todo.complete}
                    onClick={() => {
                        toggleTodo(todo);
                    }}
                /> {' '}
                {todo.name} - {todo.description}
            </label>
        </li>
    )
}