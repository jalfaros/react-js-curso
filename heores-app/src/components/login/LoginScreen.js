import React from 'react'

export const LoginScreen = ({ history }) => {


    const handleLogin = () => {
        console.log('Login')
        // history.push('/'); Agrega a la historia de visitas
        history.replace('/');// Reemplaza la historia de visitas y no guarda el componente anteriorA
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />


            <button 
                className="btn btn-primary"
                onClick = { handleLogin }
            >
                Login
            </button>

        </div>
    )
}
