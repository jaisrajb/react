import React from "react";

function TodoButton({id, setEntryList}) {
    return (
        <button 
            onClick = {
                (id, setEntryList) => {
                    return setEntryList(entryList => entryList.filter(el => el.id !== id));
                }
            }
        >Delete</button>
    )
}

export default TodoButton;