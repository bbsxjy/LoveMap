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

export function TodoList({todos, toggleTodo}: any) {
    return (
        <ul>
            {todos.map((todo: Todo) => (
                <Todo onClick={() => toggleTodo(todo.id)} completed={false} text={todo.id}/>
            ))}
        </ul>
    );
}