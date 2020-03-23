import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LandingPage from 'components/LandingPage';
import LoginPage from 'components/LoginPage';
import RegisterPage from 'components/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/register" component={RegisterPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
