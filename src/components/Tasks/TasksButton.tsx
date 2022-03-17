type ButtonProps = {
    color: "green" | "red";
    text: "Add" | "Close";
    onClick: any;
};
const TasksButton = ({ color, text, onClick }: ButtonProps) => {
    return (
        <button style={{ backgroundColor: color }} className="btn" onClick={onClick}>
            {text}
        </button>
    );
};

export default TasksButton;
