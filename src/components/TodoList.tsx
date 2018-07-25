import * as React from "react";
import {Todo} from "./Todo";

export interface Todo {
    id: string,
    text: string
}

interface TodoListProps {
    todos: Todo[],
    toggleTodo: (...args: any[]) => any
}

export const TodoList: React.SFC<TodoListProps> = ({todos, toggleTodo}) => (
    <ul>
        {todos.map(todo => (
            <Todo onClick={() => toggleTodo(todo.id)} completed={false} text={todo.id}/>
        ))}
    </ul>
);