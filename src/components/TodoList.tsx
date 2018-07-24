import * as React from "react";
import {Todo} from "./Todo";

interface TodoListProps {
  todos: string[],
  toggleTodo: (...args: any[]) => any
}

export const TodoList: React.SFC<TodoListProps> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);