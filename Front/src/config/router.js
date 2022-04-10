import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Routes as Switch
} from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Serie from '../pages/Serie';
import Film from '../pages/Film';
import PrivateRoute from '../PrivateRoute';

function Routes () {
    return (
        <Router>
            <Switch>
                {/* <Route exact={"true"} path="/login" element={<Login />}></Route> */}

                <Route exact={"true"} path='/' element={<PrivateRoute />}>
                    <Route exact={"true"} path="/" element={<Home />}></Route>
                </Route>

                <Route exact={"true"} path='/serie/:id' element={<PrivateRoute />}>
                    <Route exact={"true"} path="/serie/:id" element={<Serie/>}></Route>
                </Route>
                <Route exact={"true"} path='/film/:id' element={<PrivateRoute />}>
                    <Route exact={"true"} path="/film/:id" element={<Film/>}></Route>
                </Route>

            </Switch>
        </Router>
    );
};

export default Routes;