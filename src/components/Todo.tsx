import * as React from "react";

export interface TodoProps {
    onClick: (...args: any[]) => any,
    completed: boolean,
    text: string
}

export const Todo: React.SFC<TodoProps> = ({onClick, completed, text}) => (
    <li onClick={onClick}
        style={{
            textDecoration: completed ? "line-through" : "none"
        }}>
        {text}
    </li>
);
