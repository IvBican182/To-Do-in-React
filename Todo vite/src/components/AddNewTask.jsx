import { useState, useRef } from "react";

export default function AddNewTask ({ addTask }) {
    const [enteredTasks, setEnteredTasks] = useState("");

    function handleChange (event) {
        setEnteredTasks(
        event.target.value)

    }

    function handleClick () {
        addTask(enteredTasks)
        setEnteredTasks("");
    }

    
    return (
        <>
        <div>
            <input type="text" value ={enteredTasks} onChange={(e) => handleChange(e)}/>
            <button onClick = {handleClick}>Add Task</button>
        </div>
        </>
    ) 
}