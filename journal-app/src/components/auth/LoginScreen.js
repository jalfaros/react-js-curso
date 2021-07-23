import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import {  googleLogin, startLoginEmailPassword } from '../../actions/auth'



export const LoginScreen = () => {

    const dispatch = useDispatch(); //Accedemos directamente al dispatch del store y este mediante la acción escoge el reducer correspondient

    const { loading } = useSelector(state => state.ui)

    console.log( loading )

    const [ formValues, handleInputChange ] = useForm({
        email: 'jalfaros@estudiantec.cr',
        password: 'converse'
    });

    const { email, password } = formValues;

    const handleLogin = ( e ) => {
        e.preventDefault();
        //Dispatch a store
        dispatch( startLoginEmailPassword( email , password ) )
    };

    const handleGoogleLogin = ( ) => {
        dispatch( googleLogin() );
    };


    return (
        <>
            <h3 className="auth__title" >Login</h3>

            <form onSubmit={handleLogin}>

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

                <button
                    className="btn btn-primary btn-block mt-1"
                    type="submit"
                    disabled={ loading }

                >
                    Login
                </button>



                <div className="auth__social-networks mt-5">
                    <div
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                        
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <div className="mt-5">

                    <Link
                        className="link"
                        to="/auth/register"
                    >
                        Create new account
                    </Link>

                </div>
            </form>
        </>
    )
}
