import './App.css'
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectSidebar from './components/ProjectSidebar';
import { useState } from 'react';

function App() {
  //Main content stranice će imati 3 moguća prikaza (State-a).
  //Prikaz bez označenog projekta (undefined), prikaz odabranog projekta(projectId)
  //također prikaz forme za dodavanje projekta (null)
  //projekte ćemo spremati u Array
  const [projectPageState, setProjectPageState] = useState({
    currentStateId : undefined,
    projectsArray: []

  });


  //funkcija s kojom otvaramo project formu
  function handleOpenProjectForm () {
    //kopiramo prijašnji state te dodajemo update-ani
    setProjectPageState(prevState => {
      return {
        ...prevState,
        currentStateId: null
      }
    }
   )
  }

  //funkcija koja sprema našu projekt formu
  function handleSaveProject (projectData) {
    setProjectPageState(prevState => {
      //kopiramo prijašnji state, stvaramo novi projekt s nasumičnim ID-em
      const projectId = Math.random();
      const newProject = {
        //u novi projekt kopiramo prijašnje podatke (dakle title, description i date)
        //dodajemo ID
        ...projectData,
        id: projectId,
      }


      return {
        ...prevState,
        //current state prebacujemo u "undefined", vraćamo se na početni zaslon
        currentStateId: undefined,
        //u project array kopiramo prijašnje vrijednosti (projekte) te dodajemo novi na kraj
        projectsArray: [...prevState.projectsArray, newProject]
      }
    }
   )
  }
  
  //prekidamo stvaranje novog projekta, vraćamo se na početni zaslon (currentStateId: undefined)
  function handleCancelProject () {
    setProjectPageState(prevState => {
      return {
        ...prevState,
        currentStateId: undefined
      }
    }
   )
  }

  let content;
  //ukoliko nam je project page state === null otvaramo project formu
  if (projectPageState.currentStateId === null) {
    content = <NewProject saveProject={handleSaveProject} cancelProject ={handleCancelProject}/>
  } else { //inače otvaramo početnu stranicu
    content = <NoProjectSelected openProjectForm = {handleOpenProjectForm}/>
  }
  
  //ProjectSidebar komponentna će uvijek biti prikazana stoga je dodajemo direktno u return
  return (
    <main>
      <div className='App'>
        <ProjectSidebar projects={projectPageState.projectsArray} openProjectForm = {handleOpenProjectForm}/>
        {content}
      </div>
    </main>
  )
}

export default App
