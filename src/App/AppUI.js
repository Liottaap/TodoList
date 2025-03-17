/* CONTEXTO */
import React from 'react';
import { TodoContext } from "../TodoContext";

import Footer from '../components/layout/Footer';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodosLoading } from '../components/TodosLoading/TodosLoading';
import { TodosError } from '../components/TodosError/TodosError';
import { EmptyTodos } from '../components/EmptyTodos/EmptyTodos';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../Modal/index'
import { TodoForm } from '../components/TodoForm/TodoForm';
import '../index.css';

function AppUI() {
    const {
      loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      searchValue,
      setSearchValue
    } = React.useContext(TodoContext);
    return (
        <main className="main-container">
            <section className="main-section">
            {/* BUSCADOR Y FONDO */}
                <article className="bg-section">
                    <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
                </article>

                {/* TODO SECTION*/}
                <article className="todo-section">
                    <h1 className="toDoSection-title">YOUR TASKS</h1>
                    <TodoCounter />
                {/* LISTA DE TO DOS */}
                    <TodoList>
                        {loading && <TodosLoading />}
                        {error && <TodosError />}
                        {/* Si no está cargando y los todos son igual a 0 entonces saldrá este mensaje */}
                        {!loading && searchedTodos.length === 0 && <EmptyTodos />}

                        {/* FILTRADO */}
                        {searchedTodos.map((todo) => (
                            <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}

                            />


                        ))}
                    </TodoList>
                </article>
            </section>

            <CreateTodoButton 
            setOpenModal={setOpenModal}/>
            {openModal && (
            <Modal>
                <TodoForm/>
            </Modal>)}
            <Footer />
        </main>
    );
}

export default AppUI;