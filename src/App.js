import React, {useState, useEffect} from 'react'
//import my components
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-List-todos";


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storageTodos){
      setTodos(storageTodos);
    }
  }, [])

 useEffect(() => {
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
   }, [todos])
 

  function addTodo(todo) {
    setTodos([todo, ...todos])
  }
  
  function completeTodo(id){
    setTodos(  
       todos.map(todo => {
         if (todo.id === id) {
           return {
             ...todo,
             completed: !todo.completed
           };
         }
         return todo
       })
      )
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return ( 
    <>
    <h1>
       MY todo list again
    </h1>
    
    <TodoForm addTodo={addTodo}/>
    <TodoList todos={todos} completeTodo={completeTodo}
    removeTodo = {removeTodo}/>
    </>



  );
}

export default App;
