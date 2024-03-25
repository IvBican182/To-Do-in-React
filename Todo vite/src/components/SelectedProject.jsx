//komponenta za naš odabrani projekt (project page)
export default function SelectedProject ({deleteProject, project }) {
    return (
        <>
        <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>{project.dueDate}</p>
        </div>
        <p>
            <button onClick={deleteProject}>Delete</button>
        </p>
        </>
    )

}