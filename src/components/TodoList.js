import React from "react";
import Todo from "./Todo";

function TodoList({ todos, completeTodo, removeTodo }) {
    return(
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>
            ))}
        </ul>
    )
}

export default TodoList;