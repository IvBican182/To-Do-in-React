import ProjectSidebarCSS from "./ProjectSidebar.module.css";

export default function ProjectSidebar () {
    return (
        <aside className={ProjectSidebarCSS.sidebar}>
            <h2>Projects</h2>
            <div>
                <button className={ProjectSidebarCSS.addBtn}>Add project</button>
            </div>
            <ul className={ProjectSidebarCSS.projectsList}>
                projects list
            </ul>
        </aside>
    )
}