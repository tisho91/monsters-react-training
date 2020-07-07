import React from "react";

export const SearchBox = ({changeHandler}) => {
    return (
        <div>
            <input onChange={changeHandler} type="text"/>
        </div>
    )
    
}
