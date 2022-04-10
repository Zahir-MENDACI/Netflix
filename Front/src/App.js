import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Routes as Switch
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import Home from './pages/Home';
import Serie from './pages/Serie';
import Film from './pages/Film';
import Login from './pages/Login';
import Episode from './pages/Episode';

function App() {

  const handleClick = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("expiration")
    window.location.href = '/login';
  }
  
  return (
    <div className="App">
      <Router>
        <a href="/">Accueil</a>
        {
          !!localStorage.getItem("token") ? (
            <p  onClick={handleClick}>Logout</p>
          ) : null
        }
        <Switch>
          <Route exact={"true"} path="/login" element={<Login />}></Route>

          <Route exact={"true"} path='/' element={<PrivateRoute />}>
            <Route exact={"true"} path="/" element={<Home />}></Route>
          </Route>

          <Route exact={"true"} path='/serie/:id' element={<PrivateRoute />}>
            <Route exact={"true"} path="/serie/:id" element={<Serie />}></Route>
          </Route>
          <Route exact={"true"} path='/serie/:id/episode/:idEpisode' element={<PrivateRoute />}>
            <Route exact={"true"} path="/serie/:id/episode/:idEpisode" element={<Episode />}></Route>
          </Route>
          <Route exact={"true"} path='/film/:id' element={<PrivateRoute />}>
            <Route exact={"true"} path="/film/:id" element={<Film />}></Route>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
