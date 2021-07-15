import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    // obtener referencia al context
    // obtener función del setuser

    const { setUser } = useContext( UserContext );

  

    return (

        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick = { () => setUser({
                    id: new Date().getTime(),
                    name : 'Jose Ignacio Alfaro',
                    email: 'email@email.com'
                })}
            >
                Login
            </button>
        </div>
    )
}
