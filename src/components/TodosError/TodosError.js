import React from 'react';
import Error from '../../assets/retro-error.png'
// import './TodosError.css'

function TodosError(){

    return(
        <img src={Error} alt='Error' className='error'></img>
    )
}

export {TodosError};