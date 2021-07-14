import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {


    const [ { todoForm } , handleInputChange, reset ] = useForm({
        todoForm : ''
    });

    


    const handleSubmit = (e) => {
        e.preventDefault();


        if ( !(todoForm.trim().length !== 0) ){
            return; 
        }

        const newTodo = {
            id: new Date().getTime(),
            todo:  todoForm,    
            done: false
        };

        handleAddTodo( newTodo )
        reset();

    };

    

    return (
        <>
            <h4>Add todo</h4>
            <hr />


            <form onSubmit = { handleSubmit } >
                <input 
                    className = "form-control"
                    type = "text"
                    name = "todoForm"
                    placeholder = "Buy..."
                    autoComplete = "off"
                    onChange = { handleInputChange }
                    value = { todoForm} 
                />

                <button 
                    className="btn btn-outline-primary mt-2"
                    style = {{ width: "100%",}}
                    type = "submit"
                >
                    + Add 
                </button>
            </form>
        </>
    )
}
