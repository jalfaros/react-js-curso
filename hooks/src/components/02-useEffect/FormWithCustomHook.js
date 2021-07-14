import React from 'react';
import { useForm } from '../../hooks/useForm';


import './effects.css';


export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( formValues )
    }


    const { name, email, password } = formValues;


    return (
        <form onSubmit={ handleSubmit }>
          <h1>Form with Custom Hook</h1>
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


          <div className = "form-group mt-2">
              <input 
                    type = "password"
                    name = "password"
                    className = "form-control"
                    placeholder = "password"
                    value = { password }
                    onChange = { handleInputChange }
              />
          </div>

          <button className = "btn btn-outline-primary mt-2" type = "submit">
              Submit
          </button>
        
        </form>
    )
}
