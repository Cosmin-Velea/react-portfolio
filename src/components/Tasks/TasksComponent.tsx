import Tasks from "./Tasks";
import AddTask from "./AddTask";
import TaskHeader from "./TaskHeader";
import "./Tasks.scss";
import { useState, useEffect } from "react";

const TasksComponent = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState<any>([]);
    //Use Effect
    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
        };
        getTasks();
    }, []);
    //Fetch tasks
    const fetchTasks = async () => {
        const res = await fetch("http://localhost:5000/tasks");
        const data = await res.json();

        return data;
    };
    //Fetch task
    const fetchTask = async (id: number) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`);
        const data = await res.json();

        return data;
    };
    //Add Task
    const addTask = async (task: any) => {
        const res = await fetch(`http://localhost:5000/tasks/`, {
            method: "POST",
            headers: {
                "Content-Type": " application/json",
            },
            body: JSON.stringify(task),
        });

        const data = await res.json();

        setTasks([...tasks, data]);
    };
    //Delete Task
    const deleteTask: any = async (id: number) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "DELETE",
        });

        setTasks(tasks.filter((task: any) => task.id !== id));
    };
    //Toggle Reminder
    const toggleReminder: any = async (id: number) => {
        const taskToToggle = await fetchTask(id);
        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": " application/json",
            },
            body: JSON.stringify(updTask),
        });

        const data = await res.json();

        setTasks(tasks.map((task: any) => (task.id === id ? { ...task, reminder: data.reminder } : task)));
    };
    return (
        <div className="container">
            <div className="tasks-container">
                <TaskHeader title="Task Tracker" onAdd={() => { setShowAddTask(!showAddTask); }} showAdd={showAddTask} />

                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <h3>No Tasks to show</h3>}
            </div>
        </div>
    );
};

export default TasksComponent;
