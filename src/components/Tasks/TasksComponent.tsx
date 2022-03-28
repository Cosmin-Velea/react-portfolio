import Tasks from "./Tasks";
import AddTask from "./AddTask";
import TaskHeader from "./TaskHeader";
import { useState, useEffect } from "react";
const { v4: uuidv4 } = require('uuid');

const TasksComponent: any = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState<any>([]);
    const getTasks = JSON.parse(localStorage.getItem("tasks") || '[]');

    useEffect(() => {
        if (getTasks == null) {
            setTasks([])
        } else {
            setTasks(getTasks);
        }
    }, []);

    //Add Task
    const addTask = async (task: any) => {
        const id = uuidv4();
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
        localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    };

    //Delete Task
    const deleteTask: any = async (id: number) => {
        const deleteTask = tasks.filter((task: any) => task.id !== id);
        setTasks(deleteTask);
        localStorage.setItem("tasks", JSON.stringify(deleteTask));
    };

    //Edit Task
    const editTask: any = async (id: number) => {
        const text = prompt('Task Name');
        const day = prompt('Day and Time');
        const data = tasks.map((currentTask: any) => {
            if (currentTask.id === id) {
                return {
                    ...currentTask,
                    text: text,
                    day: day,
                    id: uuidv4()
                }
            }
            return currentTask;
        })
        localStorage.setItem("tasks", JSON.stringify(data));
        window.location.reload();
    }

    return (
        <div className="container">
            <div className="tasks tasks-container">
                <TaskHeader title="Task Tracker" onAdd={() => { setShowAddTask(!showAddTask); }} showAdd={showAddTask} />

                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} /> : <h3>No Tasks to show</h3>}
            </div>
        </div>
    );
};

export default TasksComponent;
