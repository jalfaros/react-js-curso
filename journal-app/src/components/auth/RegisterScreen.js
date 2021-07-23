import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {

   const [ formValues, handleInputChange ] = useForm({
       name     :   'Ignacio A',
       email    :   'jalfaros@estudiantec.cr',
       password :   'converse',
       password2:   'converse'
   });

   const { name, email, password, password2 } = formValues;

   const handleRegister = ( e ) => {
       e.preventDefault();

       //console.log( formValues );
   };

   const isFormValid = () => {
       //TODO
   }


    return (
        <>
            <h3 className="auth__title" >Register</h3>

            <form onSubmit={ handleRegister }>

                <input
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />



                <input
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />


                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={ password }
                    onChange={ handleInputChange }
                    />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Re-enter password"
                    name="password2"
                    value={ password2 }
                    onChange={ handleInputChange }
                    />

                <button
                    className="btn btn-primary btn-block mt-1"
                    type="submit"

                >
                    Create account
                </button>




                <div className="mt-5">

                    <Link
                        className="link"
                        to="/auth/login"
                    >
                        Already registered?
                    </Link>

                </div>
            </form>
        </>
    )
}
