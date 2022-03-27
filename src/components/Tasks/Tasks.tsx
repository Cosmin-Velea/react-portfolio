import Task from "./Task";

type TasksType = {
    tasks: any,
    onDelete: Function,
    onEdit: Function,
}
const Tasks = ({ tasks, onDelete, onEdit }: TasksType) => {
    return (
        <>
            {tasks.map((task: any) => {
                return <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />;
            })}
        </>
    );
};

export default Tasks;
