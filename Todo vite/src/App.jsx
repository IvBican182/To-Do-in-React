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
        //u tasks property spremamo taskove
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



  function handleAddTask (text) {
    setProjectPageState(prevState => {
      const taskId = Math.random();
      const newTask = {
      taskText: text,
      projectId: prevState.currentStateId,
      id: taskId,
    }
       selectedProject.tasks.push(newTask)
       console.log(selectedProject)
      return {
        ...prevState,
  
      }
    })
  }
  
//tu ne znam šta treba
  function handleDeleteTask (id) {
    setProjectPageState(prevState => {
      const remainingTasks = selectedProject.tasks.filter((task) => task.id !== id);
      console.log(remainingTasks)
      return {
        ...prevState,
        remainingTasks
        
        
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
          //remainingTasks = {projectPageState.tasks}
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
