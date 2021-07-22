import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";

import { AuthContext } from '../components/auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {

    const { user } = useContext( AuthContext );



    return (
        <Router>
            <div>

                <Switch>

                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen } 
                        isAuthenticated = { user.isAuth }
                    />

                    {/* La ruta por defecto nunca debe de llevar el exact */}
                    <PrivateRoute 
                        path="/" 
                        component={ DashboardRoutes }
                        isAuthenticated = { user.isAuth }
                    /> 

                </Switch>

            </div>
        </Router>
    )
}
