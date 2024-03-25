import './App.css'
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectSidebar from './components/ProjectSidebar';
import { useState } from 'react';
import SelectedProject from './components/SelectedProject';

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
        //u novi projekt kopiramo unesene podatke (dakle title, description i date)
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

  function handleSelectProject (id) {
    setProjectPageState(prevState => {
      return {
        ...prevState,
        currentStateId: id,
      }
    })

  }

  function handleDeleteProject () {
    setProjectPageState(prevState => {
      return {
        ...prevState,
        currentStateId: undefined,
        projectsArray: prevState.projectsArray.filter((project) => project.id !== prevState.currentStateId)

      };
    });
    
  }

  const selectedProject = projectPageState.projectsArray.find((project => project.id === projectPageState.currentStateId))

  let content = <SelectedProject project={selectedProject} deleteProject = {handleDeleteProject}/>
 
  //ukoliko nam je project page state === null otvaramo project formu
  if (projectPageState.currentStateId === null) {
    content = <NewProject saveProject={handleSaveProject} cancelProject ={handleCancelProject}/>
  } else if (projectPageState.currentStateId === undefined) { 
    content = <NoProjectSelected openProjectForm = {handleOpenProjectForm}/>
  }

  
  
  //let ProjectSidebar komponentna će uvijek biti prikazana stoga je dodajemo direktno u return
  return (
    <main>
      <div className='App'>
        <ProjectSidebar projects={projectPageState.projectsArray} openProjectForm = {handleOpenProjectForm} selectProject={handleSelectProject}/>
        {content}
      </div>
    </main>
  )
}

export default App
