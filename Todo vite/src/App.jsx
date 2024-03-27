import './App.css'
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectSidebar from './components/ProjectSidebar';
import { useState } from 'react';
import Tasks from './components/Tasks';
import SelectedProject from './components/SelectedProject';


function App() {
  //Main content stranice će imati 3 moguća prikaza (State-a).
  //Prikaz bez označenog projekta (undefined), prikaz odabranog projekta(projectId)
  //također prikaz forme za dodavanje projekta (null)
  //projekte ćemo spremati u Array
  const [projectPageState, setProjectPageState] = useState({
    currentStateId : undefined,
    projectsArray: [],

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

  //funkcija koja sprema našu projekt formu, tojest sami projekt
  function handleSaveProject (projectData) {
    setProjectPageState(prevState => {
      //kopiramo prijašnji state, stvaramo novi projekt s nasumičnim ID-em
      const projectId = Math.random();
      const newProject = {
        //u novi projekt kopiramo unesene podatke (dakle title, description i date)
        //dodajemo ID te tasks Array
        ...projectData,
        id: projectId,
        //u tasks property spremamo taskove (array)
        tasks: []
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
  
  //funkcija odabira projekta iz sidebara
  function handleSelectProject (id) {
    setProjectPageState(prevState => {
      return {
        ...prevState,
        //mijenjamo current state u ID odabranog projekta
        currentStateId: id,
      }
    })

  }
  
  //funkcija za delete projekta
  function handleDeleteProject () {
    setProjectPageState(prevState => {
      return {
        ...prevState,
        //vraćamo se na početni zaslon
        currentStateId: undefined,
        //filtriramo projects array na projekte čiji ID nije jednak ID-u trenutno odabranog projekta, samim time će
        //ostati u sidebaru svi projekti osim odabranog
        projectsArray: prevState.projectsArray.filter((project) => project.id !== prevState.currentStateId)

      };
    });
    
  }

  // funckija za dodavanje taskova
  function handleAddTask (text) {
    setProjectPageState(prevState => {
      //dodajemo random id broj
      const taskId = Math.random();
      const newTask = {
      //task text
      taskText: text,
      id: taskId,
    }
       //pushamo task objekt u trenutno odabrani Projekt
       selectedProject.tasks.push(newTask)
       console.log(selectedProject)
      return {
        ...prevState
      }
    })
  }
  
//funkcija za delete taska, prima ID
  function handleDeleteTask (id) {
    setProjectPageState(prevState => {
      //array.filter će kreirati novi array stoga tu vrijednost spemamo u selectedProject.tasks array
      //želimo sve taskove čiji ID nije jednak odabranom ID-u spremiti u naš tasks array, stoga će odrabrani biti izbrisan
      selectedProject.tasks = selectedProject.tasks.filter((task) => task.id !== id);
      return {
        ...prevState
        }
    })

  }
  
  console.log(projectPageState.projectsArray);

  //definiramo odabrani projekt, dakle projekt iz projectsArray čiji je ID jednak ID-u trenutnog state ID-a
  const selectedProject = projectPageState.projectsArray.find((project => project.id === projectPageState.currentStateId))


  

  return (
    <main>
      <div className='App'>
        {/*project sidebar prikazujemo uvijek, stoga će odmah biti u returnu*/}
        <ProjectSidebar 
        projects={projectPageState.projectsArray} 
        openProjectForm = {handleOpenProjectForm} 
        selectProject={handleSelectProject}/>
        {/*ukoliko je state === null prikazujemo project formu*/}
        {projectPageState.currentStateId === null && 
        <NewProject saveProject={handleSaveProject} cancelProject ={handleCancelProject}/>}
        {/*ukoliko je state undefined prikazujemo početni zaslon*/}
        {projectPageState.currentStateId === undefined &&
        <NoProjectSelected openProjectForm = {handleOpenProjectForm}/>}
        {/*ukoliko je odabran project, prikazujemo njegovu komponentnu */}
        {selectedProject && <SelectedProject project={selectedProject}>
        <div className="project-container">
            <div>
                <p>
                  <button className='delete-project-btn' onClick={handleDeleteProject}>Delete</button>
                </p>
            </div>
          <Tasks  
          //u Tasks komponentnu šaljemo propse
          tasks={selectedProject.tasks}
          addTask={handleAddTask}
          deleteTask={handleDeleteTask}/>
        </div>
        </SelectedProject>}
      </div>
    </main> 
  )
}

export default App
