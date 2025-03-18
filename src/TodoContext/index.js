import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);


/* FUNCION PARA CREAR NUEVOS TODOS */
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };
/* FUNCION PARA BORRAR TODOS */
const deleteTodo = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  );
  newTodos.splice(todoIndex, 1);
  saveTodos(newTodos);
};

/* FUNCION PARA BORRAR TODOS LOS TODOS
  Y COMENZAR DE NUEVO LA LISTA */
const deleteAllTodos = () => {
  saveTodos([])
}

  /* FUNCION PARA ESTABLECER ESTADO TRUE O FALSE 
  Y PODER MARCAR Y DESMARCAR EL CHECKOUT */
  const completeTodo = (text) => {
    const newTodos = todos.map(todo =>
      todo.text === text ? {...todo, completed: !todo.completed} : todo);
      saveTodos(newTodos);
};

    /* FUNCION PARA EL CONTADOR DE
  CUANTOS TODOS HEMOS COMPLETADO */
  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  /* FUNCION PARA BUSCAR LOS TODOS
  FILTRANDO A PARTIR DEL BUSCADOR */
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );
  
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      deleteAllTodos,
      saveTodos,

    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider }