import './App.css'
import {useState} from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

function App() {

  //Tasks state
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React",
      day:"July 20th, 11:30AM",
      isDone: false},
    {
      id: 2,
      text: "Walk dog",
      day:"July 20th, 1:30PM",
      isDone: false},
    {
      id: 3,
      text: "Attend class",
      day:"July 20th, 06:30PM",
      isDone: false}
    
  ])

  const [showAddTask, setshowAddTask] = useState(false)

  const toggleShow = () => setshowAddTask(!showAddTask)

  const addTask = (newTask) => {
    const id = Math.floor(Math.random()*100)+1
    const addNewTask = {id, ...newTask}
    setTasks([...tasks, addNewTask])
  } 

  const deleteTask = (deletedTaskId) => {

    setTasks(
      tasks.filter(
        (task) => task.id !== deletedTaskId
      )
    )

  }

  const toggleDone = (toggleDoneId) => {
    setTasks(
      tasks.map(
        (task) => task.id === toggleDoneId ? {...task, isDone: !task.isDone} : task
      )
    )
  }

  return (
    <div className='container'>

      <Header 
        title="TASK TRACKER" 
        showAddTask={showAddTask} 
        toggleShow={toggleShow}  
        />   
      {showAddTask && <AddTask addTask={addTask}/>}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone}/>
      ) : (
        <p style={{textAlign: "center"}}>NO TASKS TO SHOW.</p>
      )}


    </div>

  );
}

export default App;
