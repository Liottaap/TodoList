import './TodoItem.css'

function TodoItem({text, completed, onComplete, onDelete}) {
  return (
    <div className={`ToDoItem ${completed ? "ToDoItem--check" : ""}`}>
      <input 
          type="checkbox" 
          name="checkbox"
          className='icon-check' 
          checked={completed}
          onChange={onComplete}
          />
      <p 
        className={`toDoItem-p ${completed ? "TodoItem-p--complete" : ""}`}
      >{text}</p>
      <span 
        className='del-button'  
        onClick={onDelete}
      >X</span>
    </div>
  );
}

export { TodoItem };