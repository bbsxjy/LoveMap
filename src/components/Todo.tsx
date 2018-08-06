import * as React from "react";

export interface TodoActionProps {
    onClick: (...args: any[]) => any,
    completed: boolean,
    text: string
}

export const Todo: React.SFC<TodoActionProps> = ({onClick, completed, text}) => (
    <li onClick={onClick}
        style={{
            textDecoration: completed ? "line-through" : "none"
        }}>
        {text}
    </li>
);
