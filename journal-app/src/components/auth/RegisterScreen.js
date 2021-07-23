import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title" >Register</h3>

            <form>

                <input
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                />



                <input
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                />


                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Re-enter password"
                    name="password2"
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
