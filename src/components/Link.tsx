import * as React from "react";

interface LinkProps {
    active: boolean;
    onClick: (...args: any[]) => any;
}

export const Link: React.SFC<LinkProps> = ({active, children, onClick}) => (
    <button onClick={onClick}
            disabled={active}
            style={{marginLeft: "4px"}}>
        {children}
    </button>
);
