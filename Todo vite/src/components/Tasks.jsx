import AddNewTask from "./AddNewTask";

export default function Tasks ({ tasks, addTask, deleteTask }) {
    return (
        <section>
            <h2>TASKS</h2>
            <AddNewTask addTask={addTask}/>
           
            <ul> 
                {tasks.map(task => {
                    return (
                        <li key={task.id}>
                        <span>{task.taskText}</span>
                        <button onClick={() => deleteTask(task.id)}>delete</button>
                    </li>
                    )
                })}
            </ul>
        </section>
    )
}