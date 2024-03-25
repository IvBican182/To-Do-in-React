import NoProjectCss from "./NoProjectSelected.module.css";
import Logo from "../assets/no-project.png";


//početna stranica koja će se prikazivati ukoliko trenutno ne dodajemo projekt te ukoliko nismo odabrali već kreirani projekt
export default function NoProjectSelected ({ openProjectForm }) {
    return (
        <div className={NoProjectCss.container} alt="empty task">
            <img src={Logo}/>
            <h2>Select a project or create a new one !</h2>
            <p>
              <button className={NoProjectCss.button1} onClick ={openProjectForm}>create a project</button>
            </p>
        </div>
    )
} 