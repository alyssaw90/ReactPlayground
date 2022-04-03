import React, { useState } from 'react';

interface Props {
    addTodo: AddTodo;
}

export const AddToDoForm: React.FC<Props> = ({addTodo}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    return (
        <form>
            <input 
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }} 
            />
            <input
                type='text'
                placeholder='Description'
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />
            <button 
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    addTodo(name, description);
                    setName('');
                    setDescription('');
                }}
            >
                Add
            </button>
        </form>
    )
}