import TasksButton from "./TasksButton";
import { useLocation } from "react-router-dom";

const TaskHeader = (props: any) => {
    const location = useLocation();
    return (
        <div className="tasks__header">
            <h1>{props.title}</h1>
            {location.pathname === "/tasks" ? <TasksButton color={props.showAdd ? "red" : "green"} text={props.showAdd ? "Close" : "Add"} onClick={props.onAdd} /> : ""}
        </div>
    );
};

export default TaskHeader;
