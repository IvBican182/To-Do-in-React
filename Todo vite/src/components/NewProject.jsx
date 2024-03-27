import { useRef } from "react";
import Input from "./Input";
import NewProjectCSS from "../css/NewProject.module.css";
import Modal from "./Modal";

//komponenta za dodavanje novog projekta (project form)
export default function NewProject ( {cancelProject, saveProject} ) {
    const modal=useRef();
    
    //povezujemo korsnikove unose s Input komponentom
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    
    //funkcija za spremanje projekta
    function handleSave () {
        //spremamo korisničke unose iz inputa u varijable
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        //ukoliko je korisnikov unos prazan otvorit ćemo Modal komponentnu (error)
        if (enteredTitle.trim() === "" || 
            enteredDescription.trim() === "" || 
            enteredDueDate.trim() === "") {
             modal.current.open(); 
             return;
        }
        //spremamo unose kao objekt, te podatke ćemo iskoristiti za new Project
        saveProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })

    }

    return (
        <>
        <Modal ref={modal}>
            <h2>Oops.. something went wrong</h2>
            <p>Wrong input, all fields must be filled !</p>
        </Modal> 
        
        <div className={NewProjectCSS.container}>
            <div>
              <Input type="text" ref = {title} label="Title"/>
              <Input ref = {description} label="Description" textarea/>
              <Input type="date" ref = {dueDate} label="Due Date"/>
            </div> 
            <menu className={NewProjectCSS.menu}>
                <li className={NewProjectCSS.li}>
                    <button className={NewProjectCSS.button2} onClick={cancelProject}>cancel</button>
                </li>
                <li className={NewProjectCSS.li}>
                    <button className={NewProjectCSS.button1} onClick={handleSave}>save</button>
                </li>
            </menu>
        </div>
        </>
    
    )
}