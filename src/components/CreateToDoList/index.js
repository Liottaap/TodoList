import './CreateTodoList.css'
import React from 'react'

function CreateTodoList({deleteAllTodos }) {

  return (
    <button
      className="create-button"
      onClick={deleteAllTodos} 
    >New List</button>
  );
}

export { CreateTodoList };