import {FaTimes, FaPencilAlt} from 'react-icons/fa'

const Task = ({task, onDelete, onEdit}) => {
  return (
    <div className={`task`}>
        <FaPencilAlt onClick={()=>{onEdit(task.id)}} className="edit-icon" />
        <FaTimes onClick={()=>{onDelete(task.id)}} style={{color: 'red', cursor:'pointer'}} />
        <h3>{task.text} </h3>
        <p>{task.day}</p>

    </div>
  )
}

export default Task