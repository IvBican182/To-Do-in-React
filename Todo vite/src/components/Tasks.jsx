import AddNewTask from "./AddNewTask";
import TasksCSS from "../css/Tasks.module.css";

//komponenta u kojoj renderamo taskove te komponentu u kojoj ih dodajemo
export default function Tasks ({ tasks, addTask, deleteTask }) {
    return (
        <section>
            <h2>TASKS</h2>
            <AddNewTask addTask={addTask}/>
           {/*renderamo taskove te gumb za brisanje taskova*/}
            <ul className={TasksCSS.container}>{tasks.map(task => {
                    return (
                    <li className={TasksCSS.task} key={task.id}>
                        <span>{task.taskText}</span>
                        <button onClick={() => deleteTask(task.id)}>delete</button>
                    </li>
                    )
                })}
                
                
            </ul>
        </section>
    )
}