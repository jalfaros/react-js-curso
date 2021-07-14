import React, { useEffect, useState } from 'react';
import './effects.css';
import { Meesage } from './Meesage';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    

    // Se debe de hacer un efecto por cada evento que yo quiera realizar 

    const { name, email } = formState;
    
    useEffect( () => {
        //console.log('Hey')
    },[]);


    useEffect( () => {
        //console.log('Cambió form');
    }, [formState])


    useEffect( () => {
        //console.log('Cambió email');
    }, [email])


    // Funciones del formulario
    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    };


    return (
        <>
          <h1>useEffect</h1>
          <hr />

          <div className = "form-group">
              <input 
                    type = "text"
                    name = "name"
                    className = "form-control"
                    placeholder = "Name"
                    autoComplete = "off"
                    value = { name }
                    onChange = { handleInputChange }
              />
          </div>

          <div className = "form-group mt-2">
              <input 
                    type = "text"
                    name = "email"
                    className = "form-control"
                    placeholder = "email@email.com"
                    autoComplete = "off"
                    value = { email }
                    onChange = { handleInputChange }
              />
          </div>

          { (name === 'Jose') && <Meesage /> }



        </>
    )
}
