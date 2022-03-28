import { useState } from "react";

const AddTask = ({ onAdd }: any) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const clearFields = () => {
        setText("");
        setDay("");
    };
    const onSubmit: any = (e: Event) => {
        e.preventDefault();
        if (!text) {
            alert("Please add a task");
            return;
        }
        onAdd({ text, day });

        clearFields();
    };
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input className="form-input" type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input className="form-input" type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <input type="submit" value="Save Task" />
        </form>
    );
};

export default AddTask;
