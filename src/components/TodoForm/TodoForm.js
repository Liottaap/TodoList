import React from 'react';
import { TodoContext } from '../../TodoContext';
import './todoForm.css'


function TodoForm(){
    const {
        addTodo,
        newTask,
        setOpenModal,
      } = React.useContext(TodoContext);
      const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    return(
        <form 
        className="todoForm-container" 
        onSubmit={onSubmit}>
            <label 
                className="tooForm-label"
                for="todo-inputs"
                name="todo-input-name"
                >Create a new task</label>
            <textarea 
            placeholder="Drink coffee"
            value={newTask}
            onChange={onChange}
            ></textarea>
            <div className="button-container">
                <button className="todoForm-button todoForm-button--cancel"
                onClick={onCancel}>close</button>
                <button type="submit" 
                className="todoForm-button todoForm-button--add">Add</button>
            </div>
        
        </form>
    )
}


export { TodoForm };