import React from "react";


function Todo({ todo, completeTodo, removeTodo }) {

    function handleCheckboxClick() {
        completeTodo(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id)
    }

    return(
        <div style={{display: "flex"}}>
        <input type="checkbox" onClick={handleCheckboxClick}/>
        <li
            style = {{color: "black", textDecoration: todo.completed ? "line-through" : null}}
        >{todo.task}</li>
        <button onClick={handleRemoveClick}>X</button>
        </div>
    )
}

export default Todo;