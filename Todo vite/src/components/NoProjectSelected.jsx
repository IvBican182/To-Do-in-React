import NoProjectCss from "./NoProjectSelected.module.css";
import Logo from "../assets/ToDo-logo.png";

export default function NoProjectSelected () {
    return (
        <div className={NoProjectCss} alt="empty task">
            <img src={Logo}/>
            <h2>Select a project or create a new one !</h2>
            <p>
                <button>create a project</button>
            </p>
        </div>
    )
}