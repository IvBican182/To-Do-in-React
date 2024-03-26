import SelectedCSS from "../css/SelectedProject.module.css";


//komponenta za naš odabrani projekt (project page)
export default function SelectedProject ({project, children }) {
    return (
        <div className={SelectedCSS.container}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p>{project.dueDate}</p>
        {children}
        </div>
       
    )

}