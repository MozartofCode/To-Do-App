import React, {useState, useEffect} from "react";
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

const LOCAL_STORAGE_KEY = "react-todo-list-todos"


function App() {
  
    const [todos, setTodos] = useState([])


  
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, [])
  

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))

  }, [todos])



  function addTodo(todo) {
    setTodos([todo, ...todos])
  }
    
  function toggleComplete (id) {
    setTodos(todos.map(todo => {
      if (todo.id == id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
    }))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }


  return (

    <header>    <TodoForm addTodo = {addTodo} />

    <TodoList todos = {todos} toggleComplete = {toggleComplete} removeTodo = {removeTodo} />
    
    </header>

  )  
}

export default App;
