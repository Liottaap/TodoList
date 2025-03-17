import React from 'react';
import './TodoSearch.css'
import { CreateTodoList } from '../CreateToDoList';
import { AudioPlayer } from '../../components/Play/Play';
import { TodoContext } from '../../TodoContext';


function TodoSearch(){
  const {
    searchValue,
    setSearchValue,
    deleteAllTodos,
  } = React.useContext(TodoContext)
  /* Borrar lista */

  return (

    <div className='bg-container'>
      <section className='bg-container-top'>
      <h2>Create your Own To Do list!</h2>
      {/* Buscador */}
      <input
        placeholder="Cortar cebolla"
        className='toDoSearch'
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <CreateTodoList deleteAllTodos={deleteAllTodos}/>
      </section>
      <AudioPlayer 
      />


      {/* Botones */}
{/*       <article className='bg-buttons'>
        <button>New List</button>
      </article> */}
    </div>

  );
}

export { TodoSearch };