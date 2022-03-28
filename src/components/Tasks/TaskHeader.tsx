import TasksButton from "./TasksButton";
import { useLocation } from "react-router-dom";

const TaskHeader = (props: any) => {
    const location = useLocation();
    return (
        <div className="tasks__header">
            <h2>{props.title}</h2>
            {location.pathname === "/tasks" ? <TasksButton color={props.showAdd ? "red" : "green"} text={props.showAdd ? "Close" : "Add"} onClick={props.onAdd} /> : ""}
        </div>
    );
};

export default TaskHeader;
