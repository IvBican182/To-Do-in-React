import ProjectSidebarCSS from "./ProjectSidebar.module.css";

//u sidebaru prikazujemo gumb za dodavanje projekata te izlistane kreirane projekte
export default function ProjectSidebar ({ openProjectForm, projects, selectProject }) {
    return (
        <aside className={ProjectSidebarCSS.sidebar}>
            <div className={ProjectSidebarCSS.content}>
            <h2>Your projects</h2>
            <div>
                <button className={ProjectSidebarCSS.button1} onClick={openProjectForm}>Add project</button>
            </div>
            <ul className={ProjectSidebarCSS.projectsList}>
                {/*za svaki projekt u arrayu projekata ćemo prikazati njegov title kao button u list elementu*/} 
                {projects.map((project) => {
                    return (
                        <li className ={ProjectSidebarCSS.li} key={project.id}>
                            <button className={ProjectSidebarCSS.projectTitle} onClick={() => selectProject(project.id)}>{project.title}</button>
                        </li>
                    )
                    
                })} 
            </ul>
            </div>
        </aside>
    )
}