import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import '../03-examples/hooks.css'



const init = () => {
   
    return JSON.parse( localStorage.getItem('todos') ) || []; //Retorna el arreglo vacío si es falso el primer argumento

    // return [
    //     {   
    //         id: new Date().getTime(),
    //         todo: 'Comprar una Mac',
    //         done: false
    //     }
};
// ];




export const TodoApp = () => {

    
    const [ todo, dispatch ] = useReducer( todoReducer, [], init );// Es básicamente un useState chetado   



    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todo ) );        
    }, [todo])  


    const handleAddTodo = ( newTodo ) => {

        dispatch({
            type : 'add',
            payload: newTodo
        });

    };

  

    return (
        <div>
            <h1>useReducer | ({ todo.length })</h1>
            <hr />

            
            <div className="row" >

                <div className="col-7">
                    

                    <TodoList 
                        todoList = { todo } 
                        dispatch = { dispatch }
                    />

                </div>
                
                <div className="col-5">

                    <TodoAdd 
                        handleAddTodo = { handleAddTodo } 
                    />

                </div>
            </div>
        </div>
    )
}
