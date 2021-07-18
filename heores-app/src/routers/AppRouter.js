import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>

                    <Route exact path="/login" component={ LoginScreen } />

                    {/* La ruta por defecto nunca debe de llevar el exact */}
                    <Route path="/" component={ DashboardRoutes } /> 

                </Switch>

            </div>
        </Router>
    )
}
