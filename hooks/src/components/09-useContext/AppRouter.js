import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';


export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>

                    <NavBar />

                    <div className = "container mt-5    ">
                        <Switch>
                            <Route exact path = "/about"  component   =   { AboutScreen } /> 
                            <Route exact path = "/login"  component   =   { LoginScreen } /> 
                            <Route exact path = "/"       component   =   { HomeScreen }  />

                            <Redirect to = "/" />
                        </Switch>
                    </div>

                </div>
            </Router>
        </div>
    )
}
