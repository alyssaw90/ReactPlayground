interface Todo {
    name: string;
    description: string;
    complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (name: string, description: string) => void;