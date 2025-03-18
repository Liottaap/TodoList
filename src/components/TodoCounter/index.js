import './TodoCounter.css'
import React from 'react';
import { TodoContext } from '../../TodoContext';

function TodoCounter() {
  const {
    completedTodos, 
    totalTodos, 
  } = React.useContext(TodoContext)


  const completedText = [
    `Sometimes you need to suffer to reach the end of the road... Congratulations.`,
    `Congratulations! Now you can go stare at the ceiling.` ,
    `The important thing isn't finishing, but the friends you make along the way... Congratulations.`,
    `You've completed the journey, congratulations!`,
    `The final boss has fallen... but now what? Congratulations.`,
    `Every checked task is a memory saved. Well done.`,
    `Mission accomplished. Now you can get lost in the credits of your own story.`,
    `You've reached the end of the level. Enjoy the victory screen before the console shuts off.`,
    `Game Over for the list, but the game goes on. Congratulations.`,
    `You leveled up in real life. No cutscene, but plenty of pride. Good job.`,
  ];
  /* Estado para mensaje aleatorio */
  const [congratsMessage, setCongratsMessage] = React.useState('');

  React.useEffect(() => {
    if (totalTodos > 0 && completedTodos === totalTodos) {
      // Elegir un mensaje aleatorio
      const randomIndex = Math.floor(Math.random() * completedText.length);
      setCongratsMessage(completedText[randomIndex]);
    } else {
      setCongratsMessage('');
    }
  }, [completedTodos, totalTodos]); // Se ejecuta cuando cambia el número de tareas completadas o el total

  return (
    <div className="todo-counter">
      {completedTodos === totalTodos && totalTodos > 0 ? (

        <div className='congrats-container'>
          <p className="congrats-message">{congratsMessage}</p>
        </div>

      ): (

        <h1 className="TodoCounter">
        You've completed <span>{completedTodos}</span> / <span>{totalTodos}</span> TODOs
      </h1>
      
      )}
    </div>

    
  );
}

export { TodoCounter };