import { useState, useRef } from "react";
import Modal from "./Modal";

export default function AddNewTask ({ addTask }) {
    //enteredTasks je state/unos korisnika u Input
    // taj ćemo unos iskoristiti u funkciji za dodavanje taska iz App komponente
    const [enteredTasks, setEnteredTasks] = useState("");

    const modal = useRef();

    function handleChange (event) {
        setEnteredTasks(
        event.target.value)

    }

    function handleClick () {
        //ukoliko je unos prazan otvaramo Modal komponentu
        if (enteredTasks === "") {
            modal.current.open();
        } else {
            //ukoliko je uspješan pokrećemo funkciju za dodavanje gdje je unesena vrijednost argument
            addTask(enteredTasks)
            //brišemo korisnikov unos iz textboxa
            setEnteredTasks("");
        }
        
    }

    
    return (
        <>
        <Modal ref={modal}>
            <p>OOPS... something went wrong</p>
            <p>please enter a value !</p>
        </Modal>
        <div>
            <input type="text" required value ={enteredTasks} onChange={(e) => handleChange(e)}/>
            <button onClick = {handleClick}>Add Task</button>
        </div>
        </>
    ) 
}