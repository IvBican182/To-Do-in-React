//komponenta za naš odabrani projekt (project page)
export default function SelectedProject ({ project }) {
    return (
        <div>
            <h2>blablabla</h2>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>{project.dueDate}</p>
        </div>
    )

}