import ProjectSidebarCSS from "./ProjectSidebar.module.css";

//u sidebaru prikazujemo gumb za dodavanje projekata te izlistane kreirane projekte
export default function ProjectSidebar ({ openProjectForm, projects, selectProject }) {
    return (
        <aside className={ProjectSidebarCSS.sidebar}>
            <h2>Your projects</h2>
            <div>
                <button onClick={openProjectForm} className={ProjectSidebarCSS.addBtn}>Add project</button>
            </div>
            <ul className={ProjectSidebarCSS.projectsList}>
                {/*za svaki projekt u arrayu projekata ćemo prikazati njegov title kao button u list elementu*/} 
                {projects.map((project) => {
                    return (
                        <li key={project.id}>
                            <button onClick={() => selectProject(project.id)}>{project.title}</button>
                        </li>
                    )
                    
                })} 
            </ul>
        </aside>
    )
}