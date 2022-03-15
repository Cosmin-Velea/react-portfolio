import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState} from 'react';
import  './App.scss'

function App() {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState( [{
        id: 0,
        text: 'Meeting at School',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    }, {
        id: 1,
        text: 'Meeting at Park',
        day: 'Feb 5th at 3:30pm',
        reminder: false
    }, {
        id: 2,
        text: 'Meeting at Mall',
        day: 'Feb 5th at 4:30pm',
        reminder: true
    }])
    //Add Task
    const addTask = (task: any) =>{
        const id = Math.floor(Math.random() * 1000) + 1;
        const newTask ={id, ...task}
        setTasks([...tasks, newTask]);
    }
    //Delete Task
    const deleteTask: any = (id: number) => {
       setTasks(tasks.filter((task)=>task.id !== id))
    }
    //Toggle Reminder
    const toggleReminder: any = (id: number) =>{
        setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task))
    }
    return (
    <div className="App">
        <Header title="Task Tracker" onAdd={()=>{setShowAddTask(!showAddTask)}} showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : <h3>No Tasks to show</h3>}
    </div>
);
}

export default App;