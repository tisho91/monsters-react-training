import React from "react";

export const Card = props => {
    const monster = props.children
    return (
        <div>
            <span>{monster.name}</span>
        </div>
    )
}

