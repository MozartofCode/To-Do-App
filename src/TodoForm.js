import React, {useState} from "react";
import uuid from "react-uuid"

function TodoForm( {addTodo} ) {

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    })

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo, id: uuid.v4() });
            setTodo( {...todo, task: ""} )
        }
    }


    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    return (

        <form onSubmit = {handleSubmit}>
            <input 
            name = "task"
            type = "text"
            value = {todo.task}
            onChange = {handleTaskInputChange} />


            <button type = "submit">submit</button>
        </form>


    )
}


export default TodoForm;