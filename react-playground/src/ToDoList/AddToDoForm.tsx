import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

interface Props {
    addTodo: AddTodo;
}

export const AddToDoForm: React.FC<Props> = ({addTodo}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    return (
        <Box
            component='form'
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete='off'
        >
            <TextField 
                variant='outlined'
                label='Name'
                placeholder='Name'
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }} 
            />
            <TextField
                variant='outlined'
                label='Description'
                placeholder='Description'
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />
            <Button
                variant='contained' 
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    addTodo(name, description);
                    setName('');
                    setDescription('');
                }}
            >
                Add
            </Button>
        </Box>
    )
}