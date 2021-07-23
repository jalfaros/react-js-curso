import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { setErrorAction, removeErrorAction } from '../../actions/ui'
import { registerWithPassword } from '../../actions/auth'
import validator from 'validator'


export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msgErr } = useSelector( state => state.ui );

    const [formValues, handleInputChange] = useForm({
        name: 'Ignacio A',
        email: 'jalfaros@estudiantec.cr',
        password: 'converse',
        password2: 'converse'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {

        e.preventDefault();

        if ( isFormValid() ) {
            dispatch( registerWithPassword( formValues ) )
        }

    };

    const isFormValid = () => {

        if( name.trim().length === 0){
            dispatch( setErrorAction( 'Name is required' ) )
            return false;
        } else if ( !validator.isEmail( email ) ){
            dispatch( setErrorAction( 'Email is not valid' ) )
            return false;
        }else if ( password !== password2 || password.length < 5 ){
            dispatch( setErrorAction( 'Password should be at least 5 characters long and match' ) )
            return false;
        }

        dispatch( removeErrorAction() )
        return true;
    }


    return (
        <>
            <h3 className="auth__title" >Register</h3>

            <form onSubmit={handleRegister}>

                {
                    msgErr && 
                    (
                        <div className="auth__alert-error">
                                { msgErr }
                        </div>
                    )

                }
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />



                <input
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />


                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Re-enter password"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
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
